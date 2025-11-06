// src/sections/offer-compare/components/NegotiationAssistant.jsx
import React from "react";
import {
  Card, Select, Button, Divider, Form
} from "antd";
import {
  EditOutlined, CopyOutlined, ArrowRightOutlined
} from "@ant-design/icons";
import { Typography } from "antd";

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;
const { Item } = Form;

const NegotiationAssistant = ({
                                offers,
                                negotiationTarget,
                                setNegotiationTarget,
                                negotiationScript,
                                industrySalaryDB,
                                onGenerateScript
                              }) => {
  return offers.length >= 2 ? (
    <Card>
      <Title level={4} style={{ marginBottom: 20 }}>薪资谈判准备</Title>

      <Item label="选择谈判目标公司" required>
        <Select
          value={negotiationTarget}
          onChange={setNegotiationTarget}
          placeholder="请选择要谈判的公司"
          style={{ width: 300 }}
        >
          {offers.map(offer => (
            <Option key={offer.id} value={offer.id}>
              {offer.company}（当前薪资：{offer.baseSalary}k/月）
            </Option>
          ))}
        </Select>
      </Item>

      <div className="mt-6">
        <Title level={5}>行业薪资参考</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          {offers.map(offer => (
            <Card key={offer.id} title={offer.position}>
              <div className="space-y-2">
                <div>
                  <Text type="secondary">3年经验：</Text>
                  <Text strong>{industrySalaryDB[offer.position]?.[3] || "未知"}k/月</Text>
                </div>
                <div>
                  <Text type="secondary">5年经验：</Text>
                  <Text strong>{industrySalaryDB[offer.position]?.[5] || "未知"}k/月</Text>
                </div>
                <div>
                  <Text type="secondary">10年经验：</Text>
                  <Text strong>{industrySalaryDB[offer.position]?.[10] || "未知"}k/月</Text>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Divider className="my-6" />

      <div>
        <Title level={5}>谈判话术生成</Title>
        <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={onGenerateScript}
          className="mt-2 mb-4"
        >
          生成针对性谈判话术
        </Button>

        {negotiationScript && (
          <Card bordered={false} className="mt-4" style={{ border: '1px solid #1890ff' }}>
            <Title level={5} style={{ margin: 0, color: '#1890ff' }}>
              针对 {offers.find(o => o.id === negotiationTarget)?.company} 的谈判话术
            </Title>
            <Paragraph className="mt-3">{negotiationScript}</Paragraph>
            <div className="flex justify-between mt-4">
              <Text type="success" className="text-sm">
                话术亮点：兼顾诚意与数据支撑，避免强硬态度，提高谈判成功率
              </Text>
              <Button icon={<CopyOutlined />}>复制话术</Button>
            </div>
          </Card>
        )}
      </div>
    </Card>
  ) : (
    <Card className="h-96 flex items-center justify-center">
      <div className="text-center">
        <Text type="secondary">请先添加至少两个Offer</Text>
        <Button
          type="primary"
          icon={<ArrowRightOutlined />}
          className="mt-4"
          onClick={() => document.querySelector('[data-tab-key="input"]').click()}
        >
          前往添加
        </Button>
      </div>
    </Card>
  );
};

export default NegotiationAssistant;
