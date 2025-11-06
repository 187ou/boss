// src/components/interview/MockInterview.jsx
import React, { useState } from "react";
import {
  Card, Typography, Button, Divider, Progress, List, Badge, Input
} from "antd";
import {
  PlayCircleOutlined, StopOutlined, AudioOutlined
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const MockInterview = ({ predictedQuestions, evaluationDimensions }) => {
  const [isMockInterviewing, setIsMockInterviewing] = useState(false);
  const [currentMockQuestion, setCurrentMockQuestion] = useState("");
  const [mockRound, setMockRound] = useState(0);
  const [evaluation, setEvaluation] = useState([...evaluationDimensions]);
  const [showEvaluation, setShowEvaluation] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");

  // 开始模拟面试
  const startMockInterview = () => {
    setIsMockInterviewing(true);
    setMockRound(1);
    setShowEvaluation(false);
    // 从专业问题中随机选择第一个问题
    const randomIndex = Math.floor(Math.random() * predictedQuestions.professional.length);
    setCurrentMockQuestion(predictedQuestions.professional[randomIndex]);
  };

  // 结束模拟面试
  const endMockInterview = () => {
    setIsMockInterviewing(false);
    // 生成随机评估分数（实际应基于AI分析）
    const scoredEvaluation = evaluation.map(item => ({
      ...item,
      score: Math.floor(Math.random() * 5) + 5 // 5-10分
    }));
    setEvaluation(scoredEvaluation);
    setShowEvaluation(true);
  };

  // 下一个模拟问题
  const nextMockQuestion = () => {
    if (mockRound >= 5) { // 最多5轮
      endMockInterview();
      return;
    }

    setMockRound(prev => prev + 1);
    // 从所有问题中随机选择
    const allQuestions = [
      ...predictedQuestions.basic,
      ...predictedQuestions.professional,
      ...predictedQuestions.scenario
    ];
    const randomIndex = Math.floor(Math.random() * allQuestions.length);
    setCurrentMockQuestion(allQuestions[randomIndex]);
    setUserAnswer("");
  };

  return (
    <Card>
      {!isMockInterviewing ? (
        <div className="flex flex-col items-center justify-center p-8">
          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-6">
            <PlayCircleOutlined className="text-4xl text-blue-600"/>
          </div>
          <Title level={4} className="text-gray-700 mb-2">开始模拟面试</Title>
          <Paragraph type="secondary" className="text-center mb-6 max-w-lg">
            AI将扮演面试官进行多轮提问，结束后生成专业评估报告，帮助你提升面试表现
          </Paragraph>
          <Button
            type="primary"
            size="large"
            icon={<PlayCircleOutlined/>}
            onClick={startMockInterview}
          >
            开始模拟（5-8分钟）
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <Text strong>模拟面试 第 {mockRound} 轮</Text>
              <Badge status="processing" text="进行中" className="ml-2"/>
            </div>
            <Button
              danger
              icon={<StopOutlined/>}
              onClick={endMockInterview}
            >
              提前结束
            </Button>
          </div>

          <Card title="面试官问题" className="border-blue-200">
            <Paragraph className="text-lg">{currentMockQuestion}</Paragraph>
          </Card>

          <div>
            <Text strong className="block mb-2">你的回答</Text>
            <Input.TextArea
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              rows={6}
              placeholder="请输入你的回答..."
              className="mb-3"
            />
            <div className="flex justify-between">
              <Button icon={<AudioOutlined/>}>语音输入</Button>
              <Button
                type="primary"
                onClick={nextMockQuestion}
                disabled={!userAnswer && mockRound > 1}
              >
                下一个问题
              </Button>
            </div>
          </div>
        </div>
      )}

      {showEvaluation && (
        <div className="mt-8">
          <Divider orientation="left">面试评估报告</Divider>
          <Card title="综合评分" className="mb-4">
            <div className="flex justify-center items-center">
              <Text className="text-5xl font-bold text-blue-600">
                {evaluation.reduce((sum, item) => sum + item.score, 0) / evaluation.length}
              </Text>
              <Text className="ml-2 text-xl text-gray-500">/ 10分</Text>
            </div>
          </Card>

          <Card title="维度评分">
            <List
              dataSource={evaluation}
              renderItem={(item) => (
                <List.Item>
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <Text>{item.name}</Text>
                      <Text>{item.score}/{item.max}</Text>
                    </div>
                    <Progress percent={(item.score / item.max) * 100} size="small"/>
                  </div>
                </List.Item>
              )}
            />

            <Divider className="my-4"/>

            <div>
              <Text strong className="block mb-2">改进建议</Text>
              <List
                dataSource={[
                  "回答时注意控制时间，每个问题建议在1-2分钟内完成",
                  "专业问题回答需结合具体案例，避免只讲理论",
                  "增强语言连贯性，减少口头禅和停顿",
                  "可适当使用肢体语言（实际面试时），增强表达感染力"
                ]}
                renderItem={(item, index) => (
                  <List.Item prefix={<span>{index + 1}.</span>}>
                    {item}
                  </List.Item>
                )}
              />
            </div>
          </Card>
        </div>
      )}
    </Card>
  );
};

export default MockInterview;
