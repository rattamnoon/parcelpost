'use client';

import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Flex, Grid, Layout, theme, Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

const { Title, Text } = Typography;

export const MainLayout = ({ children }: PropsWithChildren<{}>) => {
  const screens = Grid.useBreakpoint();
  const {
    token: { colorBgContainer, screenMD },
  } = theme.useToken();

  const breakpoint = screens.md;

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0px -1px 0px 0px #F0F0F0 inset',
          background: colorBgContainer,
          padding: breakpoint ? '0 50px' : '0 16px',
          position: 'relative',
          height: 68,
        }}
      >
        <Link href={`/`}>
          <div style={{ position: 'relative', width: 100, height: 68 }}>
            <Image
              src="/images/logo.png"
              alt="logo"
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        </Link>
      </Layout.Header>

      <Layout.Content
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: colorBgContainer,
        }}
      >
        <Flex
          vertical
          style={{ maxWidth: screenMD, width: '100%', padding: '32px 16px' }}
        >
          {children}
        </Flex>
      </Layout.Content>

      <Layout.Footer
        style={{
          background: '#000000',
          padding: breakpoint ? '24px 50px' : '24px 16px',
        }}
      >
        <Flex
          vertical={!breakpoint}
          justify="space-between"
          align={breakpoint ? 'center' : 'flex-start'}
          style={{ paddingBottom: 16, borderBottom: '1px solid #383838' }}
          gap={8}
        >
          <Title level={5} style={{ color: '#FFFFFF', margin: 0 }}>
            ติดต่อสอบถาม
          </Title>

          <Flex vertical={!breakpoint} gap={breakpoint ? 24 : 0}>
            <Link
              href="https://page.line.me/qep5866s?openQrModal=true"
              target="_blank"
            >
              <Flex align="center" gap={4}>
                <Image
                  src={'/images/line.png'}
                  alt="lineIcon"
                  width={24}
                  height={24}
                />
                <Text style={{ color: '#C3C3C3' }}>@origin</Text>
              </Flex>
            </Link>
            <Link href="tel:1498" target="_blank">
              <Flex align="center" gap={4}>
                <PhoneOutlined
                  style={{ width: 24, height: 24, color: '#C3C3C3' }}
                />
                <Text style={{ color: '#C3C3C3' }}>1498</Text>
              </Flex>
            </Link>

            <Link href="mailto:info@origin.co.th" target="_blank">
              <Flex align="center" gap={4}>
                <MailOutlined
                  style={{ width: 24, height: 24, color: '#C3C3C3' }}
                />
                <Text style={{ color: '#C3C3C3' }}>info@origin.co.th</Text>
              </Flex>
            </Link>
          </Flex>
        </Flex>

        <Flex
          vertical={!breakpoint}
          justify="space-between"
          style={{ paddingTop: 16 }}
        >
          <Text
            style={{
              color: '#C3C3C3',
              fontSize: 12,
              order: breakpoint ? 0 : 1,
            }}
          >
            COPYRIGHT © 2025 , ORIGIN PROPERTY PUBLIC CO.,LTD ALL RIGHTS
            RESERVED.
          </Text>
          <Link
            href="https://origin.co.th/privacy-policy/"
            target="_blank"
            style={{ whiteSpace: 'nowrap', order: breakpoint ? 1 : 0 }}
          >
            <Text style={{ color: '#C3C3C3' }}>นโยบายความเป็นส่วนตัว</Text>
          </Link>
        </Flex>
      </Layout.Footer>
    </Layout>
  );
};
