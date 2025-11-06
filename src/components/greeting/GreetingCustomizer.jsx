// src/components/greeting/GreetingCustomizer.jsx
import React, {useState, useEffect} from "react";
import {Card, Select, Button, Input, Typography, Space, message} from "antd";
import {CopyOutlined, EditOutlined} from "@ant-design/icons";

const {Text, Paragraph} = Typography;
const {Option} = Select;
const {TextArea} = Input;

// 模拟数据（实际应用中应该作为props传入）
const mockTalentData = {
  name: "张开发",
  coreSkill: "3年Python开发经验，熟练掌握Django/Flask框架，精通MySQL数据库优化",
  experience: "3年",
  matchPoint: "岗位要求的Python后端技能完全匹配，有2个电商项目经验与岗位业务契合"
};

const mockJobData = {
  company: "科技有限公司",
  position: "Python后端开发工程师",
  hr: "李HR"
};

const speechTemplates = {
  professional: (talent, job) =>
    `您好${job.hr}，我是${talent.name}。拥有${talent.experience}${talent.coreSkill}，${talent.matchPoint}。对贵司${job.position}岗位非常感兴趣，期待有机会进一步沟通岗位细节，感谢！`,
  friendly: (talent, job) =>
    `李HR您好～我是张开发，看到贵司在招Python后端工程师，特别来打个招呼！我做了3年Python开发，Django和数据库优化都很熟练，之前的电商项目经验也和岗位很契合～希望能和您聊聊岗位，麻烦您啦！`,
  efficient: (talent, job) =>
    `${job.hr}您好，${talent.name}。${talent.coreSkill}，${talent.matchPoint}。应聘${job.position}，盼回复沟通面试细节。`
};

const GreetingCustomizer = () => {
  const [style, setStyle] = useState("professional");
  const [customSpeech, setCustomSpeech] = useState("");

  useEffect(() => {
    const generated = speechTemplates[style](mockTalentData, mockJobData);
    setCustomSpeech(generated);
  }, [style]);

  const copySpeech = () => {
    navigator.clipboard.writeText(customSpeech).then(() => {
      message.success("话术已复制到剪贴板");
    });
  };

  const polishSpeech = () => {
    const polished = customSpeech.replace(/。/g, "，")
      .replace("很", "非常")
      .replace("希望", "期待") + " （AI润色后）";
    setCustomSpeech(polished);
  };

  return (
    <Card>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Text className="block mb-2 font-medium">选择话术风格</Text>
          <Select
            defaultValue={style}
            onChange={setStyle}
            style={{width: "100%"}}
          >
            <Option value="professional">专业型（适合国企/传统行业）</Option>
            <Option value="friendly">亲和型（适合互联网/创业公司）</Option>
            <Option value="efficient">高效型（适合快速沟通场景）</Option>
          </Select>
          <Paragraph type="secondary" className="mt-2 text-sm">
            基于岗位行业特性和HR沟通偏好推荐
          </Paragraph>
        </div>

        <div className="md:col-span-2">
          <Text className="block mb-2 font-medium">生成的话术（150字内）</Text>
          <TextArea
            value={customSpeech}
            onChange={(e) => setCustomSpeech(e.target.value)}
            rows={4}
            placeholder="话术将在此处生成"
            className="mb-3"
          />
          <Space>
            <Button
              type="primary"
              icon={<CopyOutlined/>}
              onClick={copySpeech}
            >
              复制话术
            </Button>
            <Button
              icon={<EditOutlined/>}
              onClick={polishSpeech}
            >
              AI润色
            </Button>
          </Space>
        </div>
      </div>
    </Card>
  );
};

export default GreetingCustomizer;
