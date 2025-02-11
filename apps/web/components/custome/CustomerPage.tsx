"use client";

import { useParcelpostsQuery } from "@/gql/graphql";
import { Avatar, Button, Flex, List, Tabs, TabsProps } from "antd";
import React, { useMemo, useState } from "react";
import { CustomerModal } from "./CustomerModal";

export const CustomerPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("รอรับ");
  const [code, setCode] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

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
      </Flex>
      <CustomerModal open={open} onCancel={() => setOpen(false)} code={code} />
    </>
  );
};
