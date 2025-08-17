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
  if (error) {
    return '로그인이 정상적으로 되지 않았습니다.';
  }
  console.log('data', data);

  return data;
}
