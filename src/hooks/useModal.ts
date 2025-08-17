import { useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const handleOpen = (newMessage: string) => {
    setIsOpen(true);
    setMessage(newMessage);
  };

  const handleConfirm = (newMessage: string) => {
    setIsOpen(true);
    setIsConfirm(true);
    setMessage(newMessage);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsConfirm(false);
    setMessage('');
  };

  return { isOpen, isConfirm, message, handleOpen, handleConfirm, handleClose };
};
