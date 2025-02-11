'use client';

import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import { ReceiverModal } from './ReceiverModal';

export const DeliveryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [code, setCode] = useState<string>('');

  return (
    <>
      <div style={{ width: '100%', aspectRatio: '1/1' }}>
        <Scanner
          onScan={(result) => {
            setCode(result[0]!.rawValue);
            setIsModalOpen(true);
          }}
        />
      </div>

      <ReceiverModal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        code={code}
      />
    </>
  );
};
