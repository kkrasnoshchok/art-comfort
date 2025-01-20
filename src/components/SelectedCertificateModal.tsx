import { CertificateType } from '@/types/about';
import { Button } from '@/ui/Button';
import { Modal } from '@/ui/Modal';
import Image from 'next/image';
import { useCallback, useMemo, useState } from 'react';

type Props = {
  onClose: () => void;
  certificate: CertificateType | null;
};

export const SelectedCertificateModal = (props: Props) => {
  const { certificate, onClose } = props;
  const [currPage, setCurrPage] = useState<number>(0);
  const isMultiPage = useMemo(
    () => Array.isArray(certificate?.source),
    [certificate]
  );

  const handleClose = useCallback(() => {
    setCurrPage(0);
    onClose();
  }, []);

  const renderSinglePageCertificate = useCallback(() => {
    if (!certificate || Array.isArray(certificate.source)) {
      return null;
    }
    return <Image src={certificate.source} alt={certificate.title} />;
  }, [certificate]);

  const renderMultiPageCertificate = useCallback(() => {
    if (!certificate || !Array.isArray(certificate.source)) {
      return null;
    }
    return (
      <div className='relative'>
        <Image src={certificate.source[currPage]} alt={certificate.title} />
        {/* page count */}
        <div className='absolute bottom-12 left-1/2 -translate-x-1/2 rounded-md border border-black bg-white'>
          <p className=' px-2 py-[1px] text-sm'>
            {currPage + 1} / {certificate.source.length}
          </p>
        </div>
        {/* controls */}
        <div className='mt-2 flex flex-row justify-between gap-4'>
          <Button
            size='small'
            label='Previous Page'
            onClick={() => {
              setCurrPage((prev) => prev - 1);
            }}
            disabled={currPage === 0}
          />
          <Button
            size='small'
            label='Next Page'
            onClick={() => {
              setCurrPage((prev) => prev + 1);
            }}
            disabled={currPage === certificate.source.length - 1}
          />
        </div>
      </div>
    );
  }, [certificate, currPage]);

  const renderModalContent = useCallback(() => {
    if (!certificate?.title) {
      return null;
    }
    return (
      <div className='flex flex-1 items-center justify-center rounded-2xl'>
        {isMultiPage && renderMultiPageCertificate()}
        {!isMultiPage && renderSinglePageCertificate()}
      </div>
    );
  }, [certificate, renderMultiPageCertificate]);

  return (
    <Modal isOpen={!!certificate?.title} onClose={handleClose}>
      {renderModalContent()}
    </Modal>
  );
};
