import type React from 'react';
import { modalButton } from './ModalButton.css';

interface ModalButtonProps {
  variantStyle: 'check' | 'cancel';
  buttonConfirm: string;
}

type ModalButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ModalButtonProps;

export default function ModalButton({
  variantStyle,
  buttonConfirm,
  onClick,
}: ModalButtonType) {
  return (
    <button
      className={modalButton.button({ variantStyle })}
      type='button'
      onClick={onClick}
    >
      {buttonConfirm}
    </button>
  );
}
