import supabase from '@/supabase/client';

export async function signoutUser() {
  await supabase.auth.signOut();
}
