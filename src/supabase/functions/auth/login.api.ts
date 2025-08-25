import { MODAL_MESSAGE } from '@/constants/modalMessage';
import supabase from '@/supabase/client';
import type { AuthInputType } from '@/types/authInput';

export async function signInUser({
  email,
  password,
}: Pick<AuthInputType, 'email' | 'password'>) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  const apiResult: {
    isSuccess: boolean;
    message: string;
  } = { isSuccess: false, message: '' };

  if (error) {
    apiResult.message = MODAL_MESSAGE.failLogin;
    return apiResult;
  }
  apiResult.message = MODAL_MESSAGE.successLogin;
  apiResult.isSuccess = true;

  return apiResult;
}
