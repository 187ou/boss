import React from "react";
import { Card, Form, Input, Select, Button, Typography, Badge, Progress } from "antd";
import { SearchOutlined, FilterOutlined, DollarOutlined, EnvironmentOutlined, ClockCircleOutlined, CheckCircleOutlined, WarningOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { Option } = Select;

const JobMatcher = ({ jobPositions }) => {
  const [form] = Form.useForm();

  return (
    <Card className="mb-6">
      {/* 搜索筛选区域 */}
      <Form form={form} layout="inline" className="mb-6">
        <Form.Item name="keyword" label="关键词">
          <Input placeholder="岗位名称、技能" style={{ width: 200 }} />
        </Form.Item>
        <Form.Item name="location" label="工作地点">
          <Select placeholder="选择城市" style={{ width: 150 }}>
            <Option value="beijing">北京</Option>
            <Option value="shanghai">上海</Option>
            <Option value="guangzhou">广州</Option>
            <Option value="shenzhen">深圳</Option>
          </Select>
        </Form.Item>
        <Form.Item name="experience" label="工作经验">
          <Select placeholder="选择经验" style={{ width: 150 }}>
            <Option value="fresh">应届毕业生</Option>
            <Option value="1-3">1-3年</Option>
            <Option value="3-5">3-5年</Option>
            <Option value="5+">5年以上</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" icon={<SearchOutlined />} onClick={() => {}}>搜索</Button>
        </Form.Item>
        <Form.Item>
          <Button icon={<FilterOutlined />} onClick={() => {}}>更多筛选</Button>
        </Form.Item>
      </Form>

      {/* 岗位列表 */}
      <Title level={5} className="text-gray-700 mb-4">为你找到 {jobPositions.length} 个匹配岗位</Title>

      <div className="space-y-4">
        {jobPositions.map(job => (
          <Card key={job.id} className="border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <Title level={4} className="text-gray-800 mb-1">{job.title}</Title>
                    <div className="flex items-center mb-2">
                      <Text strong className="text-gray-700">{job.company}</Text>
                      <Badge className="ml-2" status="success" text={`匹配度 ${job.matchScore}%`} />
                    </div>
                  </div>
                  <Progress percent={job.matchScore} size="small" status={job.matchScore > 80 ? "success" : "active"} />
                </div>

                {/* 岗位基本信息 */}
                <div className="flex flex-wrap gap-3 mb-3 text-sm">
                  <div className="flex items-center text-gray-600"><DollarOutlined className="mr-1" />{job.salary}</div>
                  <div className="flex items-center text-gray-600"><EnvironmentOutlined className="mr-1" />{job.location}</div>
                  <div className="flex items-center text-gray-600"><ClockCircleOutlined className="mr-1" />{job.experience}</div>
                </div>

                {/* 岗位标签 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tags.map((tag, i) => (
                    <Badge key={i} color="gray" text={tag} />
                  ))}
                </div>

                {/* 亮点与风险 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Text className="text-sm font-medium text-gray-700">岗位亮点：</Text>
                    <div className="ml-4 mt-1 space-y-1">
                      {job.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start text-sm text-green-600">
                          <CheckCircleOutlined className="mr-1 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Text className="text-sm font-medium text-gray-700">风险提示：</Text>
                    <div className="ml-4 mt-1 space-y-1">
                      {job.risks.map((risk, i) => (
                        <div key={i} className="flex items-start text-sm text-orange-600">
                          <WarningOutlined className="mr-1 mt-0.5" />
                          <span>{risk}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 匹配度分析 */}
              <div className="mt-4 md:mt-0 md:ml-6 md:w-64">
                <Card title="匹配维度分析" className="border-gray-200">
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <Text>技能匹配</Text>
                        <Text>{job.matchScore - 5}%</Text>
                      </div>
                      <Progress percent={job.matchScore - 5} size="small" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <Text>经验匹配</Text>
                        <Text>{job.matchScore - 10}%</Text>
                      </div>
                      <Progress percent={job.matchScore - 10} size="small" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <Text>教育背景匹配</Text>
                        <Text>{job.matchScore - 8}%</Text>
                      </div>
                      <Progress percent={job.matchScore - 8} size="small" />
                    </div>
                  </div>
                  <Button type="primary" block className="mt-4">查看详情</Button>
                </Card>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
};

export default JobMatcher;