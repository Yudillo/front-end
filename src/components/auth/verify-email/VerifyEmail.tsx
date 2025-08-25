import { useState, type FormEvent } from 'react';
import { authCommon } from '../common/AuthCommon.css';
import AuthInput from '../common/AuthInput';
import ButtonWrapper from '@/components/common/button/ButtonWrapper';
import ButtonBasic from '@/components/common/button/ButtonBasic';
import { verifyEmail } from '@/supabase/functions/auth/updatePassword';
import Modal from '@/components/common/modal/Modal';
import { useModal } from '@/hooks/useModal';
import { MODAL_MESSAGE } from '@/constants/modalMessage';

export default function VerifyEmail() {
  const { isOpen, message, handleOpen, handleClose } = useModal();
  const [email, setEmail] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isSuccess = await verifyEmail({ email });

    if (!isSuccess) {
      return handleOpen(MODAL_MESSAGE.failVerifyEmail);
    }
    handleOpen(MODAL_MESSAGE.successVerifyEmail);
  };

  return (
    <section className={authCommon.authSection}>
      <form className={authCommon.formRow} onSubmit={handleSubmit}>
        <AuthInput
          name='email'
          type='email'
          placeholder='이메일'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          validationMessage={''}
        />
        <ButtonWrapper>
          <ButtonBasic title='이메일 인증' />
        </ButtonWrapper>
      </form>
      <Modal isOpen={isOpen} onClose={handleClose}>
        {message}
      </Modal>
    </section>
  );
}
