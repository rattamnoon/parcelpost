import { Scanner } from '@yudiel/react-qr-scanner';

export const QcScanner = () => {
  return <Scanner onScan={(result) => console.log(result)} />;
};
