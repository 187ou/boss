// src/components/interview/AnswerFramework.jsx
import React, { useState, useEffect } from "react";
import {
  Card, Typography, Radio, Space, Button, Divider, Input
} from "antd";
import { EditOutlined, DownloadOutlined, CheckOutlined } from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const AnswerFramework = ({
                           selectedQuestion,
                           targetJob,
                           answerFrameworks,
                           predictedQuestions
                         }) => {
  const [answerFramework, setAnswerFramework] = useState("star");
  const [userAnswer, setUserAnswer] = useState("");
  const [optimizedAnswer, setOptimizedAnswer] = useState("");

  useEffect(() => {
    if (selectedQuestion) {
      // 根据问题类型生成对应框架的示例答案
      const isBasicQuestion = predictedQuestions.basic.includes(selectedQuestion);
      if (isBasicQuestion) {
        setOptimizedAnswer(`您好，我是${targetJob.title}方向的开发者，有${targetJob.coreSkills.length}年相关经验，主要技术栈是${targetJob.coreSkills.join('、')}。曾参与${targetJob.businessDomain}相关项目的开发，负责前端架构设计与性能优化工作，取得了...`);
      } else {
        setOptimizedAnswer(answerFrameworks[answerFramework].example);
      }
      setUserAnswer("");
    }
  }, [selectedQuestion, answerFramework, targetJob, answerFrameworks, predictedQuestions]);

  const optimizeAnswer = () => {
    if (!userAnswer) return;
    // 模拟优化效果：增强逻辑连接词，突出重点
    const optimized = userAnswer
      .replace(/。/g, "。首先，")
      .replace(/我/g, "我主动")
      .replace(/完成/g, "高效完成") + "。总结来说，通过以上措施，成功达成了预期目标，同时积累了宝贵经验。";
    setOptimizedAnswer(optimized);
  };

  if (!selectedQuestion) {
    return (
      <Card className="h-64 flex items-center justify-center">
        <div className="text-center">
          <Text type="secondary" className="text-lg">请从「面试问题预测」标签页选择一个问题</Text>
        </div>
      </Card>
    );
  }

  return (
    <Card className="mb-6">
      <Title level={4} className="text-gray-700 mb-4">
        问题：{selectedQuestion}
      </Title>

      <div className="mb-6">
        <Text strong className="block mb-2">选择答题框架</Text>
        <Radio.Group
          value={answerFramework}
          onChange={(e) => setAnswerFramework(e.target.value)}
          buttonStyle="solid"
        >
          <Radio.Button value="star">STAR法则</Radio.Button>
          <Radio.Button value="pyramid">金字塔原理</Radio.Button>
          <Radio.Button value="problemSolve">问题解决模型</Radio.Button>
        </Radio.Group>

        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <Text type="secondary" className="block mb-1">
            {answerFrameworks[answerFramework].description}
          </Text>
          <Paragraph pre className="mt-2">{answerFrameworks[answerFramework].example}</Paragraph>
        </div>
      </div>

      <div>
        <Text strong className="block mb-2">输入你的答题思路（AI将辅助优化）</Text>
        <Input.TextArea
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          rows={6}
          placeholder="请输入你的答题思路..."
          className="mb-3"
        />
        <Space>
          <Button
            type="primary"
            icon={<EditOutlined/>}
            onClick={optimizeAnswer}
            disabled={!userAnswer}
          >
            AI优化答题内容
          </Button>
          <Button icon={<DownloadOutlined/>}>导出答题要点</Button>
        </Space>

        {optimizedAnswer && (
          <div className="mt-6">
            <Divider orientation="left">AI优化后的版本</Divider>
            <Card className="border-green-200">
              <Paragraph>{optimizedAnswer}</Paragraph>
              <div className="mt-3">
                <Text type="success" className="text-sm">
                  <CheckOutlined/> 优化说明：增强了逻辑连贯性，突出了量化成果，使用更专业的表述
                </Text>
              </div>
            </Card>
          </div>
        )}
      </div>
    </Card>
  );
};

export default AnswerFramework;
