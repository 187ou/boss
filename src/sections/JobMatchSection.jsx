import {useState} from 'react';
import Button from '@/components/Button';

const JobMatchSection = () => {
  const [resumeUploaded, setResumeUploaded] = useState(false);

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setResumeUploaded(true);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('border-primary');
  };

  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove('border-primary');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('border-primary');
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setResumeUploaded(true);
    }
  };

  return (
    <section id="match" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 fade-in">
          <i className="fa fa-magic text-5xl text-primary mb-6"></i>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-primary mb-4">AI智能匹配，开启职业新篇章</h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto">告别盲投，上传简历，让AI为您精准解析技能，智能匹配海量高薪职位，助您轻松锁定梦想Offer！</p>
        </div>

        {/* 简历上传区 */}
        <div
          className="bg-secondary rounded-2xl p-8 mb-12 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 fade-in"
          style={{animationDelay: '0.2s'}}>
          <h3 className="text-xl font-semibold mb-6">智能简历解析，精准洞察你的价值</h3>
          <div
            className="border-2 border-dashed border-primary/30 rounded-xl p-12 text-center hover:border-primary transition-colors cursor-pointer"
            onClick={() => document.getElementById('resume-upload').click()}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <i className="fa fa-file-upload text-5xl text-primary/70 mb-4"></i>
            <p className="text-lg mb-2">拖拽简历文件至此，或点击上传</p>
            <p className="text-sm text-gray-500">支持 PDF、Word、图片等主流格式，AI将自动提取关键信息</p>
            <input
              type="file"
              className="hidden"
              id="resume-upload"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              onChange={handleFileUpload}
            />
          </div>

          {/* 解析结果预览 */}
          {resumeUploaded && (
            <div id="resume-preview" className="mt-8">
              <div className="mb-4">
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                  <div className="h-full bg-gradient-to-r from-primary to-success progress-animate"
                       style={{'--progress-width': '100%'}}></div>
                </div>
                <p className="text-center text-sm text-gray-500 mt-2">简历解析中... 100% 完成（效果展示）</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-primary mb-2 flex items-center">
                    <i className="fa fa-code mr-2"></i>核心技能
                  </h4>
                  <ul className="space-y-1">
                    <li className="flex items-center text-sm"><i className="fa fa-check text-success mr-2"></i>Python开发
                    </li>
                    <li className="flex items-center text-sm"><i className="fa fa-check text-success mr-2"></i>Django框架
                    </li>
                    <li className="flex items-center text-sm"><i className="fa fa-check text-success mr-2"></i>数据分析
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-primary mb-2 flex items-center">
                    <i className="fa fa-briefcase mr-2"></i>工作经验
                  </h4>
                  <ul className="space-y-1">
                    <li className="flex items-center text-sm"><i className="fa fa-check text-success mr-2"></i>3年后端开发
                    </li>
                    <li className="flex items-center text-sm"><i className="fa fa-check text-success mr-2"></i>2个大型项目主导
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-primary mb-2 flex items-center">
                    <i className="fa fa-graduation-cap mr-2"></i>教育背景
                  </h4>
                  <ul className="space-y-1">
                    <li className="flex items-center text-sm"><i className="fa fa-check text-success mr-2"></i>计算机科学学士
                    </li>
                    <li className="flex items-center text-sm"><i className="fa fa-check text-success mr-2"></i>985院校
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-primary mb-2 flex items-center">
                    <i className="fa fa-lightbulb text-lg mr-2"></i>核心技能
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-center text-sm"><i className="fa fa-check-circle text-success mr-2"></i>Python
                      (熟练掌握，3年经验)
                    </li>
                    <li className="flex items-center text-sm"><i className="fa fa-check-circle text-success mr-2"></i>Django/Flask
                      (项目经验丰富)
                    </li>
                    <li className="flex items-center text-sm"><i className="fa fa-check-circle text-success mr-2"></i>数据分析与可视化
                      (Pandas, Matplotlib)
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-primary mb-2 flex items-center">
                    <i className="fa fa-briefcase text-lg mr-2"></i>工作经验
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-center text-sm"><i className="fa fa-check-circle text-success mr-2"></i>3年大型互联网公司后端开发经验
                    </li>
                    <li className="flex items-center text-sm"><i className="fa fa-check-circle text-success mr-2"></i>主导2个千万级用户项目
                    </li>
                    <li className="flex items-center text-sm"><i className="fa fa-check-circle text-success mr-2"></i>熟悉敏捷开发流程
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-primary mb-2 flex items-center">
                    <i className="fa fa-graduation-cap text-lg mr-2"></i>教育背景
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-center text-sm"><i className="fa fa-check-circle text-success mr-2"></i>985/211院校
                      计算机科学硕士
                    </li>
                    <li className="flex items-center text-sm"><i className="fa fa-check-circle text-success mr-2"></i>GPA
                      3.8/4.0，多次获得奖学金
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 搜索筛选区 */}
        <div className="mb-12 fade-in" style={{animationDelay: '0.3s'}}>
          <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <i className="fa fa-filter text-primary mr-2"></i>智能筛选，快速定位理想职位
            </h3>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">职位关键词</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="搜索职位、公司、技能或福利..."
                    className="w-full px-4 py-3 border-b border-gray-300 focus:border-primary focus:outline-none transition-colors"
                  />
                  <i className="fa fa-search absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 items-end">
                <div className="relative">
                  <button
                    className="px-4 py-3 bg-primary text-white hover:bg-primary-dark rounded-lg text-sm font-medium transition-colors flex items-center shadow-md">
                    薪资范围 <i className="fa fa-chevron-down ml-1"></i>
                  </button>
                </div>

                <div className="relative">
                  <button
                    className="px-4 py-3 bg-primary text-white hover:bg-primary-dark rounded-lg text-sm font-medium transition-colors flex items-center shadow-md">
                    工作地点 <i className="fa fa-chevron-down ml-1"></i>
                  </button>
                </div>

                <div className="relative">
                  <button
                    className="px-4 py-3 bg-primary text-white hover:bg-primary-dark rounded-lg text-sm font-medium transition-colors flex items-center shadow-md">
                    经验要求 <i className="fa fa-chevron-down ml-1"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* 筛选标签 */}
            <div className="flex flex-wrap gap-2">
              <span
                className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                Python开发 <button className="ml-1 text-primary/70 hover:text-primary"><i
                className="fa fa-times-circle"></i></button>
              </span>
              <span
                className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                薪资 15k-30k <button className="ml-1 text-primary/70 hover:text-primary"><i
                className="fa fa-times-circle"></i></button>
              </span>
              <span
                className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                北京 <button className="ml-1 text-primary/70 hover:text-primary"><i className="fa fa-times-circle"></i></button>
              </span>
            </div>
          </div>
        </div>

        {/* 岗位结果区 */}
        <div className="fade-in" style={{animationDelay: '0.4s'}}>
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <i className="fa fa-briefcase text-primary mr-2"></i>为您优选，高匹配度职位推荐 (12)
          </h3>

          <div className="space-y-6">
            {/* 岗位卡片1 */}
            <div
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div
                      className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fa fa-building text-primary text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">高级Python开发工程师</h4>
                      <p className="text-gray-500 text-sm">科技有限公司 · 成立于2015年 · 500-1000人</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end flex-shrink-0">
                    <div className="flex items-center mb-1">
                      <span className="text-3xl font-bold text-primary mr-2">92%</span>
                      <span className="text-sm text-gray-500">匹配度</span>
                    </div>
                    <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-success" style={{width: '92%'}}></div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <i className="fa fa-check-circle mr-1"></i>核心技能完全匹配
                  </span>
                  <span
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    <i className="fa fa-chart-line mr-1"></i>晋升路径清晰
                  </span>
                  <span
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    <i className="fa fa-fire mr-1"></i>加班频率较高
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-primary font-semibold text-lg">25k-35k · 13薪</div>
                  <button className="text-primary hover:text-primary/80 font-medium flex items-center group">
                    查看详情 <i className="fa fa-angle-right ml-1 group-hover:translate-x-1 transition-transform"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* 岗位卡片2 */}
            <div
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div
                      className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fa fa-building text-primary text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">全栈开发工程师</h4>
                      <p className="text-gray-500 text-sm">互联网科技公司 · 成立于2018年 · 100-500人</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end flex-shrink-0">
                    <div className="flex items-center mb-1">
                      <span className="text-3xl font-bold text-primary mr-2">85%</span>
                      <span className="text-sm text-gray-500">匹配度</span>
                    </div>
                    <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-success" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <i className="fa fa-check-circle mr-1"></i>80%技能匹配
                  </span>
                  <span
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    <i className="fa fa-clock mr-1"></i>弹性工作
                  </span>
                  <span
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                    <i className="fa fa-exclamation-triangle mr-1"></i>需掌握Vue框架
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-primary font-semibold text-lg">20k-30k · 14薪</div>
                  <button className="text-primary hover:text-primary/80 font-medium flex items-center group">
                    查看详情 <i className="fa fa-angle-right ml-1 group-hover:translate-x-1 transition-transform"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* 岗位卡片3 */}
            <div
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div
                      className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fa fa-building text-primary text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">数据分析工程师</h4>
                      <p className="text-gray-500 text-sm">数据科技有限公司 · 成立于2016年 · 200-500人</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end flex-shrink-0">
                    <div className="flex items-center mb-1">
                      <span className="text-3xl font-bold text-primary mr-2">78%</span>
                      <span className="text-sm text-gray-500">匹配度</span>
                    </div>
                    <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-success" style={{width: '78%'}}></div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <i className="fa fa-check-circle mr-1"></i>经验要求匹配
                  </span>
                  <span
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    <i className="fa fa-money-bill-alt mr-1"></i>薪资低于期望15%
                  </span>
                  <span
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                    <i className="fa fa-database mr-1"></i>需加强SQL技能
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-primary font-semibold text-lg">18k-25k · 13薪</div>
                  <button className="text-primary hover:text-primary/80 font-medium flex items-center group">
                    查看详情 <i className="fa fa-angle-right ml-1 group-hover:translate-x-1 transition-transform"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button variant="primary"
                    className="px-8 py-3 text-lg shadow-md hover:shadow-lg transition-all duration-300">
              加载更多岗位 <i className="fa fa-arrow-down ml-2"></i>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobMatchSection;