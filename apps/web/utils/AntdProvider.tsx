'use client';

import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { App, ConfigProvider } from 'antd';
import { ThemeConfig } from 'antd/es/config-provider';
import { Noto_Sans_Thai } from 'next/font/google';
import { useServerInsertedHTML } from 'next/navigation';
import { useState } from 'react';

const font = Noto_Sans_Thai({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['thai'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const themeConfig: ThemeConfig = {
  token: {
    colorPrimary: '#FF6D00',
    colorLink: '#FF6D00',
    colorText: '#000000D9',
    fontFamily: font.style.fontFamily,
    fontWeightStrong: 500,
    fontSize: 16,
    controlHeight: 48,
  },
  components: {
    Typography: {
      titleMarginBottom: 0,
      titleMarginTop: 0,
    },
    Timeline: {
      dotBg: 'transparent',
      tailColor: '#F26522',
    },
    Form: {
      itemMarginBottom: 16,
      verticalLabelPadding: 0,
    },
    Input: {
      colorBgContainer: '#F5F5F5',
      activeBg: '#F5F5F5',
      colorBorder: '#F5F5F5',
      borderRadius: 8,
    },
    InputNumber: {
      colorBgContainer: '#F5F5F5',
      activeBg: '#F5F5F5',
      colorBorder: '#F5F5F5',
      borderRadius: 8,
    },
    Select: {
      colorBgContainer: '#F5F5F5',
      colorBorder: '#F5F5F5',
      borderRadius: 8,
    },
    Button: {
      ghostBg: '#FFF8F3',
      defaultGhostBorderColor: '#FF6D00',
      defaultGhostColor: '#FF6D00',
    },
    Radio: {
      dotSize: 12,
      radioSize: 24,
    },
  },
};

const AntdProvider = ({ children }: { children: React.ReactNode }) => {
  const [cache] = useState(() => createCache());

  useServerInsertedHTML(() => {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `</script>${extractStyle(cache)}<script>`,
        }}
      />
    );
  });

  return (
    <AntdRegistry>
      <StyleProvider cache={cache}>
        <ConfigProvider theme={themeConfig}>
          <App>{children}</App>
        </ConfigProvider>
      </StyleProvider>
    </AntdRegistry>
  );
};

export default AntdProvider;
