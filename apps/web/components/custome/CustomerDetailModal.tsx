import { useParcelpostByCodeQuery } from "@/gql/graphql";
import { Flex, Modal } from "antd";
import React, { useMemo } from "react";

interface CustomerDetailModalProps {
  open: boolean;
  onCancel: () => void;
  code: string;
}

export const CustomerDetailModal: React.FC<CustomerDetailModalProps> = ({
  open,
  onCancel,
  code,
}) => {
  const { data } = useParcelpostByCodeQuery({
    variables: { code },
    skip: !code,
  });

  const parcelpost = useMemo(() => data?.parcelpostByCode, [data]);

  return (
    <Modal
      title="รายละเอียดพัสดุ"
      open={open}
      onCancel={onCancel}
      footer={false}
    >
      <Flex vertical gap={8}>
        <Flex justify="space-between">รหัส: {parcelpost?.code}</Flex>
        <Flex justify="space-between">รหัสพัสดุ: {parcelpost?.parcelCode}</Flex>
        <Flex justify="space-between">ผู้ส่ง: {parcelpost?.senderName}</Flex>
        <Flex justify="space-between">ผู้รับ: {parcelpost?.receiverName}</Flex>
        <Flex justify="space-between">สถานะ: {parcelpost?.status}</Flex>
      </Flex>
    </Modal>
  );
};
