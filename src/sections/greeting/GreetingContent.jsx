import React, { useState } from "react";
import { EditOutlined, HighlightOutlined, MessageOutlined } from "@ant-design/icons";
import GreetingCustomizer from "@/components/greeting/GreetingCustomizer";
import GreetingOptimizer from "@/components/greeting/GreetingOptimizer";
import FollowUpGenerator from "@/components/greeting/FollowUpGenerator";
import SectionLayout from "@/components/common/SectionLayout";

// 模拟数据（保持不变）
const mockTalentData = {
  name: "张开发",
  coreSkill: "3年Python开发经验，熟练掌握Django/Flask框架，精通MySQL数据库优化",
  experience: "3年",
  matchPoint: "岗位要求的Python后端技能完全匹配，有2个电商项目经验与岗位业务契合",
};

const mockJobData = {
  company: "科技有限公司",
  position: "Python后端开发工程师",
  hr: "李HR",
};

const GreetingContent = () => {
  const [activeTab, setActiveTab] = useState("custom");

  const tabs = [
    {
      key: "custom",
      tab: (
        <span>
          <EditOutlined className="mr-2" />
          个性化话术定制
        </span>
      ),
      content: <GreetingCustomizer />,
    },
    {
      key: "optimize",
      tab: (
        <span>
          <HighlightOutlined className="mr-2" />
          话术优化迭代
        </span>
      ),
      content: <GreetingOptimizer />,
    },
    {
      key: "follow",
      tab: (
        <span>
          <MessageOutlined className="mr-2" />
          跟进话术生成
        </span>
      ),
      content: <FollowUpGenerator />,
    },
  ];

  return (
    <SectionLayout title="打招呼话术智能生成" tabs={tabs}>
      {/* 在这里可以添加岗位信息概览等额外内容 */}
      <div className="mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h4 className="text-gray-800 mb-2">
              针对岗位：{mockJobData.position}
            </h4>
            <div className="flex flex-wrap gap-4 text-gray-600">
              <div>
                <span>目标公司：</span>
                <strong>{mockJobData.company}</strong>
              </div>
              <div>
                <span>对接HR：</span>
                <strong>{mockJobData.hr}</strong>
              </div>
              <div>
                <span>核心匹配点：</span>
                <span className="text-blue-500">{mockTalentData.matchPoint.substring(0, 20)}...</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <span className="block text-sm mb-1">候选人</span>
            <strong className="text-lg text-gray-800">{mockTalentData.name}</strong>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default GreetingContent;
