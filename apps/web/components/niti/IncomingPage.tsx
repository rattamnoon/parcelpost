'use client';

import {
  Parcelpost,
  ParcelpostsDocument,
  useCreateParcelpostMutation,
} from '@/gql/graphql';
import { Scanner } from '@yudiel/react-qr-scanner';
import { Modal } from 'antd';
import { useRouter } from 'nextjs-toploader/app';
import { useState } from 'react';

export const IncomingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [result, setResult] = useState<Parcelpost>();
  const router = useRouter();

  const [createParcelpost] = useCreateParcelpostMutation({
    onCompleted: (data) => {
      setResult(data.createParcelpost as Parcelpost);
      setIsModalOpen(true);
    },
    refetchQueries: [
      {
        query: ParcelpostsDocument,
        variables: { status: 'รอรับ' },
      },
    ],
  });

  return (
    <>
      <div style={{ width: '100%', aspectRatio: '1/1' }}>
        <Scanner
          onScan={(result) => {
            createParcelpost({
              variables: {
                createParcelpostInput: {
                  parcelCode: result[0]!.rawValue,
                  senderName: 'โอ๊ต โอริโอ้',
                  receiverName: 'อั๋น นักรัก',
                  unitCode: '2001',
                  status: 'รอรับ',
                },
              },
            });
          }}
        />
      </div>

      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => {
          setIsModalOpen(false);
          setResult(undefined);
          router.back();
        }}
      >
        <p>รหัสพัสดุ: {result?.parcelCode}</p>
        <p>ชื่อผู้ส่ง: {result?.senderName}</p>
        <p>ชื่อผู้รับ: {result?.receiverName}</p>
        <p>ห้อง: {result?.unitCode}</p>
        <p>สถานะ: {result?.status}</p>
      </Modal>
    </>
  );
};
