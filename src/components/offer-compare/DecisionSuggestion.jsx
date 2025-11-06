// src/sections/offer-compare/components/DecisionSuggestion.jsx
import React from "react";
import {
  Card, Radio, Badge, Divider, List, Button
} from "antd";
import {
  ArrowRightOutlined,
  CheckOutlined, WarningOutlined
} from "@ant-design/icons";
import { Typography } from "antd";

const { Title, Text } = Typography;

const DecisionSuggestion = ({
                              analysisResult,
                              userPriority,
                              setUserPriority,
                              offers
                            }) => {
  return analysisResult && offers.length >= 2 ? (
    <Card>
      <Title level={4} style={{ marginBottom: 20 }}>你的核心诉求</Title>
      <Radio.Group
        value={userPriority}
        onChange={e => setUserPriority(e.target.value)}
        buttonStyle="solid"
        className="mb-6"
      >
        <Radio.Button value="balanced">综合平衡</Radio.Button>
        <Radio.Button value="salary">优先薪资</Radio.Button>
        <Radio.Button value="career">优先发展前景</Radio.Button>
        <Radio.Button value="worklife">优先工作生活平衡</Radio.Button>
      </Radio.Group>

      <Title level={4} style={{ marginBottom: 16 }}>推荐选择</Title>
      <Card bordered={false} className="mb-6" style={{ border: '1px solid #52c41a' }}>
        {(() => {
          let bestOffer;
          switch (userPriority) {
            case "salary":
              bestOffer = [...analysisResult].sort((a, b) => b.baseSalary - a.baseSalary)[0];
              break;
            case "career":
              bestOffer = [...analysisResult].sort((a, b) => b.scores.career - a.scores.career)[0];
              break;
            case "worklife":
              bestOffer = [...analysisResult].sort((a, b) => b.scores.workload - a.scores.workload)[0];
              break;
            default:
              bestOffer = analysisResult[0];
          }
          return (
            <>
              <div className="flex justify-between items-center">
                <div>
                  <Title level={5} style={{ margin: 0, color: '#52c41a' }}>{bestOffer.company}</Title>
                  <Text>{bestOffer.position}</Text>
                </div>
                <Badge status="success" text={
                  userPriority === "salary" ? "薪资最优" :
                    userPriority === "career" ? "发展最佳" :
                      userPriority === "worklife" ? "工作最轻松" : "综合最优"
                } />
              </div>

              <Divider />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Text strong>推荐理由：</Text>
                  <List
                    dataSource={[
                      userPriority === "salary" ?
                        `基本工资${bestOffer.baseSalary}k/月，薪资竞争力得分${bestOffer.scores.salary}分，在所有Offer中最高` :
                        userPriority === "career" ?
                          `职业发展前景得分${bestOffer.scores.career}分，晋升机制明确，成长空间大` :
                          userPriority === "worklife" ?
                            `工作强度得分${bestOffer.scores.workload}分，通勤时间${bestOffer.commuteTime}分钟，工作生活平衡最佳` :
                            `综合得分${bestOffer.totalScore}分，各维度表现均衡，无明显短板`
                    ]}
                    renderItem={item => (
                      <List.Item prefix={<CheckOutlined className="text-green-600" />}>
                        {item}
                      </List.Item>
                    )}
                  />
                </div>

                <div>
                  <Text strong>潜在风险：</Text>
                  <List
                    dataSource={[
                      bestOffer.scores.workload < 60 && "工作强度可能较大，需注意加班情况",
                      bestOffer.insuranceRatio < 100 && `五险一金按${bestOffer.insuranceRatio}%缴纳，低于全额标准`,
                      bestOffer.yearEndBonus.includes("1-3") && "年终奖范围较宽，存在不确定性"
                    ].filter(Boolean)}
                    renderItem={item => (
                      <List.Item prefix={<WarningOutlined className="text-orange-500" />}>
                        {item}
                      </List.Item>
                    )}
                  />
                </div>
              </div>
            </>
          );
        })()}
      </Card>

      <Title level={4} style={{ marginBottom: 16 }}>其他选项对比</Title>
      <div className="space-y-3">
        {analysisResult.slice(1).map(offer => (
          <Card key={offer.id} bordered={false}>
            <div className="flex justify-between">
              <div>
                <Text strong>{offer.company} - {offer.position}</Text>
                <Text type="secondary" className="ml-2">综合得分：{offer.totalScore}</Text>
              </div>
              <Text type="secondary">
                比推荐选项低{analysisResult[0].totalScore - offer.totalScore}分
              </Text>
            </div>
            <Text className="mt-1">
              {offer.scores.salary > analysisResult[0].scores.salary ? "优势：薪资更高" :
                offer.scores.commute > analysisResult[0].scores.commute ? "优势：通勤更便利" :
                  "整体表现略逊于推荐选项"}
            </Text>
          </Card>
        ))}
      </div>
    </Card>
  ) : (
    <Card className="h-96 flex items-center justify-center">
      <div className="text-center">
        <Text type="secondary">请先添加至少两个Offer</Text>
        <Button
          type="primary"
          icon={<ArrowRightOutlined />}
          className="mt-4"
          onClick={() => document.querySelector('[data-tab-key="input"]').click()}
        >
          前往录入
        </Button>
      </div>
    </Card>
  );
};

export default DecisionSuggestion;
