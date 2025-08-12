import type { AuthInputType } from '@/types/authInput';

export const validationValue = (key: keyof AuthInputType, value: string) => {
  const regex = {
    email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    code: /^\d{6}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,16}$/,
    passwordCheck:
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,16}$/,
    nickname: /^(?:\d{6}|[가-힣a-zA-Z0-9]{1,8})$/,
  };

  return regex[key].test(value);
};
