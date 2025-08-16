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
  const { data, error: signupError } = await supabase.auth.signUp({
    email,
    password,
  });
  console.log('data: ', data);
  console.log('signupError: ', signupError);

  if (signupError) {
    return '회원가입이 정상적으로 되지 않았습니다.';
  }
  if (data.user) {
    const { data, error } = await supabase
      .from('user')
      .insert([{ email, password, nickname }]);
    if (error) return '회원가입이 정상적으로 되지 않았습니다.';
    return data;
  }
}
