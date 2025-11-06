import React, { useState, useEffect } from "react";
import { Card, Typography, Button, Form, message } from "antd";
import {
  FormOutlined,
  BarChartOutlined,
  BulbOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title as ChartTitle,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ChartTitle,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement
);

// 导入组件
import SectionLayout from "@/components/common/SectionLayout";
import OfferInput from "@/components/offer-compare/OfferInput";
import OfferAnalysis from "@/components/offer-compare/OfferAnalysis";
import DecisionSuggestion from "@/components/offer-compare/DecisionSuggestion";
import NegotiationAssistant from "@/components/offer-compare/NegotiationAssistant";

const { Title } = Typography;

// 初始指标
const initialIndicators = [
  { id: "salary", name: "薪资竞争力", weight: 30, max: 100 },
  { id: "career", name: "职业发展前景", weight: 25, max: 100 },
  { id: "workload", name: "工作强度", weight: 15, max: 100 },
  { id: "benefits", name: "福利完善度", weight: 15, max: 100 },
  { id: "commute", name: "通勤成本", weight: 10, max: 100 },
  { id: "culture", name: "企业文化契合度", weight: 5, max: 100 },
];

// 行业薪资参考
const industrySalaryDB = {
  前端开发工程师: { 3: 20, 5: 30, 10: 45 },
  高级前端开发工程师: { 3: 25, 5: 35, 10: 50 },
  前端技术专家: { 3: 30, 5: 40, 10: 60 },
  后端开发工程师: { 3: 22, 5: 32, 10: 48 },
  产品经理: { 3: 23, 5: 33, 10: 52 },
};

const OfferCompareContent = () => {
  const [offers, setOffers] = useState([]);
  const [activeOfferId, setActiveOfferId] = useState(null);
  const [indicators, setIndicators] = useState(initialIndicators);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [userPriority, setUserPriority] = useState("balanced");
  const [negotiationTarget, setNegotiationTarget] = useState(null);
  const [negotiationScript, setNegotiationScript] = useState("");
  const [form] = Form.useForm();

  /** 初始化示例数据 **/
  useEffect(() => {
    if (offers.length === 0) {
      setOffers([
        {
          id: 1,
          company: "科技有限公司A",
          position: "高级前端开发工程师",
          baseSalary: 35,
          performanceBonus: 5,
          yearEndBonus: "2-4个月薪资",
          insuranceRatio: 100,
          location: "北京市朝阳区",
          commuteTime: 45,
          responsibilities: "负责核心业务线前端架构设计与开发",
          promotionMechanism: "每年2次晋升评估，透明化路径",
          benefits: ["补充商业保险", "年度体检", "15天带薪年假"],
          scores: initialIndicators.reduce(
            (obj, item) => ({ ...obj, [item.id]: 50 }),
            {}
          ),
        },
      ]);
    }
  }, [offers]);

  /** 计算综合得分 **/
  useEffect(() => {
    if (offers.length < 2) return;
    const results = offers.map((offer) => {
      let total = 0;
      indicators.forEach((ind) => {
        total += offer.scores[ind.id] * (ind.weight / 100);
      });
      return { ...offer, totalScore: Math.round(total) };
    });
    setAnalysisResult(results.sort((a, b) => b.totalScore - a.totalScore));
  }, [offers, indicators]);

  /** 操作函数 **/
  const handleAddOffer = () => {
    const newId = offers.length > 0 ? Math.max(...offers.map((o) => o.id)) + 1 : 1;
    const newOffer = {
      id: newId,
      company: `新公司${newId}`,
      position: "",
      baseSalary: 0,
      performanceBonus: 0,
      yearEndBonus: "",
      insuranceRatio: 100,
      location: "",
      commuteTime: 0,
      responsibilities: "",
      promotionMechanism: "",
      benefits: [],
      scores: initialIndicators.reduce((obj, item) => ({ ...obj, [item.id]: 50 }), {}),
    };
    setOffers([...offers, newOffer]);
    setActiveOfferId(newId);
    form.setFieldsValue(newOffer);
  };

  const handleDeleteOffer = (id) => {
    if (offers.length <= 1) {
      message.warning("至少保留一个Offer进行对比");
      return;
    }
    const updated = offers.filter((o) => o.id !== id);
    setOffers(updated);
    setActiveOfferId(updated[0].id);
    form.setFieldsValue(updated[0]);
  };

  const handleSelectOffer = (id) => {
    const offer = offers.find((o) => o.id === id);
    if (offer) {
      setActiveOfferId(id);
      form.setFieldsValue(offer);
    }
  };

  const handleSaveOffer = () => {
    form.validateFields().then((values) => {
      const updated = offers.map((offer) =>
        offer.id === activeOfferId ? { ...offer, ...values } : offer
      );
      setOffers(updated);
      message.success("Offer信息已保存");
    });
  };

  const updateIndicatorWeight = (id, weight) => {
    setIndicators(indicators.map((ind) => (ind.id === id ? { ...ind, weight } : ind)));
  };

  const generateNegotiationScript = () => {
    if (!negotiationTarget) {
      message.warning("请选择谈判目标公司");
      return;
    }

    const target = offers.find((o) => o.id === negotiationTarget);
    const others = offers.filter((o) => o.id !== negotiationTarget);
    if (others.length === 0) {
      message.warning("至少需要两个Offer才能生成谈判话术");
      return;
    }

    const highestOther = others.sort((a, b) => b.baseSalary - a.baseSalary)[0];
    const expYears = 5;
    const industryRef = industrySalaryDB[target.position]?.[expYears] || 0;
    const targetSalary = Math.max(highestOther.baseSalary, industryRef);

    setNegotiationScript(
      `您好，非常感谢贵公司给予的${target.position}岗位Offer。我对贵公司的发展前景和团队氛围非常认可，但目前也收到了其他公司的Offer，其中一家基本月薪为${highestOther.baseSalary}k。根据行业数据，${expYears}年经验的${target.position}平均薪资约为${industryRef}k。考虑到我在相关领域的经验，希望能将基本月薪调整至${targetSalary}k左右。期待能达成双方满意的方案。`
    );
  };

  /** 图表数据 **/
  const barChartData = {
    labels: analysisResult?.map((offer) => offer.company) || [],
    datasets: [
      {
        label: "基本工资（k/月）",
        data: analysisResult?.map((offer) => offer.baseSalary) || [],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "绩效奖金（k/月）",
        data: analysisResult?.map((offer) => offer.performanceBonus) || [],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "年终奖（月数）",
        data:
          analysisResult?.map((offer) => {
            const range = offer.yearEndBonus.match(/\d+/g) || [0];
            return range.length === 2
              ? (parseInt(range[0]) + parseInt(range[1])) / 2
              : parseInt(range[0] || 0);
          }) || [],
        backgroundColor: "rgba(255, 159, 64, 0.6)",
      },
    ],
  };

  const radarChartData = {
    labels: indicators.map((ind) => ind.name),
    datasets:
      analysisResult?.map((offer, i) => ({
        label: offer.company,
        data: indicators.map((ind) => offer.scores[ind.id]),
        backgroundColor: i === 0 ? "rgba(75, 192, 192, 0.2)" : "rgba(54, 162, 235, 0.2)",
        borderColor: i === 0 ? "rgba(75, 192, 192, 1)" : "rgba(54, 162, 235, 1)",
      })) || [],
  };

  const chartOptions = { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "top" } } };

  /** Tabs 配置 **/
  const tabs = [
    {
      key: "input",
      tab: (
        <span className="flex items-center gap-2">
          <FormOutlined /> 信息录入
        </span>
      ),
      content: (
        <OfferInput
          offers={offers}
          activeOfferId={activeOfferId}
          form={form}
          onAddOffer={handleAddOffer}
          onDeleteOffer={handleDeleteOffer}
          onSelectOffer={handleSelectOffer}
          onSaveOffer={handleSaveOffer}
        />
      ),
    },
    {
      key: "analysis",
      tab: (
        <span className="flex items-center gap-2">
          <BarChartOutlined /> 量化对比
        </span>
      ),
      content: (
        <OfferAnalysis
          offers={offers}
          indicators={indicators}
          analysisResult={analysisResult}
          onUpdateIndicatorWeight={updateIndicatorWeight}
          barChartData={barChartData}
          radarChartData={radarChartData}
          chartOptions={chartOptions}
        />
      ),
    },
    {
      key: "suggestion",
      tab: (
        <span className="flex items-center gap-2">
          <BulbOutlined /> 决策建议
        </span>
      ),
      content: (
        <DecisionSuggestion
          analysisResult={analysisResult}
          userPriority={userPriority}
          setUserPriority={setUserPriority}
          offers={offers}
        />
      ),
    },
    {
      key: "negotiation",
      tab: (
        <span className="flex items-center gap-2">
          <SmileOutlined /> 谈判辅助
        </span>
      ),
      content: (
        <NegotiationAssistant
          offers={offers}
          negotiationTarget={negotiationTarget}
          setNegotiationTarget={setNegotiationTarget}
          negotiationScript={negotiationScript}
          industrySalaryDB={industrySalaryDB}
          onGenerateScript={generateNegotiationScript}
        />
      ),
    },
  ];

  return <SectionLayout title="Offer 对比分析助手" tabs={tabs} />;
};

export default OfferCompareContent;
