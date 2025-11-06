import React, {useState} from "react";
import {Layout} from "antd";
import "@/styles/scroller.scss";
import SiderComponent from "@/sections/layout/SiderComponent";
import NewSessionContent from "@/components/home/NewSessionContent";
import JobMatchContent from "@/sections/job-match/JobMatchContent";
import GreetingContent from "@/sections/greeting/GreetingContent.jsx";
import ResumeOptimizeContent from "@/sections/resume-optimize/ResumeOptimizeContent.jsx";
import InterviewPreparationContent from "@/sections/interview/InterviewPreparationContent.jsx";
import OfferCompareContent from "@/sections/offer-compare/OfferCompareContent.jsx";

const {Sider} = Layout;
const {Content: AntContent} = Layout;

const Web = () => {
  // 状态管理
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("new-session");

  // 历史对话数据
  const historyItems = [
    "使用 React 和 Ant Design 构建界面",
    "创建类似 DeepSeek 的网站",
    "创建 HTML 页面",
    "nvm 安装与配置",
    "根据图表生成 Mermaid 代码",
    "生成数据库",
    "实现 Web 服务端接收内容",
    "JavaScript 异步编程最佳实践",
    "React Hooks 性能优化技巧",
    "CSS Grid 布局完全指南",
    "Node.js 中间件开发教程",
    "MongoDB 索引优化方法",
    "TypeScript 类型定义高级技巧",
    "前端工程化配置方案",
  ];

  // 处理菜单点击
  const handleMenuClick = (e) => {
    setSelectedMenu(e.key);
  };

  // 渲染对应内容
  const renderContent = () => {
    switch (selectedMenu) {
      case "job-match":
        return <JobMatchContent/>;
      case "greeting":
        return <GreetingContent/>;
      case "resume-optimize":
        return <ResumeOptimizeContent/>;
      case "interview":
        return <InterviewPreparationContent/>;
      case "offer-compare":
        return <OfferCompareContent/>;
      default:
        return <NewSessionContent/>;
    }
  };

  return (
    <Layout className="h-screen bg-gray-50 overflow-hidden">
      {/* 侧边栏 */}
      <Sider
        width={240}
        collapsedWidth={80}
        className="bg-white shadow-md transition-all duration-300 ease-in-out h-full"
        collapsible={true}
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        trigger={null}
      >
        <SiderComponent
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          selectedMenu={selectedMenu}
          onMenuClick={handleMenuClick}
          historyItems={historyItems}
        />
      </Sider>

      {/* 主内容区域 */}
      <Layout>
        <AntContent className="flex flex-col items-center justify-between h-full p-6 sm:p-10 bg-white overflow-y-auto">
          <div/>
          {renderContent()}
          <div className="text-xs text-gray-400 mt-10">
            boss招聘助手 © 2025 | 简洁高效的AI辅助工具
          </div>
        </AntContent>
      </Layout>
    </Layout>
  );
};

export default Web;