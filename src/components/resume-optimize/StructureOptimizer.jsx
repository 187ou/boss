import React from "react";
import { Card, Typography, List, Badge } from "antd";
import { CheckOutlined } from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const StructureOptimizer = ({ suggestions }) => {
  return (
    <>
      <Card className="mb-6">
        <Title level={4} className="text-gray-700 mb-4">项目经验重构（背景-职责-成果）</Title>
        <div className="space-y-6">
          {suggestions.structureOptimization.map((item, index) => (
            <div key={index}>
              <div className="flex items-center mb-2">
                <Text strong>项目 {index + 1} 优化前后对比</Text>
                <Badge status="success" text="推荐结构" className="ml-2" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card title="原始描述" variant="filled" className="border-gray-200">
                  <Paragraph>{item.original}</Paragraph>
                  <Text type="secondary" className="text-sm mt-2 block">
                    问题：缺乏结构化逻辑，未体现工作价值
                  </Text>
                </Card>
                <Card title="优化后描述" variant="filled" className="border-green-200">
                  <Paragraph>{item.optimized}</Paragraph>
                  <Text type="secondary" className="text-sm mt-2 block">
                    优势：逻辑清晰，突出成果量化与个人贡献
                  </Text>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <Title level={4} className="text-gray-700 mb-4">成果量化建议</Title>
        <List
          dataSource={[
            { original: "负责用户增长", optimized: "通过活动运营实现用户月增长20%，新增用户1万+" },
            { original: "优化页面性能", optimized: "重构前端架构，页面加载速度提升65%，首屏时间从3.2s降至1.1s" },
            { original: "参与系统开发", optimized: "主导核心模块开发，代码复用率提升40%，开发效率提高25%" }
          ]}
          renderItem={(item, index) => (
            <List.Item>
              <div className="flex flex-col w-full">
                <div className="flex items-center mb-1">
                  <Text type="secondary" className="w-20">原始：</Text>
                  <Text>{item.original}</Text>
                </div>
                <div className="flex items-center">
                  <Text type="success" className="w-20">优化：</Text>
                  <Text strong>{item.optimized}</Text>
                </div>
              </div>
            </List.Item>
          )}
          variant="filled"
        />
      </Card>
    </>
  );
};

export default StructureOptimizer;
