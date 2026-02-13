
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_full_name TEXT;
BEGIN
  v_full_name := COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email);
  
  -- Enforce length limit
  IF length(v_full_name) > 100 THEN
    v_full_name := substring(v_full_name, 1, 100);
  END IF;
  
  -- Remove control characters and trim
  v_full_name := regexp_replace(trim(v_full_name), E'[\\x00-\\x1F\\x7F]', '', 'g');
  
  -- Ensure not empty
  IF v_full_name = '' THEN
    v_full_name := NEW.email;
  END IF;
  
  INSERT INTO public.profiles (auth_id, email, full_name)
  VALUES (NEW.id, NEW.email, v_full_name);
  
  RETURN NEW;
END;
$$;
