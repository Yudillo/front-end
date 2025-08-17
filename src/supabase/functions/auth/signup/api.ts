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
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        display_name: nickname,
      },
    },
  });
  console.log('data: ', data);
  console.log('error: ', error);

  if (error) {
    return '회원가입이 정상적으로 되지 않았습니다.';
  }
}
