'use client';

import {
  ParcelpostsDocument,
  useCustomerReceiverMutation,
  useParcelpostsQuery,
} from '@/gql/graphql';
import {
  Avatar,
  Button,
  Flex,
  List,
  Modal,
  Space,
  Tabs,
  TabsProps,
  Typography,
} from 'antd';
import { useRouter } from 'nextjs-toploader/app';
import React, { useMemo, useState } from 'react';

export const NitiPage: React.FC = () => {
  const router = useRouter();
  const [api, contextHolder] = Modal.useModal();
  const [activeTab, setActiveTab] = useState<string>('รอรับ');

  const { data, loading } = useParcelpostsQuery({
    variables: {
      status: activeTab,
    },
  });

  const [customerReceiver] = useCustomerReceiverMutation({
    refetchQueries: [
      {
        query: ParcelpostsDocument,
        variables: { status: activeTab },
      },
    ],
  });

  const parcelposts = useMemo(() => data?.parcelposts ?? [], [data]);

  const onChange = (key: string) => {
    setActiveTab(key);
  };

  const handleCustomerReceiver = async (id: string) => {
    await api.confirm({
      title: 'ยืนยันการรับพัสดุ',
      content: 'คุณยืนยันการรับพัสดุหรือไม่?',
      onOk: async () => {
        await customerReceiver({ variables: { code: id } });
      },
    });
  };

  const items: TabsProps['items'] = [
    {
      key: 'รอรับ',
      label: 'รอรับ',
    },
    {
      key: 'รับแล้ว',
      label: 'รับแล้ว',
    },
    {
      key: 'ปัญหา',
      label: 'ปัญหา',
    },
  ];

  return (
    <>
      {contextHolder}
      <Flex gap={16} vertical>
        <Flex justify="space-between" align="center">
          <Typography.Title level={3}>ระบบรับพัสดุ</Typography.Title>
          <Space>
            <Button onClick={() => router.push('/niti/incoming')}>
              รับพัสดุ
            </Button>
            <Button onClick={() => router.push('/niti/delivery')}>
              ลูกบ้านรับพัสดุ
            </Button>
          </Space>
        </Flex>
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          activeKey={activeTab}
        />
        {activeTab === 'รอรับ' && (
          <List
            header={<div>พัสดุทั้งหมด</div>}
            bordered
            dataSource={parcelposts}
            loading={loading}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=0" />
                  }
                  title={<a href="https://ant.design">{item.code}</a>}
                  description={item.parcelCode}
                />
                <Button
                  type="link"
                  onClick={() => handleCustomerReceiver(item.code)}
                >
                  รับพัสดุ
                </Button>
              </List.Item>
            )}
          />
        )}
        {activeTab === 'รับแล้ว' && (
          <List
            header={<div>พัสดุทั้งหมด</div>}
            bordered
            dataSource={parcelposts}
            loading={loading}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=0" />
                  }
                  title={<a href="https://ant.design">{item.code}</a>}
                  description={item.parcelCode}
                />
                <Button
                  type="link"
                  onClick={() => {
                    console.log(item);
                  }}
                >
                  ดูรายละเอียด
                </Button>
              </List.Item>
            )}
          />
        )}
        {activeTab === 'ปัญหา' && (
          <List
            header={<div>พัสดุทั้งหมด</div>}
            bordered
            dataSource={parcelposts}
            loading={loading}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=0" />
                  }
                  title={<a href="https://ant.design">{item.code}</a>}
                  description={item.parcelCode}
                />
                <Button
                  type="link"
                  onClick={() => handleCustomerReceiver(item.code)}
                >
                  รับพัสดุ
                </Button>
              </List.Item>
            )}
          />
        )}
      </Flex>
    </>
  );
};
