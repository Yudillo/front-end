import { MODAL_MESSAGE } from '@/constants/modalMessage';
import supabase from '@/supabase/client';
import type { AuthInputType } from '@/types/authInput';

export async function verifyEmail({ email }: Pick<AuthInputType, 'email'>) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: 'http://localhost:3000/auth/reset-password',
  });

  if (error || data === null) {
    return false;
  }

  return true;
}

export async function updatePassword({
  password,
}: Pick<AuthInputType, 'password'>) {
  const { data, error } = await supabase.auth.updateUser({ password });
  const apiResult: {
    isSuccess: boolean;
    message: string;
  } = { isSuccess: false, message: '' };

  if (
    error?.message === 'New password should be different from the old password.'
  ) {
    apiResult.message = MODAL_MESSAGE.samePassword;
    return apiResult;
  }

  if (error) {
    apiResult.message = MODAL_MESSAGE.failChangePassword;
    return apiResult;
  }

  apiResult.isSuccess = true;
  apiResult.message = MODAL_MESSAGE.successChangePassword;
  return apiResult;
}
