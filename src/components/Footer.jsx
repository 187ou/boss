const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-lg">
                <i className="fa fa-briefcase text-primary text-2xl"></i>
              </div>
              <span className="text-2xl font-extrabold tracking-wide">Boss求职助手</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">AI驱动的智能求职平台，让求职更高效、更精准</p>
          </div>

          <div>
            <h4 className="text-xl font-extrabold mb-4 text-white">功能</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#match"
                     className="hover:text-accent transition-colors duration-300 ease-in-out">岗位匹配分析</a></li>
              <li><a href="#message"
                     className="hover:text-accent transition-colors duration-300 ease-in-out">话术生成</a></li>
              <li><a href="#resume"
                     className="hover:text-accent transition-colors duration-300 ease-in-out">简历优化</a></li>
              <li><a href="#interview"
                     className="hover:text-accent transition-colors duration-300 ease-in-out">面试准备</a></li>
              <li><a href="#offer"
                     className="hover:text-accent transition-colors duration-300 ease-in-out">Offer对比</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-extrabold mb-4 text-white">资源</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-accent transition-colors duration-300 ease-in-out">求职指南</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300 ease-in-out">行业薪资报告</a>
              </li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300 ease-in-out">简历模板</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300 ease-in-out">面试技巧</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-extrabold mb-4 text-white">联系我们</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center"><i
                className="fa fa-envelope mr-3 text-lg text-accent"></i> contact@bossjob.com
              </li>
              <li className="flex items-center"><i className="fa fa-phone mr-3 text-lg text-accent"></i> 400-123-4567
              </li>
            </ul>

            <div className="mt-6 flex space-x-4">
              <a href="#"
                 className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300 ease-in-out transform hover:scale-110">
                <i className="fa-brands fa-weixin text-lg"></i>
              </a>
              <a href="#"
                 className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300 ease-in-out transform hover:scale-110">
                <i className="fa-brands fa-twitter text-lg"></i>
              </a>
              <a href="#"
                 className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300 ease-in-out transform hover:scale-110">
                <i className="fa-brands fa-facebook text-lg"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm text-gray-400">
          <p className="tracking-wide">&copy; {new Date().getFullYear()} Boss求职助手. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;