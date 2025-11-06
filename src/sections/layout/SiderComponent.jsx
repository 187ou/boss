import React from "react";
import {Menu, Button, Typography, Divider, Avatar} from "antd";
import {
  EditOutlined,
  AppstoreOutlined,
  MessageOutlined,
  FileTextOutlined,
  UserOutlined,
  SwapOutlined,
  RobotOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

const {Title, Text} = Typography;

const SiderComponent = ({
                          collapsed,
                          setCollapsed,
                          selectedMenu,
                          onMenuClick,
                          historyItems,
                        }) => {
  // 功能菜单
  const menuItems = [
    {key: "new-session", icon: <EditOutlined/>, label: "新建会话"},
    {key: "job-match", icon: <AppstoreOutlined/>, label: "岗位智能匹配"},
    {key: "greeting", icon: <MessageOutlined/>, label: "打招呼话术"},
    {key: "resume-optimize", icon: <FileTextOutlined/>, label: "简历优化"},
    {key: "interview", icon: <UserOutlined/>, label: "面试准备"},
    {key: "offer-compare", icon: <SwapOutlined/>, label: "offer 对比"},
  ];

  return (
    <div className="p-4 h-full flex flex-col">
      {/* 品牌区域 */}
      <div
        className={`flex items-center mb-6 ${
          collapsed ? "justify-center" : "justify-between"
        }`}
      >
        <div
          className="flex items-center cursor-pointer transition-transform hover:scale-105"
          onClick={() => {
            if (collapsed) setCollapsed(false);
          }}
        >
          <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
            <RobotOutlined className="text-white text-xl"/>
          </div>
          {!collapsed && (
            <Title
              level={4}
              className="text-gray-800 font-semibold m-0 ml-2 whitespace-nowrap"
            >
              <span className="ml-1 text-lg font-semibold text-gray-800 leading-none align-middle">
                Boss智联
              </span>
            </Title>
          )}
        </div>

        {!collapsed && (
          <Button
            type="text"
            icon={<MenuFoldOutlined/>}
            onClick={() => setCollapsed(true)}
            className="text-gray-500 hover:text-gray-800 p-1 hover:bg-gray-100 rounded-full transition-colors"
          />
        )}
      </div>

      {/* 功能菜单 */}
      <Menu
        mode="inline"
        style={{borderInlineEnd: "none"}}
        items={menuItems.map((item) => ({
          ...item,
          className: `rounded-lg font-medium transition-colors ${
            selectedMenu === item.key
              ? "bg-blue-50 text-blue-600"
              : "hover:bg-gray-100"
          }`,
        }))}
        className="mt-4 bg-transparent border-none text-gray-700"
        selectedKeys={[selectedMenu]}
        onClick={onMenuClick}
      />

      {/* 历史对话区域 */}
      {!collapsed && (
        <>
          <Divider className="my-4 bg-gray-100"/>
          <Text type="secondary" className="ml-2 text-sm font-medium">
            历史对话
          </Text>
          <div className="mt-3 flex-grow overflow-y-auto pr-2 scrollbar-thin">
            <div className="pb-2">
              {historyItems.map((item, index) => (
                <div
                  key={index}
                  className="p-2.5 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-gray-100"
                >
                  <Text ellipsis className="text-sm text-gray-700">
                    {item}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* 底部用户区域 */}
      <div className="mt-auto pt-4 border-t border-gray-100">
        <div
          className={`flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer ${
            collapsed ? "justify-center" : ""
          }`}
        >
          <Avatar icon={<UserOutlined/>} size="small"/>
          {!collapsed && (
            <Text className="ml-3 font-semibold text-gray-800 text-sm">
              用户设置
            </Text>
          )}
        </div>
      </div>
    </div>
  );
};

export default SiderComponent;