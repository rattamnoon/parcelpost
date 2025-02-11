'use client';

import { IDetectedBarcode, Scanner } from '@yudiel/react-qr-scanner';
import { Modal } from 'antd';
import { useState } from 'react';

export const IncomingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [result, setResult] = useState<IDetectedBarcode[]>([]);

  return (
    <>
      <div style={{ width: '100%', aspectRatio: '1/1' }}>
        <Scanner
          onScan={(result) => {
            console.log('niti รับพัสดุ');
            setResult(result);
            setIsModalOpen(true);
          }}
        />
      </div>

      <Modal open={isModalOpen} onCancel={() => setIsModalOpen(false)}>
        {result.map((d) => (
          <p key={d.rawValue}>{d.rawValue}</p>
        ))}
      </Modal>
    </>
  );
};
