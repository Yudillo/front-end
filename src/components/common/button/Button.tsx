import * as s from './Button.css';

interface ButtonProps {
  title: string;
}

export default function Button({ title }: ButtonProps) {
  return (
    <div className={s.buttonWrapper}>
      <button className={s.button} type='button'>
        {title}
      </button>
    </div>
  );
}
