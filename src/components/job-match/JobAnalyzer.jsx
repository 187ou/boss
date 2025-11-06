import React from "react";
import { Card, Select, Typography, List, Divider } from "antd";
import { StarOutlined, CheckCircleOutlined, WarningOutlined } from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;

const JobAnalyzer = ({ jobPositions }) => {
  // 取第一个岗位作为默认分析对象
  const defaultJob = jobPositions[0] || {};

  return (
    <Card>
      <Title level={5} className="text-gray-700 mb-4">岗位综合评估</Title>

      {/* 岗位选择器 */}
      <Select placeholder="选择要分析的岗位" style={{ width: 300, marginBottom: 16 }}>
        {jobPositions.map(job => (
          <Option key={job.id} value={job.id}>{job.title} - {job.company}</Option>
        ))}
      </Select>

      {/* 企业信息与JD解析 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card title="企业信息" className="border-gray-200">
          <List
            dataSource={[
              { label: "成立时间", value: defaultJob.companyInfo?.established || "未知" },
              { label: "公司规模", value: defaultJob.companyInfo?.size || "未知" },
              { label: "行业排名", value: defaultJob.companyInfo?.ranking || "未知" },
              { label: "员工评分", value: defaultJob.companyInfo?.rating ? `${defaultJob.companyInfo.rating}/5分` : "未知" }
            ]}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={<Text type="secondary">{item.label}</Text>}
                  description={<Text strong>{item.value}</Text>}
                />
              </List.Item>
            )}
          />
        </Card>

        <Card title="JD真实需求解析" className="border-gray-200 md:col-span-2">
          <Paragraph className="mb-3">
            <Text strong>表面需求：</Text>负责公司前端开发工作，使用React技术栈构建用户界面，优化前端性能。
          </Paragraph>
          <Paragraph className="mb-3">
            <Text strong>潜在需求：</Text>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              <li>需要独立解决复杂前端问题的能力</li>
              <li>可能需要参与产品需求讨论，具备一定产品思维</li>
              <li>"抗压能力强"暗示项目周期紧张，可能有较多加班</li>
              <li>"团队协作能力"表明该岗位需要频繁与后端、设计团队沟通</li>
            </ul>
          </Paragraph>
          <Paragraph>
            <Text strong>核心胜任力：</Text>React深入应用能力、性能优化经验、跨团队协作能力、问题解决能力
          </Paragraph>
        </Card>
      </div>

      {/* 技术岗定制分析 */}
      <Card title="技术岗定制分析" className="border-gray-200">
        <Title level={5} className="text-gray-700 mb-3">技术栈匹配详情</Title>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Text className="text-sm font-medium text-gray-700 mb-2 block">匹配的技术要求：</Text>
            <div className="space-y-2">
              {["React框架", "JavaScript/TypeScript", "前端工程化", "性能优化"].map((skill, i) => (
                <div key={i} className="flex items-center text-green-600">
                  <CheckCircleOutlined className="mr-2" />
                  <span>{skill} - 符合你的技能背景</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Text className="text-sm font-medium text-gray-700 mb-2 block">需要提升的方面：</Text>
            <div className="space-y-2">
              {["Vue技术栈", "小程序开发经验", "Electron桌面应用"].map((skill, i) => (
                <div key={i} className="flex items-center text-orange-600">
                  <WarningOutlined className="mr-2" />
                  <span>{skill} - 岗位有要求但你的经验有限</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Divider className="my-4" />

        <Title level={5} className="text-gray-700 mb-3">面试重点预测</Title>
        <List
          dataSource={[
            "React Hooks的使用经验和原理理解",
            "前端性能优化的实际案例和方法论",
            "复杂业务场景下的组件设计思路",
            "前端工程化的实践经验",
            "跨团队协作中遇到的挑战及解决方案"
          ]}
          renderItem={item => (
            <List.Item prefix={<StarOutlined className="text-yellow-500" />}>
              {item}
            </List.Item>
          )}
        />
      </Card>
    </Card>
  );
};

export default JobAnalyzer;