import { MODAL_MESSAGE } from '@/constants/modalMessage';
import supabase from '@/supabase/client';

export async function signoutUser() {
  await supabase.auth.signOut();

  return MODAL_MESSAGE.checkSignout;
}
