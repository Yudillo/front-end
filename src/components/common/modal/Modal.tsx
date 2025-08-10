import * as s from './Modal.css';
import { createPortal } from 'react-dom';
import { XMarkIcon } from '@heroicons/react/24/solid';
import useOutsideClick from '@/hooks/useOutsideClick';

interface ModalProps {
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
  isConfirm = true,
  onClose = (e?: React.SyntheticEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
  },
  onCheck = onClose,
  onCancel,
}: ModalProps) {
  const ref = useOutsideClick(() => onClose());

  return createPortal(
    <>
      {isOpen && (
        <>
          <div className={s.modalOverlay}></div>
          <section className={s.modalSection} ref={ref}>
            <header className={s.modalHeader}>
              <button
                type='button'
                className={s.modalXMarkButton}
                onClick={onClose}
              >
                <XMarkIcon className={s.modalXMarkIcon} />
              </button>
            </header>
            <main className={s.modalMain}>{children}</main>
            <div className={s.modalButtonWrapper}>
              <button
                className={s.modalButton({ backColor: 'check' })}
                type='button'
                onClick={onCheck}
              >
                확인
              </button>
              {isConfirm && (
                <button
                  className={s.modalButton({ backColor: 'cancel' })}
                  type='button'
                  onClick={onCancel}
                >
                  취소
                </button>
              )}
            </div>
          </section>
        </>
      )}
    </>,
    document.body,
  );
}
