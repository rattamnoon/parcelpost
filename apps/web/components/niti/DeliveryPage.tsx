'use client';

import {
  Parcelpost,
  ParcelpostsDocument,
  useCustomerReceiverMutation,
} from '@/gql/graphql';
import { Scanner } from '@yudiel/react-qr-scanner';
import { Modal } from 'antd';
import { useRouter } from 'nextjs-toploader/app';
import { useState } from 'react';

export const DeliveryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [result, setResult] = useState<Parcelpost>();
  const router = useRouter();

  const [nitiReceiver] = useCustomerReceiverMutation({
    onCompleted: (data) => {
      setResult(data.customerReceiver as Parcelpost);
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
            nitiReceiver({
              variables: {
                code: result[0]!.rawValue,
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
        <p>Locker: {result?.locker?.code}</p>
        <p>รหัสพัสดุ: {result?.parcelCode}</p>
        <p>ชื่อผู้ส่ง: {result?.senderName}</p>
        <p>ชื่อผู้รับ: {result?.receiverName}</p>
        <p>ห้อง: {result?.unitCode}</p>
        <p>สถานะ: {result?.status}</p>
      </Modal>
    </>
  );
};
