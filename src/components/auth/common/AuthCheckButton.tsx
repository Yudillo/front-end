import { authCheckButton } from './AuthCheckButton.css';

interface AuthCheckButtonProps {
  checkButtonTitle: string;
}

type AuthCheckButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> &
  AuthCheckButtonProps;

export default function AuthCheckButton({
  checkButtonTitle,
  onClick,
}: AuthCheckButtonType) {
  return (
    <div>
      <button
        className={authCheckButton.checkButton}
        type='button'
        onClick={onClick}
      >
        {checkButtonTitle}
      </button>
    </div>
  );
}
