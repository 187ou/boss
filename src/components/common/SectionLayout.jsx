import React from "react";
import { Tabs } from "antd";

// SectionLayout组件用于展示标题和Tab内容
const SectionLayout = ({ title, tabs }) => {
  const tabItems = tabs.map((tab) => ({
    key: tab.key,
    label: tab.tab,
    children: tab.content,
  }));

  return (
    <div className="w-full max-w-6xl mx-auto py-10 px-4 sm:px-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 transition-all duration-300 hover:shadow-2xl">
        {/* 标题 */}
        <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-10 tracking-tight">
          {title}
        </h2>

        {/* Tabs */}
        <Tabs
          defaultActiveKey={tabs[0].key}
          centered
          items={tabItems}
          className="[&_.ant-tabs-nav]:mb-8
                     [&_.ant-tabs-tab]:px-6
                     [&_.ant-tabs-tab-btn]:text-lg
                     [&_.ant-tabs-tab-btn]:font-medium
                     [&_.ant-tabs-tab-active_.ant-tabs-tab-btn]:text-indigo-600
                     [&_.ant-tabs-ink-bar]:bg-indigo-500"
        />
      </div>
    </div>
  );
};

export default SectionLayout;
