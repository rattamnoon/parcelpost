"use client";

import { useParcelpostsQuery } from "@/gql/graphql";
import { Avatar, Button, Flex, List, Tabs, TabsProps } from "antd";
import React, { useMemo, useState } from "react";

export const CustomerPage: React.FC = () => {
  const { data } = useParcelpostsQuery();
  const [activeTab, setActiveTab] = useState<string>("ยังไม่รับ");

  const parcelposts = useMemo(() => data?.parcelposts ?? [], [data]);

  const onChange = (key: string) => {
    setActiveTab(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "ยังไม่รับ",
      label: "ยังไม่รับ",
    },
    {
      key: "รับแล้ว",
      label: "รับแล้ว",
    },
  ];

  return (
    <Flex gap={16} vertical>
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        activeKey={activeTab}
      />
      {activeTab === "ยังไม่รับ" && (
        <List
          header={<div>พัสดุทั้งหมด</div>}
          bordered
          dataSource={parcelposts}
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
  );
};
