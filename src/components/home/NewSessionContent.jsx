import React from "react";
import { Input, Button, Typography, Card } from "antd";
import {
  CodeOutlined,
  EditOutlined,
  PictureOutlined,
  VideoCameraOutlined,
  FilePptOutlined,
  FileTextOutlined,
  UserOutlined,
  AppstoreOutlined,
  PaperClipOutlined,
  ArrowUpOutlined,
  GlobalOutlined,
  BulbOutlined,
  AudioOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const NewSessionContent = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return "早上好";
    } else if (hour >= 12 && hour < 14) {
      return "中午好";
    } else if (hour >= 14 && hour < 18) {
      return "下午好";
    } else if (hour >= 18 && hour < 22) {
      return "晚上好";
    } else {
      return "夜深了";
    }
  };

  const suggestionCards = [
    { title: "编程助手", icon: <CodeOutlined />, description: "生成、调试、优化代码", color: "bg-blue-100 text-blue-600" },
    { title: "帮我写作", icon: <EditOutlined />, description: "撰写、润色、翻译文案", color: "bg-green-100 text-green-600" },
    { title: "图像生成", icon: <PictureOutlined />, description: "根据描述创作图片", color: "bg-purple-100 text-purple-600" },
    { title: "视频生成", icon: <VideoCameraOutlined />, description: "快速生成短视频", color: "bg-red-100 text-red-600" },
    { title: "AI PPT", icon: <FilePptOutlined />, description: "一键生成演示文稿", color: "bg-yellow-100 text-yellow-600" },
    { title: "简历优化", icon: <FileTextOutlined />, description: "分析并优化你的简历", color: "bg-indigo-100 text-indigo-600" },
    { title: "面试准备", icon: <UserOutlined />, description: "模拟面试、回答建议", color: "bg-pink-100 text-pink-600" },
    { title: "更多技能", icon: <AppstoreOutlined />, description: "探索更多可能性", color: "bg-gray-100 text-gray-600" },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      <Title level={2} className="text-gray-700 font-light mb-8 text-center">
        {getGreeting()}，有什么我能帮你的吗？
      </Title>

      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-5 flex flex-col gap-4 transition-all duration-300 hover:shadow-[0_6px_25px_rgba(0,0,0,0.08)]">
        {/* 输入框 */}
        <Input.TextArea
          autoSize={{ minRows: 1, maxRows: 4 }}
          placeholder="发消息或输入"
          className="!border-none !outline-none !shadow-none text-gray-800 text-base resize-none focus:ring-0"
        />

        {/* 底部功能按钮区 */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-3">
            <Button
              icon={<BulbOutlined />}
              className="flex items-center gap-1 rounded-full border border-gray-200 text-gray-700 px-4 hover:text-blue-600 hover:border-blue-400 transition-all duration-200"
            >
              深思
            </Button>

            <Button
              icon={<GlobalOutlined />}
              className="flex items-center gap-1 rounded-full border border-gray-200 text-gray-700 px-4 hover:text-blue-600 hover:border-blue-400 transition-all duration-200"
            >
              联网
            </Button>
          </div>

          <div className="flex items-center gap-3">
            <Button
              icon={<PaperClipOutlined />}
              className="flex items-center gap-1 rounded-full border border-gray-200 text-gray-700 px-4 hover:text-blue-600 hover:border-blue-400 transition-all duration-200"
            >
            </Button>

            <Button
              icon={<AudioOutlined />}
              className="flex items-center gap-1 rounded-full border border-gray-200 text-gray-700 px-4 hover:text-blue-600 hover:border-blue-400 transition-all duration-200"
            >
            </Button>

            <Button
              type="primary"
              icon={<ArrowUpOutlined />}
              className="flex items-center gap-1 rounded-full px-5 bg-blue-500 border-none hover:bg-blue-600 text-white font-medium shadow-sm hover:shadow-md transition-all duration-200"
            >
            </Button>
          </div>
        </div>
      </div>

      {/* 推荐功能卡片 */}
      <div className="mt-12 w-full max-w-4xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {suggestionCards.map((card, index) => (
            <Card
              key={index}
              hoverable
              className="cursor-pointer rounded-xl border-gray-200 transition-all duration-300 group hover:shadow-lg hover:border-blue-500"
            >
              <div className="flex flex-col items-start p-1">
                <div
                  className={`p-2 rounded-lg ${card.color} group-hover:scale-110 transition-transform`}
                >
                  {React.cloneElement(card.icon, { className: "text-xl" })}
                </div>
                <Text className="font-semibold text-base mt-3 text-gray-800">
                  {card.title}
                </Text>
                <Text type="secondary" className="text-sm mt-1">
                  {card.description}
                </Text>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewSessionContent;
