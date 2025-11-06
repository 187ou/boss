// src/components/greeting/FollowUpGenerator.jsx
import React, {useState} from "react";
import {Card, Typography, List, Tag, Button} from "antd";
import {SendOutlined} from "@ant-design/icons";

const {Text, Paragraph} = Typography;

// 模拟数据（实际应用中应该作为props传入）
const mockJobData = {
  company: "科技有限公司",
  position: "Python后端开发工程师",
  hr: "李HR"
};

const mockHrReplies = [
  {id: 1, content: "你的背景挺匹配的，方便说下最快到岗时间吗？"},
  {id: 2, content: "岗位需要出差，你这边可以接受吗？"},
  {id: 3, content: "本周四有面试，你时间方便吗？"}
];

const followUpTemplates = (hrReply, job) => {
  if (hrReply.includes("到岗时间")) {
    return `感谢${job.hr}回复！我目前已离职，确认录用后可1周内到岗，请问后续需要准备哪些面试材料吗？`;
  } else if (hrReply.includes("出差")) {
    return `您好${job.hr}，出差我可以接受，想了解下该岗位的出差频率和主要出差地区，方便说明吗？`;
  } else if (hrReply.includes("面试时间")) {
    return `感谢${job.hr}安排！本周四我时间完全方便，麻烦告知面试的具体形式（线上/线下）和会议链接，谢谢～`;
  }
  return `感谢${job.hr}回复！我还有个疑问：想了解下该岗位的团队规模和项目周期，方便简单介绍吗？`;
};

const FollowUpGenerator = () => {
  const [selectedHrReply, setSelectedHrReply] = useState(null);
  const [followUpSpeech, setFollowUpSpeech] = useState("");

  const handleHrReplySelect = (reply) => {
    setSelectedHrReply(reply);
    setFollowUpSpeech(followUpTemplates(reply.content, mockJobData));
  };

  return (
    <Card>
      <Text className="block mb-3 font-medium">模拟HR回复：选择后生成对应跟进话术</Text>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <List
            dataSource={mockHrReplies}
            renderItem={(reply) => (
              <List.Item
                className={`cursor-pointer ${selectedHrReply?.id === reply.id ? "bg-blue-50" : ""}`}
                onClick={() => handleHrReplySelect(reply)}
              >
                <List.Item.Meta
                  avatar={<Tag color="blue">HR回复</Tag>}
                  title={<Text>{reply.content}</Text>}
                  description={<Text type="secondary" className="text-sm">点击生成跟进话术</Text>}
                />
              </List.Item>
            )}
            bordered
          />
        </div>

        <div>
          <Text className="block mb-2 font-medium">生成的跟进话术</Text>
          {selectedHrReply ? (
            <>
              <Card className="mb-3 bg-gray-50">
                <Paragraph>{followUpSpeech}</Paragraph>
              </Card>
              <Button
                type="primary"
                icon={<SendOutlined/>}
                block
              >
                发送跟进消息
              </Button>
            </>
          ) : (
            <div className="h-32 flex items-center justify-center border border-dashed rounded-lg text-gray-400">
              选择上方HR回复，生成跟进话术
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default FollowUpGenerator;
