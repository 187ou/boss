import React from "react";
import { Card, Upload, Button, Typography, Badge, List } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const ResumeParser = () => {
  return (
    <Card className="mb-6">
      {/* 上传区域 */}
      <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
        <UploadOutlined className="text-4xl text-gray-400 mb-4" />
        <Title level={4} className="text-gray-700 mb-2 text-center">上传你的简历</Title>
        <Paragraph type="secondary" className="text-center mb-6">
          支持 PDF、Word、图片格式，系统将自动提取关键信息
        </Paragraph>
        <Upload
          name="resume"
          action="/upload"
          listType="text"
          className="w-full max-w-md flex justify-center"
        >
          <Button type="primary" icon={<UploadOutlined />} block>
            选择文件上传
          </Button>
        </Upload>
      </div>

      {/* 解析结果预览 */}
      <div className="mt-8">
        <Title level={5} className="text-gray-700 mb-4">简历解析结果预览</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 核心技能 */}
          <Card title="核心技能" className="border-gray-200">
            <div className="flex flex-wrap gap-2">
              {["React", "JavaScript", "TypeScript", "CSS3", "HTML5", "Webpack", "性能优化"].map((skill, i) => (
                <Badge key={i} color="blue" text={skill} className="px-2 py-1" />
              ))}
            </div>
          </Card>

          {/* 工作经验 */}
          <Card title="工作经验" className="border-gray-200">
            <List
              dataSource={[
                { period: "2020-至今", company: "科技公司", position: "前端开发工程师" },
                { period: "2018-2020", company: "互联网企业", position: "Web前端开发" }
              ]}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    title={item.position}
                    description={
                      <div>
                        <Text>{item.company}</Text>
                        <Text type="secondary" className="ml-2">{item.period}</Text>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>

          {/* 教育背景 */}
          <Card title="教育背景" className="border-gray-200">
            <List
              dataSource={[
                { period: "2014-2018", school: "某大学", degree: "本科", major: "计算机科学与技术" }
              ]}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    title={`${item.school} · ${item.degree}`}
                    description={
                      <div>
                        <Text>{item.major}</Text>
                        <Text type="secondary" className="ml-2">{item.period}</Text>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>

          {/* 项目成果 */}
          <Card title="项目成果" className="border-gray-200">
            <List
              dataSource={[
                { name: "企业管理系统重构", desc: "负责前端架构设计与核心模块开发，提升性能30%" },
                { name: "移动端H5组件库", desc: "独立开发15+通用组件，被3个项目复用" }
              ]}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    title={item.name}
                    description={item.desc}
                  />
                </List.Item>
              )}
            />
          </Card>
        </div>
      </div>
    </Card>
  );
};

export default ResumeParser;