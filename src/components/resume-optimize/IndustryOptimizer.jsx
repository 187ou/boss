// src/components/resume-optimize/IndustryOptimizer.jsx
import React from "react";
import {Card, Typography, Select, List, Tag} from "antd";
import {CheckOutlined, ArrowRightOutlined} from "@ant-design/icons";

const {Title, Text, Paragraph} = Typography;
const {Option} = Select;

// 行业模板数据
const industryTemplates = {
  technology: {
    name: "技术岗模板",
    features: ["突出技术栈熟练度", "项目细节与技术难点", "量化性能优化成果"],
    preview: "【项目经验】\n1. 企业管理系统重构\n• 背景：原有系统性能瓶颈严重，页面加载时间>3s\n• 职责：负责前端架构设计与核心模块开发，主导技术选型\n• 成果：采用React Hooks+TypeScript重构，页面加载速度提升60%，支持300+并发用户"
  },
  product: {
    name: "产品岗模板",
    features: ["强调需求分析能力", "跨团队协作案例", "产品落地数据"],
    preview: "【项目经验】\n1. 电商APP功能迭代\n• 背景：用户留存率低于行业均值20%，需优化核心流程\n• 职责：主导用户调研与需求分析，输出PRD并推动跨团队落地\n• 成果：优化支付流程，用户留存率提升15%，订单转化率提升8%"
  },
  operation: {
    name: "运营岗模板",
    features: ["突出活动策划能力", "用户增长数据", "渠道运营效果"],
    preview: "【项目经验】\n1. 会员拉新活动\n• 背景：平台新用户增速放缓，月均增长<5%\n• 职责：设计裂变活动机制，协调市场/技术团队执行\n• 成果：活动期间新增用户5万+，转化率25%，ROI 1:3.2"
  },
  bio: {
    name: "生物医药岗模板",
    features: ["强调实验技能", "科研项目成果", "专业证书"],
    preview: "【项目经验】\n1. 新型抗体研发项目\n• 背景：针对XX疾病的单克隆抗体开发，处于临床前阶段\n• 职责：负责细胞培养与抗体纯化，优化ELISA检测方法\n• 成果：成功筛选出3株高亲和力抗体，检测灵敏度提升40%，获专利1项"
  }
};

const IndustryOptimizer = ({industry = "technology", setIndustry}) => {
  // 添加安全检查
  const currentTemplate = industryTemplates[industry] || industryTemplates.technology;

  return (
    <>
      <Card className="mb-6">
        <Title level={4} className="text-gray-700 mb-4">选择目标行业</Title>
        <Select
          value={industry}
          onChange={setIndustry}
          style={{width: 300}}
          placeholder="选择行业"
        >
          <Option value="technology">技术岗（互联网/IT）</Option>
          <Option value="product">产品岗（全行业）</Option>
          <Option value="operation">运营岗（互联网/电商）</Option>
          <Option value="bio">生物医药岗</Option>
        </Select>

        <div className="mt-6">
          <Title level={5} className="text-gray-700 mb-3">
            {currentTemplate.name} 特点
          </Title>
          <List
            dataSource={currentTemplate.features}
            renderItem={(item, index) => (
              <List.Item prefix={<CheckOutlined className="text-green-600"/>}>
                {item}
              </List.Item>
            )}
          />
        </div>
      </Card>

      <Card>
        <Title level={4} className="text-gray-700 mb-4">
          {currentTemplate.name} 预览
        </Title>
        <Card className="bg-gray-50">
          <pre className="whitespace-pre-wrap font-sans text-gray-800 m-0 p-4">
            {currentTemplate.preview}
          </pre>
        </Card>

        <div className="mt-6">
          <Title level={5} className="text-gray-700 mb-3">行业专属技能推荐</Title>
          <div className="flex flex-wrap gap-2">
            {industry === "technology" && [
              "TypeScript", "微前端", "性能监控", "跨端开发"
            ].map((skill, i) => (
              <Tag key={i} color="blue" icon={<ArrowRightOutlined/>}>
                建议添加：{skill}
              </Tag>
            ))}
            {industry === "product" && [
              "Axure", "用户画像", "AB测试", "数据分析"
            ].map((skill, i) => (
              <Tag key={i} color="green" icon={<ArrowRightOutlined/>}>
                建议添加：{skill}
              </Tag>
            ))}
            {industry === "operation" && [
              "漏斗分析", "活动策划", "用户分层", "CRM系统"
            ].map((skill, i) => (
              <Tag key={i} color="orange" icon={<ArrowRightOutlined/>}>
                建议添加：{skill}
              </Tag>
            ))}
            {industry === "bio" && [
              "HPLC", "Western Blot", "细胞培养", "实验设计"
            ].map((skill, i) => (
              <Tag key={i} color="purple" icon={<ArrowRightOutlined/>}>
                建议添加：{skill}
              </Tag>
            ))}
          </div>
        </div>
      </Card>
    </>
  );
};

export default IndustryOptimizer;
