import React, { useState } from "react";
import { Card, Typography, Badge } from "antd";
import {
  QuestionCircleOutlined,
  SolutionOutlined,
  RobotOutlined,
  BulbOutlined
} from "@ant-design/icons";
import QuestionPrediction from "@/components/interview/QuestionPrediction";
import AnswerFramework from "@/components/interview/AnswerFramework";
import MockInterview from "@/components/interview/MockInterview";
import IndustryKnowledge from "@/components/interview/IndustryKnowledge";
import SectionLayout from "@/components/common/SectionLayout";

const { Title, Text } = Typography;

// 模拟数据：目标岗位
const targetJob = {
  title: "高级前端开发工程师",
  industry: "互联网",
  companySize: "500-1000人",
  coreSkills: ["React", "TypeScript", "前端工程化", "性能优化"],
  businessDomain: "电商平台",
};

// 模拟：预测的面试问题
const predictedQuestions = {
  basic: [
    "请做一个简单的自我介绍",
    "你为什么想加入我们公司？",
    "你期望的薪资范围是多少？",
    "你未来3-5年的职业规划是什么？",
    "你最大的优势和劣势是什么？",
  ],
  professional: [
    "React Hooks与class组件相比有哪些优势？如何解决闭包陷阱？",
    "TypeScript的泛型有什么作用？请举例说明实际应用场景",
    "如何优化大型React应用的性能？请分享你的实际经验",
    "前端工程化包含哪些方面？你如何搭建一个前端项目架构？",
    "如何处理前端项目的兼容性问题？有哪些实用技巧？",
  ],
  scenario: [
    "如果线上突然出现一个紧急bug，你会如何排查和解决？",
    "当你与产品经理对需求理解有分歧时，你会如何处理？",
    "如何推动团队采用新技术或最佳实践？请分享你的经历",
    "如果给你一个性能很差的旧项目，你会从哪些方面进行重构？",
  ],
};

// 答题框架模板
const answerFrameworks = {
  star: {
    name: "STAR法则",
    description: "情境(Situation)→任务(Task)→行动(Action)→结果(Result)",
    example:
      "• 情境：之前负责的电商项目商品详情页加载缓慢，用户投诉率达15%\n• 任务：我负责优化页面性能，目标将加载时间从3s降至1s内\n• 行动：使用代码分割、图片懒加载和缓存策略，重构核心组件\n• 结果：页面加载速度提升65%，用户停留时间增加20%，投诉率降为0",
  },
  pyramid: {
    name: "金字塔原理",
    description: "结论先行→论据支撑→案例补充",
    example:
      "• 结论：我认为前端性能优化应优先关注核心路径加载\n• 论据：核心路径决定首屏时间，影响用户留存率（数据表明首屏>3s流失率超50%）\n• 案例：曾通过优化首屏关键CSS，将某项目首屏时间从2.8s降至1.2s",
  },
  problemSolve: {
    name: "问题解决模型",
    description: "问题定义→原因分析→解决方案→效果评估",
    example:
      "• 问题：团队协作中代码冲突频繁，影响开发效率\n• 原因：分支管理混乱，缺乏规范的合并流程\n• 方案：引入Git Flow工作流，建立Code Review机制\n• 效果：冲突率下降70%，迭代效率提升30% ",
  },
};

// 行业知识速记
const industryKnowledge = {
  coreConcepts: [
    {
      title: "React Fiber架构",
      keyPoints: ["解决长任务阻塞问题", "可中断、可恢复的工作单元", "优先级调度机制", "双缓存渲染"],
    },
    {
      title: "前端性能指标",
      keyPoints: ["FCP <1.8s", "LCP <2.5s", "CLS <0.1", "TTI <3.8s"],
    },
    {
      title: "TypeScript类型系统",
      keyPoints: ["泛型约束", "条件类型", "类型守卫", "模块声明"],
    },
  ],
  latestTrends: [
    "Server Components：服务端与客户端组件协同",
    "边缘计算在前端的应用：降低延迟提升体验",
    "AI辅助开发工具：提升编码效率与质量",
    "跨端技术融合：React Native与Web技术互通",
  ],
};

// 模拟评估维度
const evaluationDimensions = [
  { name: "表达逻辑性", score: 0, max: 10 },
  { name: "内容匹配度", score: 0, max: 10 },
  { name: "语言流畅度", score: 0, max: 10 },
  { name: "专业深度", score: 0, max: 10 },
  { name: "应变能力", score: 0, max: 10 },
];

const InterviewPreparationContent = () => {
  const [activeTab, setActiveTab] = useState("questions");
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionSelect = (question) => {
    setSelectedQuestion(question);
    setActiveTab("answer");
  };

  const tabConfig = [
    {
      key: "questions",
      tab: <span><QuestionCircleOutlined /> 面试问题预测</span>,
      content: <QuestionPrediction
        onQuestionSelect={handleQuestionSelect}
        predictedQuestions={predictedQuestions}
      />,
    },
    {
      key: "answer",
      tab: <span><SolutionOutlined /> 个性化答题框架</span>,
      content: <AnswerFramework
        selectedQuestion={selectedQuestion}
        targetJob={targetJob}
        answerFrameworks={answerFrameworks}
        predictedQuestions={predictedQuestions}
      />,
    },
    {
      key: "mock",
      tab: <span><RobotOutlined /> 模拟面试练习</span>,
      content: <MockInterview
        predictedQuestions={predictedQuestions}
        evaluationDimensions={evaluationDimensions}
      />,
    },
    {
      key: "knowledge",
      tab: <span><BulbOutlined /> 行业知识补充</span>,
      content: <IndustryKnowledge industryKnowledge={industryKnowledge} />,
    },
  ];

  // return (
  //   <div className="w-full max-w-6xl mx-auto py-10 px-4 sm:px-6">
  //     {/* 岗位信息卡片 */}
  //     <Card
  //       variant="filled"
  //       className="mb-10 bg-gray-50 rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-all duration-300"
  //     >
  //       <Title level={4} className="text-gray-700 mb-4">
  //         针对「{targetJob.title}」的定制化准备
  //       </Title>
  //       <div className="flex flex-wrap gap-5 text-gray-700">
  //         <div>
  //           <Text type="secondary">行业：</Text>
  //           <Text strong>{targetJob.industry}</Text>
  //         </div>
  //         <div>
  //           <Text type="secondary">公司规模：</Text>
  //           <Text strong>{targetJob.companySize}</Text>
  //         </div>
  //         <div>
  //           <Text type="secondary">核心技能：</Text>
  //           {targetJob.coreSkills.map((skill, i) => (
  //             <Badge key={i} color="blue" text={skill} className="ml-1" />
  //           ))}
  //         </div>
  //       </div>
  //     </Card>
  //
  //     <SectionLayout title="面试准备助手" tabs={tabConfig} />
  //   </div>
  // );
  return (
    <SectionLayout title="面试准备助手" tabs={tabConfig} />
  );
};

export default InterviewPreparationContent;
