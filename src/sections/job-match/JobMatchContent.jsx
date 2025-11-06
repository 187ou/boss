import React from "react";
import { FileTextOutlined, AimOutlined, BarChartOutlined } from "@ant-design/icons";
import ResumeParser from "@/components/job-match/ResumeParser";
import JobMatcher from "@/components/job-match/JobMatcher";
import JobAnalyzer from "@/components/job-match/JobAnalyzer";
import SectionLayout from "@/components/common/SectionLayout";

// 模拟岗位数据
const jobPositions = [
  {
    id: 1,
    title: "高级前端开发工程师",
    company: "科技有限公司",
    location: "北京市朝阳区",
    salary: "25k-35k·13薪",
    experience: "3-5年",
    matchScore: 92,
    tags: ["React", "TypeScript", "组件库"],
    highlights: ["核心技能完全匹配", "团队技术氛围好"],
    risks: ["工作强度较大"],
    companyInfo: {
      established: "2015年",
      size: "500-1000人",
      ranking: "行业TOP10",
      rating: 4.5,
    },
  },
  {
    id: 2,
    title: "全栈开发工程师",
    company: "互联网科技公司",
    location: "上海市浦东新区",
    salary: "20k-30k·14薪",
    experience: "2-4年",
    matchScore: 85,
    tags: ["React", "Node.js", "MongoDB"],
    highlights: ["技术栈匹配度高", "弹性工作"],
    risks: ["薪资范围低于期望15%"],
    companyInfo: {
      established: "2018年",
      size: "100-500人",
      ranking: "行业TOP30",
      rating: 4.2,
    },
  },
  {
    id: 3,
    title: "前端开发工程师",
    company: "数字科技有限公司",
    location: "广州市天河区",
    salary: "18k-25k·12薪",
    experience: "1-3年",
    matchScore: 78,
    tags: ["Vue", "JavaScript", "Webpack"],
    highlights: ["工作地点优越", "福利待遇好"],
    risks: ["技术栈匹配度一般"],
    companyInfo: {
      established: "2010年",
      size: "1000-5000人",
      ranking: "行业TOP20",
      rating: 4.0,
    },
  },
];

const JobMatchContent = () => {
  const tabs = [
    {
      key: "resume",
      tab: (
        <span>
          <FileTextOutlined className="mr-2" />
          简历信息解析
        </span>
      ),
      content: <ResumeParser />,
    },
    {
      key: "match",
      tab: (
        <span>
          <AimOutlined className="mr-2" />
          岗位精准匹配
        </span>
      ),
      content: <JobMatcher jobPositions={jobPositions} />,
    },
    {
      key: "analysis",
      tab: (
        <span>
          <BarChartOutlined className="mr-2" />
          岗位深度分析
        </span>
      ),
      content: <JobAnalyzer jobPositions={jobPositions} />,
    },
  ];

  return (
    <SectionLayout title="岗位智能匹配系统" tabs={tabs} />
  );
};

export default JobMatchContent;
