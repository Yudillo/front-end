import Button, { type ButtonProps } from './Button';

export default function ButtonBasic(
  props: Omit<ButtonProps, 'buttonStyle' | 'type'>,
) {
  return <Button {...props} buttonStyle='basic' type='submit' />;
}
