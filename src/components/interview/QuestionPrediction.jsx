// src/components/interview/QuestionPrediction.jsx
import React from "react";
import { Card, List, Badge, Typography, Tooltip } from "antd";

const { Title, Text } = Typography;

const QuestionPrediction = ({ onQuestionSelect, predictedQuestions }) => {
  const questionTypes = [
    {
      key: "basic",
      title: "基础问题",
      description: "了解基本情况与求职动机",
      status: "default"
    },
    {
      key: "professional",
      title: "专业技术问题",
      description: "考察核心技能掌握程度",
      status: "processing"
    },
    {
      key: "scenario",
      title: "场景化问题",
      description: "评估解决实际问题的能力",
      status: "success"
    }
  ];

  return (
    <Card className="mb-4">
      <Title level={4} className="text-gray-700 mb-4">高频问题清单</Title>
      <div className="space-y-6">
        {questionTypes.map((type) => (
          <div key={type.key}>
            <div className="flex items-center mb-3">
              <Badge status={type.status} className="mr-2"/>
              <Title level={5} className="text-gray-700 m-0">{type.title}</Title>
              <Text type="secondary" className="ml-2">（{type.description}）</Text>
            </div>
            <List
              dataSource={predictedQuestions[type.key]}
              renderItem={(question, index) => (
                <List.Item
                  className="cursor-pointer hover:bg-gray-50"
                  onClick={() => onQuestionSelect(question)}
                >
                  <List.Item.Meta
                    title={<Text>{index + 1}. {question}</Text>}
                    description={
                      <Tooltip title="点击查看答题框架">
                        <Text type="secondary" className="text-sm">点击查看答题框架</Text>
                      </Tooltip>
                    }
                  />
                </List.Item>
              )}
              bordered
            />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default QuestionPrediction;
