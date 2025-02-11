import { Flex, Grid, Modal } from "antd";
import { useQRCode } from "next-qrcode";
import React from "react";

interface CustomerModalProps {
  open: boolean;
  onCancel: () => void;
  code: string;
}

export const CustomerModal: React.FC<CustomerModalProps> = ({
  open,
  onCancel,
  code,
}) => {
  const { Canvas } = useQRCode();
  const { xs } = Grid.useBreakpoint();

  return (
    <Modal
      title={code}
      open={open}
      onCancel={onCancel}
      closeIcon={false}
      footer={false}
    >
      <Flex justify="center" align="center" gap={16}>
        <Canvas
          text={code}
          options={{
            errorCorrectionLevel: "M",
            margin: 3,
            scale: 4,
            width: xs ? 200 : 500,
          }}
        />
      </Flex>
    </Modal>
  );
};
