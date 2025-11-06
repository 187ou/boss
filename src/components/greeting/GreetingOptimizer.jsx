// src/components/greeting/GreetingOptimizer.jsx
import React, {useState} from "react";
import {Card, Typography, Radio, Divider, List} from "antd";
import {LikeOutlined, DislikeOutlined} from "@ant-design/icons";

const {Text} = Typography;

const GreetingOptimizer = () => {
  const [feedback, setFeedback] = useState(null);

  return (
    <Card>
      <div className="mb-4">
        <Text className="block mb-2 font-medium">使用效果反馈（帮助优化话术）</Text>
        <Radio.Group
          defaultValue={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          buttonStyle="solid"
        >
          <Radio.Button value="useful"><LikeOutlined/> 有用（已回复）</Radio.Button>
          <Radio.Button value="useless"><DislikeOutlined/> 无用（未回复）</Radio.Button>
        </Radio.Group>
      </div>
      <Divider/>
      <div>
        <Text className="block mb-2 font-medium">自定义修改记录</Text>
        <List
          dataSource={[
            {
              id: 1,
              content: '将"挺感兴趣"改为"非常感兴趣"，增强意愿表达',
              time: "2025-10-01 14:30"
            },
            {
              id: 2,
              content: '添加"电商项目经验"细节，突出业务匹配度',
              time: "2025-10-01 14:35"
            }
          ]}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={<Text>{item.content}</Text>}
                description={<Text type="secondary" className="text-sm">{item.time}</Text>}
              />
            </List.Item>
          )}
          bordered
          className="text-sm"
        />
      </div>
    </Card>
  );
};

export default GreetingOptimizer;
