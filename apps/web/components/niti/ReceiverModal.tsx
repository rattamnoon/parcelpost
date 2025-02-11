import {
  ParcelpostsDocument,
  useCustomerReceiverMutation,
  useErrorReceiverMutation,
} from '@/gql/graphql';

import { Button, Flex, message, Modal, Typography } from 'antd';

type ReceiverModalProps = {
  open: boolean;
  onCancel: () => void;
  code: string;
};

export const ReceiverModal = ({ open, onCancel, code }: ReceiverModalProps) => {
  const [nitiReceiver] = useCustomerReceiverMutation({
    refetchQueries: [
      {
        query: ParcelpostsDocument,
        variables: { status: 'รอรับ' },
      },
    ],
    onCompleted: () => {
      message.success('บันทึกข้อมูลเรียบร้อย');
      onCancel();
    },
    onError: () => {
      message.error('เกิดข้อผิดพลาด');
    },
  });

  const [errorReceiver] = useErrorReceiverMutation({
    refetchQueries: [
      {
        query: ParcelpostsDocument,
        variables: { status: 'ปัญหา' },
      },
    ],
    onCompleted: () => {
      message.success('บันทึกข้อมูลเรียบร้อย');
      onCancel();
    },
    onError: () => {
      message.error('เกิดข้อผิดพลาด');
    },
  });

  return (
    <Modal open={open} onCancel={onCancel} footer={null} closeIcon>
      <Flex vertical gap={16}>
        <Flex gap={8} vertical align="center">
          <Typography.Title level={5}>
            คุณได้รับพัสดุเรียบร้อยแล้ว กรุณายืนยัน
          </Typography.Title>
          <Button
            key="submit"
            type="primary"
            onClick={() => {
              nitiReceiver({
                variables: { code },
              });
            }}
            block
            size="small"
          >
            ยืนยัน
          </Button>
        </Flex>
        <Flex>
          <Button
            key="submit"
            type="primary"
            danger
            onClick={() => {
              errorReceiver({
                variables: { code },
              });
            }}
            block
            size="small"
          >
            ฉันไม่ได้รับพัสดุ
          </Button>
        </Flex>
      </Flex>
    </Modal>
  );
};
