import React from "react";
import { Card, List, Typography, Tag } from "antd";
import { CheckOutlined } from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const IndustryKnowledge = ({ industryKnowledge }) => {
  return (
    <>
      <Card className="mb-6">
        <Title level={4} className="text-gray-700 mb-4">核心知识点速记</Title>
        <div className="space-y-6">
          {industryKnowledge.coreConcepts.map((concept, index) => (
            <Card key={index} title={concept.title} className="border-gray-200">
              <List
                dataSource={concept.keyPoints}
                renderItem={(point, i) => (
                  <List.Item prefix={<CheckOutlined className="text-green-600"/>}>
                    {point}
                  </List.Item>
                )}
              />
            </Card>
          ))}
        </div>
      </Card>

      <Card>
        <Title level={4} className="text-gray-700 mb-4">行业最新趋势</Title>
        <List
          dataSource={industryKnowledge.latestTrends}
          renderItem={(trend, index) => (
            <List.Item
              key={index}
              className="hover:bg-gray-50 transition-colors"
            >
              <List.Item.Meta
                avatar={<Tag color="purple">趋势 {index + 1}</Tag>}
                title={trend}
                description={
                  <Text type="secondary" className="text-sm">
                    面试高频考点，建议结合自身经验准备
                  </Text>
                }
              />
            </List.Item>
          )}
          variant="filled"
        />

        <div className="mt-6">
          <Title level={5} className="text-gray-700 mb-3">专业术语解释</Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {term: "CSR", explanation: "客户端渲染：浏览器下载HTML后通过JS动态生成页面内容"},
              {term: "SSR", explanation: "服务端渲染：服务端生成完整HTML发送到客户端，有利于SEO和首屏速度"},
              {term: "Code Splitting", explanation: "代码分割：将代码拆分为多个包，按需加载，减少初始加载体积"},
              {term: "Tree Shaking", explanation: "树摇：移除未使用的代码，减小bundle体积，依赖ES6模块特性"}
            ].map((item, index) => (
              <Card key={index} variant="filled" className="border-gray-200">
                <Text strong>{item.term}</Text>
                <Paragraph className="mt-1 text-sm">{item.explanation}</Paragraph>
              </Card>
            ))}
          </div>
        </div>
      </Card>
    </>
  );
};

export default IndustryKnowledge;
