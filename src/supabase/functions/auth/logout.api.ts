import { MODAL_MESSAGE } from '@/constants/modalMessage';
import supabase from '@/supabase/client';

export async function signoutUser() {
  const { error } = await supabase.auth.signOut();
  const apiResult: {
    isSuccess: boolean;
    message: string;
  } = { isSuccess: false, message: '' };

  if (error) {
    apiResult.message = MODAL_MESSAGE.failSignout;
    return apiResult;
  }
  apiResult.isSuccess = true;
  apiResult.message = MODAL_MESSAGE.successSignout;
  return apiResult;
}
