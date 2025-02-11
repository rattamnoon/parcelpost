import { useParcelpostByCodeQuery } from "@/gql/graphql";
import { Flex, Grid, Modal } from "antd";
import { useQRCode } from "next-qrcode";
import React, { useEffect, useMemo } from "react";

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

  const { data } = useParcelpostByCodeQuery({
    variables: { code: code },
    skip: !code,
    pollInterval: 1000,
  });

  const parcelpost = useMemo(() => data?.parcelpostByCode, [data]);

  useEffect(() => {
    const isChchekd = open === true && parcelpost?.status === "รับแล้ว";
    if (isChchekd) return onCancel();
  }, [onCancel, open, parcelpost]);

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
