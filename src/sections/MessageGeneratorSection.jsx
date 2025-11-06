import {Doughnut} from 'react-chartjs-2';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import Button from '@/components/Button';

// 注册Chart.js组件
ChartJS.register(ArcElement, Tooltip, Legend);

const MessageGeneratorSection = () => {
  const data = {
    datasets: [
      {
        data: [78, 22],
        backgroundColor: ['#3DD598', '#F5F7FA'],
        borderWidth: 0,
        cutout: '75%'
      }
    ]
  };

  const options = {
    plugins: {
      legend: {display: false},
      tooltip: {enabled: false}
    }
  };

  return (
    <section id="message" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 fade-in">
          <i className="fa fa-comments text-5xl text-primary mb-6"></i>
          <h2
            className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-primary mb-4">AI智能话术：定制你的专属高情商开场白</h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto">告别千篇一律的自我介绍，AI根据你的独特优势和目标岗位，量身定制高情商开场白，助你轻松赢得HR青睐，大幅提升面试邀约率！</p>
        </div>

        <div className="bg-white rounded-2xl shadow-card overflow-hidden fade-in" style={{animationDelay: '0.2s'}}>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* 左侧匹配点 */}
            <div className="p-6 border-b md:border-b-0 md:border-r border-gray-100">
              <h3 className="text-lg font-semibold mb-4">核心匹配点</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fa fa-check-circle text-success mt-1 mr-2"></i>
                  <span>3年Python开发经验，熟练掌握Django框架</span>
                </li>
                <li className="flex items-start">
                  <i className="fa fa-check-circle text-success mt-1 mr-2"></i>
                  <span>具备大型项目架构设计经验，符合岗位要求</span>
                </li>
                <li className="flex items-start">
                  <i className="fa fa-check-circle text-success mt-1 mr-2"></i>
                  <span>熟悉数据分析流程，与岗位需求高度匹配</span>
                </li>
                <li className="flex items-center text-primary text-sm cursor-pointer">
                  <span>+2 个匹配点</span>
                </li>
              </ul>

              <div className="mt-8">
                <h4 className="font-medium mb-3">当前岗位</h4>
                <div className="bg-secondary p-4 rounded-lg">
                  <h5 className="font-semibold">高级Python开发工程师</h5>
                  <p className="text-sm text-gray-500 mt-1">科技有限公司</p>
                </div>
              </div>
            </div>

            {/* 中间生成面板 */}
            <div className="p-6 border-b md:border-b-0 md:border-r border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">生成话术</h3>
                <div className="flex space-x-2">
                  <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white"
                          title="专业型">
                    <i className="fa fa-briefcase"></i>
                  </button>
                  <button className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white"
                          title="亲和型">
                    <i className="fa fa-heart"></i>
                  </button>
                  <button className="w-8 h-8 rounded-full bg-neutral flex items-center justify-center text-white"
                          title="高效型">
                    <i className="fa fa-bolt"></i>
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">行业选择</label>
                <div className="relative">
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-success focus:border-success appearance-none">
                    <option>互联网/IT</option>
                    <option>金融</option>
                    <option>教育</option>
                    <option>医疗健康</option>
                    <option>其他行业</option>
                  </select>
                  <i
                    className="fa fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                </div>
              </div>

              <div className="mb-4">
                <textarea
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-success focus:border-success h-40 resize-none"
                  placeholder="生成的话术将显示在这里..."
                  defaultValue="您好！我对贵公司发布的 [职位名称] 岗位非常感兴趣。我的 [核心技能/经验] 与贵公司在 [项目/领域] 的发展方向高度契合。期待能有机会与您深入交流，共同探索合作可能！"
                ></textarea>
              </div>

              <div className="flex space-x-3">
                <Button className="flex-1 py-2.5">
                  重新生成
                </Button>
                <Button variant="secondary" className="flex-1 py-2.5">
                  复制话术
                </Button>
              </div>
            </div>

            {/* 右侧反馈区 */}
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">效果反馈</h3>

              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">预估回复率</span>
                  <span className="text-sm font-semibold text-success">78%</span>
                </div>
                <div className="relative h-32 flex items-center justify-center">
                  <Doughnut data={data} options={options}/>
                  <div className="absolute text-center">
                    <span className="block text-2xl font-bold text-success">78%</span>
                    <span className="text-xs text-gray-500">回复率</span>
                  </div>
                </div>
              </div>

              <div className="bg-secondary p-4 rounded-lg mb-4">
                <h4 className="font-medium text-sm mb-2">AI优化建议</h4>
                <p className="text-sm text-gray-600">增加1-2个具体项目成果数据，可提升回复率至85%以上</p>
              </div>

              <div>
                <h4 className="font-medium text-sm mb-2">历史使用记录</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span>高级后端开发工程师</span>
                    <span className="text-success">回复率 82%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>数据开发工程师</span>
                    <span className="text-neutral">回复率 65%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageGeneratorSection;