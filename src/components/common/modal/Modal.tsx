import ReactDOM from 'react-dom';
import { XMarkIcon } from '@heroicons/react/24/solid';
import useOutsideClick from '@/hooks/useOutsideClick';
import { modal } from './Modal.css';
import ModalButton from './ModalButton';
import { useEffect } from 'react';

export interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  isConfirm?: boolean;
  message?: string;
  onOpen?: (newMessage: string) => void;
  onConfirm?: (newMessage: string) => void;
  onClose: () => void;
  onCheck?: () => void;
  onCancel?: () => void;
}

export default function Modal({
  children,
  isOpen,
  isConfirm,
  onClose = (e?: React.SyntheticEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
  },
  onCheck = onClose,
  onCancel = onClose,
}: ModalProps) {
  const modalRoot = document?.getElementById('modal-root');
  const ref = useOutsideClick(() => onClose());

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!modalRoot) return;

  return ReactDOM.createPortal(
    <>
      {isOpen && (
        <>
          <div className={modal.overlaySection}></div>
          <section className={modal.modalSection} ref={ref}>
            <header className={modal.modalHeader}>
              <button
                type='button'
                className={modal.modalXMarkButton}
                onClick={onClose}
              >
                <XMarkIcon className={modal.modalXMarkIcon} />
              </button>
            </header>
            <main className={modal.modalMain}>{children}</main>
            <div className={modal.modalButtonWrapper}>
              <ModalButton
                variantStyle='check'
                buttonConfirm='확인'
                onClick={onCheck}
              />
              {isConfirm && (
                <ModalButton
                  variantStyle='cancel'
                  buttonConfirm='취소'
                  onClick={onCancel}
                />
              )}
            </div>
          </section>
        </>
      )}
    </>,
    modalRoot,
  );
}
