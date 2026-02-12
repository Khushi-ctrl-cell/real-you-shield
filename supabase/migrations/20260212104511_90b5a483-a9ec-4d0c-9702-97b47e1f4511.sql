
-- Create role enum
CREATE TYPE public.app_role AS ENUM ('org_admin', 'security_analyst', 'auditor');

-- Organizations table
CREATE TABLE public.organizations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.organizations ENABLE ROW LEVEL SECURITY;

-- Profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  auth_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  org_id UUID REFERENCES public.organizations(id) ON DELETE SET NULL,
  email TEXT NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- User roles table (separate from profiles per security requirements)
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  org_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  role app_role NOT NULL DEFAULT 'auditor',
  invited_by UUID REFERENCES public.profiles(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(profile_id, org_id)
);
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Devices table
CREATE TABLE public.devices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  device_identifier TEXT NOT NULL,
  name TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'active',
  last_seen TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.devices ENABLE ROW LEVEL SECURITY;

-- Verification logs table
CREATE TABLE public.verification_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  device_id UUID NOT NULL REFERENCES public.devices(id) ON DELETE CASCADE,
  timestamp TIMESTAMPTZ NOT NULL DEFAULT now(),
  risk_score NUMERIC(5,2) NOT NULL CHECK (risk_score >= 0 AND risk_score <= 100),
  analysis_type TEXT NOT NULL,
  result TEXT NOT NULL,
  confidence NUMERIC(5,2),
  reason TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.verification_logs ENABLE ROW LEVEL SECURITY;

-- Enable realtime for verification_logs
ALTER PUBLICATION supabase_realtime ADD TABLE public.verification_logs;

-- Helper functions (security definer to avoid RLS recursion)
CREATE OR REPLACE FUNCTION public.get_user_profile_id(_auth_id UUID)
RETURNS UUID
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT id FROM profiles WHERE auth_id = _auth_id LIMIT 1;
$$;

CREATE OR REPLACE FUNCTION public.get_user_org_id(_auth_id UUID)
RETURNS UUID
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT org_id FROM profiles WHERE auth_id = _auth_id LIMIT 1;
$$;

CREATE OR REPLACE FUNCTION public.has_org_role(_auth_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM user_roles ur
    JOIN profiles p ON p.id = ur.profile_id
    WHERE p.auth_id = _auth_id AND ur.role = _role
  );
$$;

CREATE OR REPLACE FUNCTION public.is_member_of_org(_auth_id UUID, _org_id UUID)
RETURNS BOOLEAN
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM profiles WHERE auth_id = _auth_id AND org_id = _org_id
  );
$$;

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (auth_id, email, full_name)
  VALUES (NEW.id, NEW.email, COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email));
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Updated_at triggers
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_organizations_updated_at BEFORE UPDATE ON public.organizations FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_user_roles_updated_at BEFORE UPDATE ON public.user_roles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_devices_updated_at BEFORE UPDATE ON public.devices FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- RLS Policies

-- Organizations: members can read their own org
CREATE POLICY "Members can view own org" ON public.organizations
  FOR SELECT TO authenticated
  USING (public.is_member_of_org(auth.uid(), id));

-- Profiles: members can view org members
CREATE POLICY "Members can view org profiles" ON public.profiles
  FOR SELECT TO authenticated
  USING (public.is_member_of_org(auth.uid(), org_id) OR auth_id = auth.uid());

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE TO authenticated
  USING (auth_id = auth.uid());

-- User roles: members can view org roles
CREATE POLICY "Members can view org roles" ON public.user_roles
  FOR SELECT TO authenticated
  USING (public.is_member_of_org(auth.uid(), org_id));

CREATE POLICY "Admins can manage roles" ON public.user_roles
  FOR INSERT TO authenticated
  WITH CHECK (
    public.has_org_role(auth.uid(), 'org_admin')
    AND org_id = public.get_user_org_id(auth.uid())
  );

CREATE POLICY "Admins can update roles" ON public.user_roles
  FOR UPDATE TO authenticated
  USING (
    public.has_org_role(auth.uid(), 'org_admin')
    AND org_id = public.get_user_org_id(auth.uid())
  );

CREATE POLICY "Admins can delete roles" ON public.user_roles
  FOR DELETE TO authenticated
  USING (
    public.has_org_role(auth.uid(), 'org_admin')
    AND org_id = public.get_user_org_id(auth.uid())
  );

-- Devices: org members can view, admins can manage
CREATE POLICY "Members can view org devices" ON public.devices
  FOR SELECT TO authenticated
  USING (public.is_member_of_org(auth.uid(), org_id));

CREATE POLICY "Admins can create devices" ON public.devices
  FOR INSERT TO authenticated
  WITH CHECK (
    public.has_org_role(auth.uid(), 'org_admin')
    AND public.is_member_of_org(auth.uid(), org_id)
  );

CREATE POLICY "Admins can update devices" ON public.devices
  FOR UPDATE TO authenticated
  USING (
    public.has_org_role(auth.uid(), 'org_admin')
    AND public.is_member_of_org(auth.uid(), org_id)
  );

CREATE POLICY "Admins can delete devices" ON public.devices
  FOR DELETE TO authenticated
  USING (
    public.has_org_role(auth.uid(), 'org_admin')
    AND public.is_member_of_org(auth.uid(), org_id)
  );

-- Verification logs: members can view, admins+analysts can create
CREATE POLICY "Members can view org logs" ON public.verification_logs
  FOR SELECT TO authenticated
  USING (public.is_member_of_org(auth.uid(), org_id));

CREATE POLICY "Analysts and admins can create logs" ON public.verification_logs
  FOR INSERT TO authenticated
  WITH CHECK (
    public.is_member_of_org(auth.uid(), org_id)
    AND (public.has_org_role(auth.uid(), 'org_admin') OR public.has_org_role(auth.uid(), 'security_analyst'))
  );
