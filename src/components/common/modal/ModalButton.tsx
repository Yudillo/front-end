import type React from 'react';
import { modalButton } from './ModalButton.css';

interface ModalButtonProps {
  variantStyle: 'check' | 'cancel';
}

type ModalButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ModalButtonProps;

export default function ModalButton({ variantStyle }: ModalButtonType) {
  return (
    <button
      className={modalButton.button({ variantStyle })}
      type='button'
    ></button>
  );
}
