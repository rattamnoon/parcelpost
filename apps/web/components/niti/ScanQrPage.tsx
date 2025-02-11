'use client';

import { Html5QrcodePlugin } from '@/components/ui/Html5QrcodePlugin';
// import { HeaderScanQr } from '@/components/layout/HeaderScanQr';
// import { Booth, useCheckInMutation } from '@/gql/generates';
import { Button, Spin, message } from 'antd';
// import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, usePathname, useRouter } from 'next/navigation';
// import { CheckInData, failMsg, successMsg } from './common/CheckIn';
// import { Context } from '@/app/context/counter.context';

const Vector = ({
  rotate,
  top,
  left,
}: {
  rotate?: number | null;
  top: string;
  left: string;
}) => (
  <div
    style={{
      position: 'absolute',
      top,
      left,
      ...(rotate && { transform: `rotate(-${rotate}deg)` }),
      flexShrink: 0,
    }}
  >
    <Image src="/images/Vector.png" alt="logo" width={40} height={40} />
  </div>
);
export const ScanQrPage = () => {
  const router = useRouter();
  const { id } = useParams();
  // const Pathname = usePathname();

  // const [CheckIn, { loading, data, error }] = useCheckInMutation();

  // const OnCheckIn = async (barcode: string) => {
  //   // const { input } = CheckInData(Pathname, barcode);

  //   CheckIn({
  //     variables: {
  //       input,
  //     },
  //   })
  //     .then(res => {
  //       const ticket = res.data?.checkIn;
  //       dispatch({
  //         type: 'CHECKIN',
  //         value: {
  //           checkin: ticket?.checkin,
  //           checkinBooth: ticket?.checkinBooth,
  //           booth: ticket?.booth as Booth,
  //           email: ticket?.email,
  //           firstname: ticket?.firstname,
  //           lastname: ticket?.lastname,
  //           tel: ticket?.tel,
  //           ticket: ticket?.ticket,
  //           type: ticket?.type,
  //         },
  //       });
  //       router.push(`/scanqr/eticketdetail/${id}/${barcode}/success`);
  //     })
  //     .catch(error => {
  //       const ticket = error.graphQLErrors[0].extensions;
  //       const errorMsg = error.message.split(':')[0];
  //       if (successMsg.includes(errorMsg)) {
  //         dispatch({
  //           type: 'CHECKIN',
  //           value: {
  //             checkin: ticket?.checkin,
  //             checkinBooth: ticket?.checkinBooth,
  //             booth: ticket?.booth as Booth,
  //             email: ticket?.email,
  //             firstname: ticket?.firstname,
  //             lastname: ticket?.lastname,
  //             tel: ticket?.tel,
  //             ticket: ticket?.ticket,
  //             type: ticket?.type,
  //           },
  //         });
  //         router.push(`/scanqr/eticketdetail/${id}/${barcode}/fail`, {
  //           scroll: false,
  //         });
  //       } else {
  //         if (failMsg.includes(errorMsg)) {
  //           message.error(errorMsg);
  //         } else {
  //           message.error(errorMsg);
  //         }
  //       }
  //     });
  // };

  // const shouldShowQrScanner = !data && !loading && !error;

  return (
    <div>
      <div>
        {/* {loading && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 'calc(100dvh - 64px)',
              width: '100%',
            }}
          >
            <Spin size="large" />
          </div>
        )} */}

        <div
          style={{
            position: 'relative',
            width: '100dvw',
            display: 'flex',
            height: 'calc(100dvh - 64px)',
            overflow: 'hidden',
          }}
        >
          <Html5QrcodePlugin
            fps={10}
            onScanSuccess={(text, _) => {
              console.log(text);
              // OnCheckIn(text);
            }}
          />

          <Vector top="60%" left="80%" />
          <Vector rotate={90} top="20%" left="80%" />
          <Vector rotate={180} top="20%" left="10%" />
          <Vector rotate={270} top="60%" left="10%" />

          <div
            style={{
              position: 'absolute',
              bottom: 10,
              width: '100%',
              padding: 20,
            }}
          >
            <Link href={`/scanqr/manualscan`}>
              <Button
                type="primary"
                style={{
                  width: '100%',
                  borderRadius: '5px',
                }}
              >
                กรอก E-ticket number
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
