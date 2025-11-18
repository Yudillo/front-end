export interface AuthInputType {
  email: string;
  password: string;
  passwordCheck: string;
  nickname: string;
}

export type LoginInputType = Pick<AuthInputType, 'email'|'password'>