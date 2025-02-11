"use client";

import { useParcelpostsQuery } from "@/gql/graphql";
import { Avatar, Button, Flex, List, Tabs, TabsProps, Typography } from "antd";
import React, { useMemo, useState } from "react";
import { CustomerDetailModal } from "./CustomerDetailModal";
import { CustomerModal } from "./CustomerModal";

const { Link } = Typography;

export const CustomerPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("รอรับ");
  const [code, setCode] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [detailOpen, setDetailOpen] = useState<boolean>(false);
  const [detailCode, setDetailCode] = useState<string>("");

  const { data, loading } = useParcelpostsQuery({
    variables: {
      status: activeTab,
      unitCode: "2001",
    },
    pollInterval: 1000,
  });

  const parcelposts = useMemo(() => data?.parcelposts ?? [], [data]);

  const onChange = (key: string) => {
    setActiveTab(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "รอรับ",
      label: "รอรับ",
    },
    {
      key: "รับแล้ว",
      label: "รับแล้ว",
    },
  ];

  return (
    <>
      <Flex gap={16} vertical>
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          activeKey={activeTab}
        />
        {activeTab === "รอรับ" && (
          <List
            dataSource={parcelposts}
            loading={loading}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                    />
                  }
                  title={<Link href="#">{item.code}</Link>}
                  description={`รหัสพัสดุ: ${item.parcelCode}`}
                />
                <Button
                  type="link"
                  onClick={() => {
                    setCode(item.code);
                    setOpen(true);
                  }}
                >
                  รับพัสดุ
                </Button>
              </List.Item>
            )}
          />
        )}
        {activeTab === "รับแล้ว" && (
          <List
            dataSource={parcelposts}
            loading={loading}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                    />
                  }
                  title={<Link href="#">{item.code}</Link>}
                  description={`รหัสพัสดุ: ${item.parcelCode}`}
                />
                <Button
                  type="link"
                  onClick={() => {
                    setDetailOpen(true);
                    setDetailCode(item.code);
                  }}
                >
                  ดูรายละเอียด
                </Button>
              </List.Item>
            )}
          />
        )}
      </Flex>
      <CustomerModal open={open} onCancel={() => setOpen(false)} code={code} />
      <CustomerDetailModal
        open={detailOpen}
        onCancel={() => setDetailOpen(false)}
        code={detailCode}
      />
    </>
  );
};
