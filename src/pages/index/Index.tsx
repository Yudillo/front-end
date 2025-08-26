import Modal from '@/components/common/modal/Modal';
import { MODAL_MESSAGE } from '@/constants/modalMessage';
import { useModal } from '@/hooks/useModal';
import { signoutUser } from '@/supabase/functions/auth/logout.api';
import { useNavigate } from '@tanstack/react-router';

export default function Index() {
  const { isOpen, isConfirm, message, handleConfirm, handleClose } = useModal();
  const navigate = useNavigate();

  const handleClickSignout = () => {
    handleConfirm(MODAL_MESSAGE.checkSignout);
  };

  const handleCheckSignout = async () => {
    await signoutUser();
    navigate({ to: '/auth/login' });
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
