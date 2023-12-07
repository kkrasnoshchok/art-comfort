import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';
import { RxCross2 } from 'react-icons/rx';

import { Button } from '@/ui/Button';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal = (props: ModalProps) => {
  const { isOpen, onClose, children } = props;
  const modalVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-80'
          initial='hidden'
          animate='visible'
          exit='hidden'
          variants={modalVariants}
          onClick={onClose}
        >
          <motion.div
            className='w-full max-w-md rounded-md bg-white p-8 shadow-lg'
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              className='absolute right-8 top-8 rounded-full p-2 transition'
              onClick={onClose}
              theme='subtle'
              Icon={<RxCross2 size={24} color='white' />}
            />
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
