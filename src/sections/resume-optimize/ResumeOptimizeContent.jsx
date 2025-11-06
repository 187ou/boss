import React, { useState, useEffect } from "react";
import { Button, Progress, Space } from "antd";
import {
  SaveOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import SectionLayout from "@/components/common/SectionLayout";
import MatchOptimizer from "@/components/resume-optimize/MatchOptimizer";
import StructureOptimizer from "@/components/resume-optimize/StructureOptimizer";
import IndustryOptimizer from "@/components/resume-optimize/IndustryOptimizer";
import VersionManager from "@/components/resume-optimize/VersionManager";

// 模拟数据
const originalResume = {
  name: "王小明",
  position: "前端开发工程师",
  experience: "3年",
  skills: ["React", "JavaScript", "CSS", "HTML"],
  projects: [
    {
      name: "企业管理系统",
      description: "负责前端页面开发，参与需求讨论，修复bug",
    },
    {
      name: "移动端H5活动页",
      description: "开发多个营销活动页面，适配不同设备",
    },
  ],
  education: "某大学 计算机科学与技术 本科",
};

const targetJD = {
  title: "高级前端开发工程师",
  company: "互联网科技公司",
  requirements: [
    "3年以上React开发经验，熟练掌握TypeScript",
    "熟悉前端工程化（Webpack/Vite）及性能优化",
    "具备数据分析工具使用经验（如Excel/SQL）",
    "有大型项目架构设计经验者优先",
    "良好的沟通能力和问题解决能力",
  ],
  keywords: ["React", "TypeScript", "工程化", "性能优化", "SQL", "架构设计"],
};

const initialOptimizationSuggestions = {
  matchDiff: [
    "缺少JD要求的'TypeScript'技能描述，建议补充相关项目经验",
    "未提及'前端工程化'相关经验（如Webpack/Vite配置），需添加",
    "缺少'数据分析工具（Excel/SQL）'使用经验，建议补充相关场景",
    "项目描述未体现'大型项目架构设计'能力，需强化",
  ],
  keywordOptimization: [
    { word: "TypeScript", status: "missing", suggest: "添加到技能栏并关联项目" },
    { word: "工程化", status: "missing", suggest: "在项目经验中描述Webpack配置经验" },
    { word: "性能优化", status: "weak", suggest: "量化优化成果（如加载速度提升X%）" },
    { word: "React", status: "good", suggest: "保持现状" },
  ],
  structureOptimization: [
    {
      original: "负责前端页面开发，参与需求讨论，修复bug",
      optimized:
        "• 背景：系统存在兼容性问题，用户投诉率达15%\n• 职责：主导前端页面重构，制定跨浏览器兼容方案\n• 成果：修复80%兼容问题，用户投诉率下降至3%",
    },
    {
      original: "开发多个营销活动页面，适配不同设备",
      optimized:
        "• 背景：需要支持多终端营销活动，原有方案适配成本高\n• 职责：设计响应式组件库，开发5个核心活动页面\n• 成果：适配效率提升60%，活动页面加载速度提升40%",
    },
  ],
};

const ResumeOptimizeContent = () => {
  const [matchScore, setMatchScore] = useState(65);

  // 模拟匹配度提升
  useEffect(() => {
    const appliedSuggestions = initialOptimizationSuggestions.matchDiff.filter((s) => s.applied).length;
    setMatchScore(Math.min(65 + appliedSuggestions * 4, 100));
  }, []);

  // 保存版本
  const saveVersion = () => {
    // 版本保存逻辑
  };

  const tabItems = [
    {
      key: "match",
      tab: (
        <span>
          <SaveOutlined className="mr-2" />
          匹配度优化
        </span>
      ),
      content: (
        <div className="animate-fade-in">
          <MatchOptimizer
            suggestions={initialOptimizationSuggestions}
            matchScore={matchScore}
          />
        </div>
      ),
    },
    {
      key: "structure",
      tab: (
        <span>
          <SaveOutlined className="mr-2" />
          内容结构化优化
        </span>
      ),
      content: (
        <div className="animate-fade-in">
          <StructureOptimizer suggestions={initialOptimizationSuggestions} />
        </div>
      ),
    },
    {
      key: "industry",
      tab: (
        <span>
          <SaveOutlined className="mr-2" />
          行业定制化优化
        </span>
      ),
      content: (
        <div className="animate-fade-in">
          <IndustryOptimizer />
        </div>
      ),
    },
    {
      key: "version",
      tab: (
        <span>
          <SaveOutlined className="mr-2" />
          版本管理
        </span>
      ),
      content: (
        <div className="animate-fade-in">
          <VersionManager />
        </div>
      ),
    },
  ];

  // return (
  //   <div className="w-full max-w-6xl mx-auto py-10 px-4 sm:px-6">
  //     <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 transition-all duration-300 hover:shadow-2xl">
  //       {/* 标题 */}
  //       <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-10 tracking-tight">
  //         简历优化助手
  //       </h2>
  //
  //       {/* 匹配度总览 */}
  //       <div className="mb-10 bg-gray-50 rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-all duration-300">
  //         <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
  //           <div>
  //             <span className="text-lg">与「{targetJD.title}」的匹配度</span>
  //             <div className="mt-3">
  //               <Progress
  //                 percent={matchScore}
  //                 size="medium"
  //                 status={matchScore > 80 ? "success" : "active"}
  //               />
  //             </div>
  //           </div>
  //
  //           <div className="mt-2 md:mt-0">
  //             <Space>
  //               <Button type="primary" icon={<SaveOutlined />} onClick={saveVersion}>
  //                 保存当前版本
  //               </Button>
  //               <Button icon={<DownloadOutlined />}>下载简历</Button>
  //             </Space>
  //           </div>
  //         </div>
  //       </div>
  //
  //       <SectionLayout title="简历优化" tabs={tabItems} />
  //     </div>
  //   </div>
  // );
  return (
    <SectionLayout title="简历优化" tabs={tabItems} />
  )
};

export default ResumeOptimizeContent;
