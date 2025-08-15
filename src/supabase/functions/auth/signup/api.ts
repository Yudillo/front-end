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
  const { data, error } = await supabase
    .from('user')
    .insert([{ email, password, nickname }]);
  if (error) throw error;
  return data;
}
