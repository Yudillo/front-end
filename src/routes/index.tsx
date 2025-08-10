import { createFileRoute } from '@tanstack/react-router';
import '../styles/global-styles.css';
import Index from '@/pages/index/Index';
import { useModal } from '@/hooks/useModal';
import Modal from '@/components/common/modal/Modal';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  const { isOpen, isConfirm, message, handleClose, handleConfirm, handleOpen } =
    useModal();

  const handleClick = () => {
    handleOpen('메세지');
  };

  return (
    <div className='text-center'>
      <header className='min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]'>
        <button type='button' onClick={handleClick}>
          <img
            src={logo}
            className='h-[40vmin] pointer-events-none animate-[spin_20s_linear_infinite]'
            alt='logo'
          />
        </button>
        <p>
          Edit <code>src/routes/index.tsx</code> and save to reload.
        </p>
        <a
          className='text-[#61dafb] hover:underline'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <a
          className='text-[#61dafb] hover:underline'
          href='https://tanstack.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn TanStack
        </a>
      </header>
      <Modal isOpen={isOpen} onClose={handleClose}>
        {message}
      </Modal>
    </div>
  );
  return <Index />;
}
