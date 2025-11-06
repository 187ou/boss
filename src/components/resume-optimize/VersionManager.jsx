// src/components/resume-optimize/VersionManager.jsx
import React from "react";
import { Card, Typography, List, Button, Badge, Tag, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const VersionManager = ({ versions, currentVersion, switchVersion, deleteVersion }) => {
  return (
    <Card>
      <Title level={4} className="text-gray-700 mb-4">简历版本列表</Title>
      <List
        dataSource={versions}
        renderItem={(version) => (
          <List.Item
            className={currentVersion === version.id ? "bg-blue-50" : ""}
            actions={[
              <Button
                type="link"
                icon={<EditOutlined />}
                onClick={() => switchVersion(version.id)}
              >
                切换到此版本
              </Button>,
              <Popconfirm
                title="确定删除此版本？"
                onConfirm={() => deleteVersion(version.id)}
                okText="是"
                cancelText="否"
              >
                <Button
                  type="link"
                  icon={<DeleteOutlined />}
                  className="text-red-600"
                  disabled={versions.length <= 1}
                >
                  删除
                </Button>
              </Popconfirm>
            ]}
          >
            <List.Item.Meta
              avatar={currentVersion === version.id ? (
                <Badge status="processing" />
              ) : (
                <Badge status="default" />
              )}
              title={
                <div>
                  <Text strong>{version.name}</Text>
                  {currentVersion === version.id && (
                    <Tag color="blue" className="ml-2">当前使用</Tag>
                  )}
                </div>
              }
              description={
                <div className="space-y-1">
                  <Text>修改时间：{version.date}</Text>
                  <Text>修改内容：{version.changes}</Text>
                  <Text>适用岗位：{version.applicable}</Text>
                </div>
              }
            />
          </List.Item>
        )}
        bordered
      />
    </Card>
  );
};

export default VersionManager;
