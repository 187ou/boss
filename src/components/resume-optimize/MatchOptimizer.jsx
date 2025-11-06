import React from "react";
import { Card, Typography, List, Button, Badge } from "antd";
import { CheckOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const MatchOptimizer = ({ suggestions, applySuggestion, matchScore }) => {
  return (
    <>
      <Card className="mb-6">
        <Title level={4} className="text-gray-700 mb-4">简历与JD差异分析</Title>
        <List
          dataSource={suggestions.matchDiff}
          renderItem={(item, index) => (
            <List.Item
              actions={[
                !item.applied && (
                  <Button
                    type="link"
                    icon={<CheckOutlined />}
                    onClick={() => applySuggestion(index)}
                    className="text-green-600"
                  >
                    应用此建议
                  </Button>
                )
              ]}
            >
              <List.Item.Meta
                avatar={
                  item.applied ? (
                    <Badge status="success" icon={<CheckOutlined />} />
                  ) : (
                    <Badge status="warning" />
                  )
                }
                title={item.applied ? <Text delete>{item}</Text> : item}
              />
            </List.Item>
          )}
          variant="filled"
        />
      </Card>

      <Card>
        <Title level={4} className="text-gray-700 mb-4">关键词优化建议（提升ATS识别率）</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {suggestions.keywordOptimization.map((item, index) => (
            <Card
              key={index}
              variant="filled"
              className={
                item.status === "missing" ? "border-orange-200" :
                  item.status === "weak" ? "border-blue-200" : "border-green-200"
              }
            >
              <div className="flex justify-between items-start">
                <div>
                  <Text strong className="text-lg">{item.word}</Text>
                  <div className="mt-1">
                    <Text type="secondary">{item.suggest}</Text>
                  </div>
                </div>
                <Badge
                  status={
                    item.status === "missing" ? "warning" :
                      item.status === "weak" ? "processing" : "success"
                  }
                  text={
                    item.status === "missing" ? "缺失" :
                      item.status === "weak" ? "需强化" : "良好"
                  }
                />
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </>
  );
};

export default MatchOptimizer
