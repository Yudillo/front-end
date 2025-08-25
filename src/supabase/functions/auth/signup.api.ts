import { MODAL_MESSAGE } from '@/constants/modalMessage';
import supabase from '@/supabase/client';
import type { AuthInputType } from '@/types/authInput';

export async function getUser() {
  const { data, error } = await supabase.from('user').select('*');
  if (error) throw error;

  return data;
}

export async function addUser({
  email,
  password,
  nickname,
}: Pick<AuthInputType, 'email' | 'password' | 'nickname'>) {
  const apiResult: {
    isSuccess: boolean;
    message: string;
  } = { isSuccess: false, message: '' };

  const { data: existingUser, error: existingUserError } = await supabase
    .from('user')
    .select('*')
    .eq('email', email);

  if (existingUserError) {
    apiResult.message = MODAL_MESSAGE.unknownError;
    return apiResult;
  }

  if (existingUser && existingUser.length > 0) {
    apiResult.message = MODAL_MESSAGE.dupleEmail;
    return apiResult;
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        display_name: nickname,
      },
    },
  });

  await supabase
    .from('user')
    .insert({ id: data.user?.id, email: data.user?.email });

  if (error) {
    apiResult.message = MODAL_MESSAGE.failSignup;
    return apiResult;
  }
  apiResult.isSuccess = true;
  apiResult.message = MODAL_MESSAGE.confirmSignup;
  return apiResult;
}
