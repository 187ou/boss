import Button from '@/components/Button';

const ResumeOptimizationSection = () => {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 fade-in">
          <i className="fa fa-file-alt text-5xl text-primary mb-6"></i>
          <h2
            className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-primary mb-4">AI智能简历优化：让你的履历闪耀职场</h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto">告别石沉大海的简历！AI智能分析你的简历与目标岗位，精准匹配关键词，深度挖掘亮点，助你打造一份脱颖而出的高分简历，大幅提升面试邀约率！</p>
        </div>

        {/* 行业选择器 */}
        <div className="mb-8 overflow-x-auto scrollbar-hide fade-in" style={{animationDelay: '0.2s'}}>
          <div className="flex space-x-2 pb-2 min-w-max">
            <button className="px-5 py-2.5 bg-primary text-white rounded-full text-sm font-medium">技术岗</button>
            <button
              className="px-5 py-2.5 bg-secondary hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium transition-colors">产品岗
            </button>
            <button
              className="px-5 py-2.5 bg-secondary hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium transition-colors">运营岗
            </button>
            <button
              className="px-5 py-2.5 bg-secondary hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium transition-colors">设计岗
            </button>
            <button
              className="px-5 py-2.5 bg-secondary hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium transition-colors">市场岗
            </button>
            <button
              className="px-5 py-2.5 bg-secondary hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium transition-colors">金融岗
            </button>
            <button
              className="px-5 py-2.5 bg-secondary hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium transition-colors">生物医药岗
            </button>
          </div>
        </div>

        {/* 简历对比区 */}
        <div className="bg-white rounded-2xl shadow-card overflow-hidden fade-in" style={{animationDelay: '0.3s'}}>
          <div className="border-b border-gray-100">
            <div className="flex">
              <button className="px-6 py-4 font-medium text-primary border-b-2 border-primary">原始简历</button>
              <button className="px-6 py-4 font-medium text-gray-500 hover:text-gray-700">优化后简历</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {/* 左侧原始简历 */}
            <div className="p-6 max-h-[800px] overflow-y-auto">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-1">张明</h3>
                <p className="text-gray-600">Python开发工程师 · 3年经验</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 pb-1 border-b border-gray-200">工作经验</h4>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <h5 className="font-medium">后端开发工程师</h5>
                    <span className="text-sm text-gray-500">2020.03 - 至今</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">某科技有限公司</p>
                  <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                    <li>负责公司核心系统的开发与维护</li>
                    <li>使用Python和Django框架进行后端开发</li>
                    <li>参与数据库设计与优化</li>
                    <li>负责用户增长相关功能开发</li>
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 pb-1 border-b border-gray-200">项目经验</h4>
                <div className="mb-4">
                  <h5 className="font-medium mb-1">电商平台后端系统</h5>
                  <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                    <li>负责订单模块开发</li>
                    <li>参与支付系统对接</li>
                    <li>优化系统性能</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3 pb-1 border-b border-gray-200">技能证书</h4>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                  <li>Python高级开发认证</li>
                  <li>计算机二级证书</li>
                </ul>
              </div>
            </div>

            {/* 右侧优化后简历 */}
            <div className="p-6 max-h-[800px] overflow-y-auto bg-secondary/50">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-1">张明</h3>
                <p className="text-gray-600">Python开发工程师 · 3年经验</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 pb-1 border-b border-gray-200">工作经验</h4>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <h5 className="font-medium">后端开发工程师</h5>
                    <span className="text-sm text-gray-500">2020.03 - 至今</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">某科技有限公司</p>
                  <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                    <li>负责公司日均10万+用户的核心系统开发与维护，系统稳定性提升99.9%</li>
                    <li className="relative group">
                      使用Python和Django框架进行后端开发，重构3个核心模块，接口响应速度提升40%
                    </li>
                    <li>主导数据库架构设计与优化，查询效率提升60%，降低服务器成本25%</li>
                    <li>通过活动运营相关功能开发，实现用户月增长20%，新增用户1万+</li>
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 pb-1 border-b border-gray-200">项目经验</h4>
                <div className="mb-4">
                  <h5 className="font-medium mb-1">电商平台后端系统</h5>
                  <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                    <li>独立负责订单模块开发，支持日均5000+订单处理，零故障运行</li>
                    <li>参与支付系统对接，集成3种支付方式，支付成功率提升至99.5%</li>
                    <li className="relative group">
                      优化系统性能，将页面加载时间从2.5秒减少到0.8秒，用户留存率提升15%
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3 pb-1 border-b border-gray-200">技能证书</h4>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                  <li>Python高级开发认证</li>
                  <li>计算机二级证书</li>
                  <li className="relative group text-success">
                    <i className="fa fa-plus-circle mr-1"></i>建议添加：SQL高级工程师认证
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h4 className="font-medium mb-1">简历版本管理</h4>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="font-semibold">技术岗优化版</span>
                  <span className="text-gray-500">全栈岗优化版</span>
                  <span className="text-gray-500">原始版</span>
                  <button className="text-primary">+ 新建版本</button>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button variant="outline" className="px-4 py-2">
                  忽略全部
                </Button>
                <Button className="px-4 py-2">
                  采纳全部建议
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeOptimizationSection;