import {useState, useEffect} from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Chart
} from 'chart.js';
import Button from '@/components/Button';

// 注册Chart.js组件
ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale, PointElement, LineElement);

const InterviewPreparationSection = () => {
  const [activeQuestion, setActiveQuestion] = useState(2); // 默认第三个问题为激活状态

  // 初始化图表
  useEffect(() => {
    const assessmentCtx = document.getElementById('assessmentChart');
    if (assessmentCtx) {
      const chart = new Chart(assessmentCtx, {
        type: 'radar',
        data: {
          labels: ['表达逻辑', '内容匹配度', '语言流畅度', '专业深度', '应变能力'],
          datasets: [{
            label: '你的表现',
            data: [85, 90, 75, 88, 70],
            backgroundColor: 'rgba(10, 36, 99, 0.2)',
            borderColor: 'rgba(10, 36, 99, 1)',
            pointBackgroundColor: 'rgba(10, 36, 99, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(10, 36, 99, 1)',
            borderWidth: 2
          }]
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
      return () => {
        chart.destroy();
      };
    }
  }, []);

  const questions = [
    "请做一下自我介绍",
    "你为什么想加入我们公司？",
    "你最大的优势和劣势是什么？",
    "你期望的薪资是多少？",
    "为什么要离开上一家公司？",
    "你未来3-5年的职业规划是什么？"
  ];

  return (
    <section id="interview" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 fade-in">
          <i className="fa fa-microphone-alt text-5xl text-primary mb-6"></i>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-primary mb-4">AI模拟面试：自信迎接每一个挑战</h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto">告别面试紧张！AI智能预测高频面试问题，提供个性化答题框架，并通过模拟面试场景，助你从容应对，展现最佳状态，轻松斩获心仪Offer！</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧问题清单 */}
          <div className="bg-white rounded-2xl shadow-card overflow-hidden fade-in" style={{animationDelay: '0.2s'}}>
            <div className="border-b border-gray-100">
              <div className="flex">
                <button className="px-6 py-4 font-medium text-primary border-b-2 border-primary">基础问题</button>
                <button className="px-6 py-4 font-medium text-gray-500 hover:text-gray-700">专业问题</button>
                <button className="px-6 py-4 font-medium text-gray-500 hover:text-gray-700">场景问题</button>
              </div>
            </div>

            <div className="p-6 max-h-[600px] overflow-y-auto">
              <h3 className="text-lg font-semibold mb-4">高频面试问题</h3>

              <div className="space-y-3">
                {questions.map((question, index) => (
                  <button
                    key={index}
                    className={`w-full text-left p-3 rounded-lg transition-colors flex justify-between items-center question-btn ${
                      index === activeQuestion
                        ? 'border border-primary bg-primary/5'
                        : 'border border-gray-200 hover:border-primary hover:bg-primary/5'
                    }`}
                    onClick={() => setActiveQuestion(index)}
                  >
                    <span>{question}</span>
                    <i
                      className={`fa ${index === activeQuestion ? 'fa-chevron-up text-primary' : 'fa-chevron-down text-gray-400'}`}></i>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 中间答题框架 */}
          <div className="bg-white rounded-2xl shadow-card overflow-hidden fade-in" style={{animationDelay: '0.3s'}}>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">答题框架建议</h3>

              <div className="mb-6">
                <h4 className="font-medium text-primary mb-2">{questions[activeQuestion]}</h4>

                {activeQuestion === 2 && ( // 针对"你最大的优势和劣势是什么？"的回答框架
                  <>
                    <div className="bg-secondary p-4 rounded-lg mb-4">
                      <h5 className="font-medium mb-2 text-sm">使用STAR法则回答：</h5>
                      <ul className="space-y-2 text-sm">
                        <li className="flex">
                          <span className="font-medium w-16">情境(S)：</span>
                          <span>在之前的项目中，我们需要重构一个性能不佳的后端系统</span>
                        </li>
                        <li className="flex">
                          <span className="font-medium w-16">任务(T)：</span>
                          <span>我负责分析性能瓶颈并提出优化方案</span>
                        </li>
                        <li className="flex">
                          <span className="font-medium w-16">行动(A)：</span>
                          <span>利用我的Python性能分析经验，通过代码审查和性能测试，找出了3个主要瓶颈并实施了优化</span>
                        </li>
                        <li className="flex">
                          <span className="font-medium w-16">结果(R)：</span>
                          <span>系统响应时间减少了60%，服务器负载降低了40%</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-medium mb-2 text-sm">劣势回答建议：</h5>
                      <p
                        className="text-sm text-gray-600 mb-2">选择一个可以改进的技能，而非核心能力，并展示正在积极改进</p>
                      <p
                        className="text-sm text-gray-600">例如："我的前端知识相对薄弱，但我正在学习Vue框架，已经完成了2个小型项目的实践"</p>
                    </div>
                  </>
                )}
              </div>

              <div>
                <h4 className="font-medium mb-2">你的回答</h4>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-success focus:border-success h-32 resize-none text-sm"
                  placeholder="输入你的回答，AI将帮你优化..."
                  defaultValue=""
                ></textarea>

                <div className="mt-4 flex space-x-3">
                  <Button className="flex-1 py-2 text-sm">
                    AI优化
                  </Button>
                  <Button variant="secondary" className="flex-1 py-2 text-sm">
                    保存答案
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧模拟面试与评估 */}
          <div className="bg-white rounded-2xl shadow-card overflow-hidden fade-in" style={{animationDelay: '0.4s'}}>
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-lg font-semibold mb-4">模拟面试</h3>

              <Button shine className="w-full py-4">
                <i className="fa fa-microphone mr-2"></i> 开始模拟面试
              </Button>

              <div className="mt-4 flex justify-center space-x-4">
                <button className="p-2 text-gray-500 hover:text-primary transition-colors">
                  <i className="fa fa-comment text-xl"></i>
                  <span className="block text-xs mt-1">文字模式</span>
                </button>
                <button className="p-2 text-primary transition-colors">
                  <i className="fa fa-microphone text-xl"></i>
                  <span className="block text-xs mt-1">语音模式</span>
                </button>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">历史面试评估</h3>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium">Python开发工程师面试</h4>
                  <span className="text-sm text-gray-500">2023-05-12</span>
                </div>

                <div className="h-48">
                  <canvas id="assessmentChart"></canvas>
                </div>

                <div className="mt-4 text-sm">
                  <p className="font-medium mb-1">综合评价：</p>
                  <p
                    className="text-gray-600">表达清晰，专业知识掌握扎实，但对项目细节描述不够深入，建议增加具体数据支撑。</p>
                </div>
              </div>

              <Button variant="outline" className="w-full py-2.5">
                查看完整报告
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewPreparationSection;