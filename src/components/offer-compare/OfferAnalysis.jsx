// src/sections/offer-compare/components/OfferAnalysis.jsx
import React from "react";
import {
  Card, Table, Slider, Badge, Progress, Button
} from "antd";
import { Bar, Radar } from 'react-chartjs-2';
import {
  BarChartOutlined, PlusOutlined, RadarChartOutlined
} from "@ant-design/icons";
import { Typography } from "antd";

const { Title, Text } = Typography;

const OfferAnalysis = ({
                         offers,
                         indicators,
                         analysisResult,
                         onUpdateIndicatorWeight,
                         barChartData,
                         radarChartData,
                         chartOptions
                       }) => {
  return offers.length >= 2 ? (
    <>
      <Card className="mb-4">
        <Title level={4} style={{ marginBottom: 20 }}>评估指标权重设置</Title>
        <div className="space-y-4">
          {indicators.map(indicator => (
            <div key={indicator.id}>
              <div className="flex justify-between">
                <Text strong>{indicator.name}</Text>
                <Text>{indicator.weight}%</Text>
              </div>
              <Slider
                value={indicator.weight}
                min={1}
                max={50}
                onChange={(val) => onUpdateIndicatorWeight(indicator.id, val)}
              />
            </div>
          ))}
        </div>
      </Card>

      <Card className="mb-4">
        <Title level={4} style={{ marginBottom: 20 }}>综合得分排名</Title>
        <Table
          dataSource={analysisResult}
          columns={[
            {
              title: "排名",
              render: (_, __, i) => (
                <Badge status={i === 0 ? "success" : "processing"} text={`第${i + 1}名`} />
              )
            },
            { title: "公司", dataIndex: "company" },
            { title: "岗位", dataIndex: "position" },
            { title: "基本工资", dataIndex: "baseSalary", render: v => `${v}k/月` },
            {
              title: "综合得分",
              dataIndex: "totalScore",
              render: score => (
                <div>
                  <Text strong>{score}</Text>
                  <Progress percent={score} size="small" className="mt-1" />
                </div>
              )
            }
          ]}
          pagination={false}
        />
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <Title level={5} style={{ margin: 0 }}>
            薪资结构对比 <BarChartOutlined />
          </Title>
          <div className="h-80 mt-4">
            <Bar data={barChartData} options={chartOptions} />
          </div>
        </Card>

        <Card>
          <Title level={5} style={{ margin: 0 }}>
            多维度评估对比 <RadarChartOutlined />
          </Title>
          <div className="h-80 mt-4">
            <Radar data={radarChartData} options={chartOptions} />
          </div>
        </Card>
      </div>
    </>
  ) : (
    <Card className="h-96 flex items-center justify-center">
      <div className="text-center">
        <Text type="secondary">请至少添加两个Offer进行对比分析</Text>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          className="mt-4"
          onClick={() => {
            handleAddOffer();
            document.querySelector('[data-tab-key="input"]').click();
          }}
        >
          添加新Offer
        </Button>
      </div>
    </Card>
  );
};

export default OfferAnalysis;
