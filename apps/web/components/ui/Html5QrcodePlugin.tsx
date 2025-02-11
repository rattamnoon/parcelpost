import { Html5Qrcode, Html5QrcodeCameraScanConfig, Html5QrcodeScanType } from 'html5-qrcode';
import { QrcodeSuccessCallback } from 'html5-qrcode/esm/core';
import { useEffect, useRef, useState } from 'react';

const qrcodeId = 'html5qr-code';

interface Html5QrcodePluginProps {
  fps?: number;
  onScanSuccess: QrcodeSuccessCallback;
}

export const Html5QrcodePlugin = ({ fps = 10, onScanSuccess }: Html5QrcodePluginProps) => {
  const [isInit, setIsInit] = useState(false);
  let html5QrCode = useRef<Html5Qrcode | undefined>();

  useEffect(() => {
    if (!html5QrCode.current?.getState() && !isInit) {
      setIsInit(true);

      const width = window.innerWidth;
      const height = window.innerHeight;
      const aspectRatio = width / height;
      const reverseAspectRatio = height / width;

      const mobileAspectRatio =
        reverseAspectRatio > 1.5
          ? reverseAspectRatio + (reverseAspectRatio * 12) / 100
          : reverseAspectRatio;

      html5QrCode.current = new Html5Qrcode(qrcodeId);
      const config: Html5QrcodeCameraScanConfig = {
        fps,
        // aspectRatio: 1.67,
        videoConstraints: {
          facingMode: 'environment',
          aspectRatio: width < 600 ? mobileAspectRatio : aspectRatio,
        },
      };

      html5QrCode.current.start(
        {
          facingMode: 'environment',
        },
        config,
        onScanSuccess,
        error => {},
      );
    }

    const cleanUp = () => {
      if (html5QrCode.current?.isScanning) {
        html5QrCode.current.stop();
      }
    };

    return cleanUp;
  }, [fps, isInit, onScanSuccess]);

  return <div id={qrcodeId} />;
};
