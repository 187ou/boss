import {useState, useEffect} from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Chart
} from 'chart.js';
import Button from '@/components/Button';

// 注册Chart.js组件
ChartJS.register(
  ArcElement, Tooltip, Legend,
  RadialLinearScale, PointElement, LineElement,
  CategoryScale, LinearScale, BarElement
);

const OfferComparisonSection = () => {
  const [weights, setWeights] = useState({
    salary: 30,
    prospects: 25,
    intensity: 15,
    benefits: 15,
    commute: 15
  });

  const handleWeightChange = (key, value) => {
    setWeights({...weights, [key]: parseInt(value)});
  };

  // 初始化图表
  useEffect(() => {
    const charts = [];

    // Offer对比雷达图
    const radarCtx = document.getElementById('offerRadarChart');
    if (radarCtx) {
      const radarChart = new Chart(radarCtx, {
        type: 'radar',
        data: {
          labels: ['薪资竞争力', '发展前景', '工作强度', '福利完善度', '通勤成本'],
          datasets: [
            {
              label: '公司A',
              data: [90, 80, 70, 85, 75],
              backgroundColor: 'rgba(10, 36, 99, 0.2)',
              borderColor: 'rgba(10, 36, 99, 1)',
              pointBackgroundColor: 'rgba(10, 36, 99, 1)',
              borderWidth: 2
            },
            {
              label: '公司B',
              data: [75, 90, 85, 80, 85],
              backgroundColor: 'rgba(62, 146, 204, 0.2)',
              borderColor: 'rgba(62, 146, 204, 1)',
              pointBackgroundColor: 'rgba(62, 146, 204, 1)',
              borderWidth: 2
            }
          ]
        },
        options: {
          scales: {
            r: {
              angleLines: {display: false},
              suggestedMin: 50,
              suggestedMax: 100
            }
          },
          plugins: {legend: {display: false}}
        }
      });
      charts.push(radarChart);
    }

    // 薪资对比柱状图
    const barCtx = document.getElementById('salaryBarChart');
    if (barCtx) {
      const barChart = new Chart(barCtx, {
        type: 'bar',
        data: {
          labels: ['基本工资', '绩效奖金', '年终奖', '福利补贴'],
          datasets: [
            {
              label: '公司A',
              data: [250000, 50000, 30000, 20000],
              backgroundColor: 'rgba(10, 36, 99, 0.7)',
            },
            {
              label: '公司B',
              data: [220000, 40000, 50000, 15000],
              backgroundColor: 'rgba(62, 146, 204, 0.7)',
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {display: false}
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function (value) {
                  return value >= 1000 ? (value / 1000) + 'k' : value;
                }
              }
            }
          }
        }
      });
      charts.push(barChart);
    }

    return () => {
      charts.forEach(chart => chart.destroy());
    };
  }, []);

  return (
    <section id="offer" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 fade-in">
          <i className="fa fa-balance-scale text-5xl text-primary mb-6"></i>
          <h2
            className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-primary mb-4">AI智能Offer比对：助你做出最佳职业选择</h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto">面对多个Offer不知如何抉择？AI智能分析薪资福利、发展前景、工作强度等多维度数据，结合你的个性化需求，提供专业决策建议，助你选择最适合的职业发展路径！</p>
        </div>

        {/* Offer录入区 */}
        <div className="mb-8 fade-in" style={{animationDelay: '0.2s'}}>
          <Button className="px-6 py-3">
            <i className="fa fa-plus mr-2"></i> 添加Offer信息
          </Button>
        </div>

        {/* Offer对比区 */}
        <div className="bg-white rounded-2xl shadow-card overflow-hidden fade-in" style={{animationDelay: '0.3s'}}>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* 左侧权重调整 */}
            <div className="p-6 border-b lg:border-b-0 lg:border-r border-gray-100">
              <h3 className="text-lg font-semibold mb-6">评估指标权重</h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium">薪资竞争力</label>
                    <span className="text-sm text-gray-500">{weights.salary}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={weights.salary}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    onChange={(e) => handleWeightChange('salary', e.target.value)}
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium">发展前景</label>
                    <span className="text-sm text-gray-500">{weights.prospects}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={weights.prospects}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    onChange={(e) => handleWeightChange('prospects', e.target.value)}
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium">工作强度</label>
                    <span className="text-sm text-gray-500">{weights.intensity}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={weights.intensity}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    onChange={(e) => handleWeightChange('intensity', e.target.value)}
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium">福利完善度</label>
                    <span className="text-sm text-gray-500">{weights.benefits}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={weights.benefits}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    onChange={(e) => handleWeightChange('benefits', e.target.value)}
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium">通勤成本</label>
                    <span className="text-sm text-gray-500">{weights.commute}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={weights.commute}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    onChange={(e) => handleWeightChange('commute', e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* 中间可视化对比 */}
            <div className="p-6 border-b lg:border-b-0 lg:border-r border-gray-100">
              <h3 className="text-lg font-semibold mb-6">多维度对比</h3>

              <div className="mb-8">
                <div className="flex justify-center space-x-6 mb-4">
                  <div className="text-center">
                    <div className="w-3 h-3 rounded-full bg-primary mx-auto mb-1"></div>
                    <span className="text-sm">公司A</span>
                  </div>
                  <div className="text-center">
                    <div className="w-3 h-3 rounded-full bg-accent mx-auto mb-1"></div>
                    <span className="text-sm">公司B</span>
                  </div>
                </div>

                <div className="h-64">
                  <canvas id="offerRadarChart"></canvas>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-4">薪资结构对比</h4>
                <div className="h-48">
                  <canvas id="salaryBarChart"></canvas>
                </div>
              </div>
            </div>

            {/* 右侧决策建议 */}
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-6">决策建议</h3>

              <div className="mb-6">
                <h4 className="font-medium mb-3">核心诉求</h4>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    className="border-2 border-primary bg-primary/5 rounded-lg p-3 text-center font-medium text-sm">
                    薪资优先
                  </button>
                  <button
                    className="border border-gray-200 hover:border-primary/50 rounded-lg p-3 text-center font-medium text-sm transition-colors">
                    发展优先
                  </button>
                  <button
                    className="border border-gray-200 hover:border-primary/50 rounded-lg p-3 text-center font-medium text-sm transition-colors">
                    工作生活平衡
                  </button>
                  <button
                    className="border border-gray-200 hover:border-primary/50 rounded-lg p-3 text-center font-medium text-sm transition-colors">
                    稳定性优先
                  </button>
                </div>
              </div>

              <div className="bg-secondary p-5 rounded-lg mb-6">
                <h4 className="font-medium mb-3 flex items-center">
                  <i className="fa fa-lightbulb-o text-primary mr-2"></i> 综合建议
                </h4>
                <p className="text-sm text-gray-600 mb-3">基于你的薪资优先诉求，公司A的offer综合得分更高（85分 vs
                  78分），年薪比公司B高出约15%。</p>
                <p
                  className="text-sm text-gray-600">但需注意：公司A的年终奖发放比例较低（30%），存在一定不确定性。建议在入职前与HR确认年终奖发放条件。</p>
              </div>

              <div>
                <h4 className="font-medium mb-3">薪资谈判辅助</h4>
                <Button variant="outline" className="w-full py-2.5 text-sm">
                  生成谈判话术
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferComparisonSection;