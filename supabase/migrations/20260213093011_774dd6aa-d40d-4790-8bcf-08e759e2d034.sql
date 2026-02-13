-- Fix 1: Allow users to create their own profile (needed for signup trigger fallback)
CREATE POLICY "Users can create own profile"
ON public.profiles
FOR INSERT
TO authenticated
WITH CHECK (auth_id = auth.uid());

-- Fix 2: Explicitly deny anonymous access to profiles
CREATE POLICY "Deny anonymous access to profiles"
ON public.profiles
FOR SELECT
TO anon
USING (false);