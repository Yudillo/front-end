import Modal from '@/components/common/modal/Modal';
import { MODAL_MESSAGE } from '@/constants/modalMessage';
import { useModal } from '@/hooks/useModal';
import { signoutUser } from '@/supabase/functions/auth/logout.api';
import { useNavigate } from '@tanstack/react-router';

export default function Index() {
  const { isOpen, isConfirm, message, handleOpen, handleConfirm, handleClose } =
    useModal();
  const navigate = useNavigate();

  const handleClickSignout = () => {
    handleConfirm(MODAL_MESSAGE.checkSignout);
  };

  const handleCheckSignout = async () => {
    handleClose();
    const { isSuccess, message } = await signoutUser();
    handleOpen(message);
    if (!isSuccess) return;
    setTimeout(() => {
      navigate({ to: '/auth/login' });
    }, 1000);
  };

  return (
    <div>
      <div>
        <button type='button' onClick={handleClickSignout}>
          로그아웃
        </button>
      </div>
      <Modal
        isOpen={isOpen}
        isConfirm={isConfirm}
        onCheck={handleCheckSignout}
        onClose={handleClose}
      >
        {message}
      </Modal>
    </div>
  );
}
