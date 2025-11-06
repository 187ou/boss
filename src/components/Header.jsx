import {useState, useEffect} from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollShadow, setScrollShadow] = useState(false);

  // 滚动时导航栏阴影效果
  useEffect(() => {
    const handleScroll = () => setScrollShadow(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-50 transition-all duration-300 ${scrollShadow ? 'shadow-xl' : 'shadow-md'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-3 group">
              <div
                className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-[-12deg] transition-transform duration-300">
                <i className="fa fa-briefcase text-white text-2xl"></i>
              </div>
              <span className="text-2xl font-bold text-primary transition-colors">Boss求职助手</span>
            </a>
          </div>

          {/* 桌面导航 */}
          <nav className="hidden md:flex items-center space-x-1">
            <a href="#match"
               className="text-gray-600 hover:text-primary font-medium transition-colors px-4 py-2 rounded-lg hover:bg-primary/10">岗位匹配分析</a>
            <a href="#message"
               className="text-gray-600 hover:text-primary font-medium transition-colors px-4 py-2 rounded-lg hover:bg-primary/10">话术生成</a>
            <a href="#resume"
               className="text-gray-600 hover:text-primary font-medium transition-colors px-4 py-2 rounded-lg hover:bg-primary/10">简历优化</a>
            <a href="#interview"
               className="text-gray-600 hover:text-primary font-medium transition-colors px-4 py-2 rounded-lg hover:bg-primary/10">面试准备</a>
            <a href="#offer"
               className="text-gray-600 hover:text-primary font-medium transition-colors px-4 py-2 rounded-lg hover:bg-primary/10">Offer对比</a>
          </nav>

          {/* 移动端菜单按钮 */}
          <button
            id="menu-toggle"
            className="md:hidden text-gray-600 hover:text-primary focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className="fa fa-bars text-2xl"></i>
          </button>
        </div>
      </div>

      {/* 移动端导航菜单 */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white/95 backdrop-blur-sm border-t animate-fadeIn">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <a href="#match"
               className="block py-3 text-gray-700 hover:text-primary hover:bg-primary/10 rounded-md text-center font-medium"
               onClick={() => setMobileMenuOpen(false)}>岗位匹配分析</a>
            <a href="#message"
               className="block py-3 text-gray-700 hover:text-primary hover:bg-primary/10 rounded-md text-center font-medium"
               onClick={() => setMobileMenuOpen(false)}>话术生成</a>
            <a href="#resume"
               className="block py-3 text-gray-700 hover:text-primary hover:bg-primary/10 rounded-md text-center font-medium"
               onClick={() => setMobileMenuOpen(false)}>简历优化</a>
            <a href="#interview"
               className="block py-3 text-gray-700 hover:text-primary hover:bg-primary/10 rounded-md text-center font-medium"
               onClick={() => setMobileMenuOpen(false)}>面试准备</a>
            <a href="#offer"
               className="block py-3 text-gray-700 hover:text-primary hover:bg-primary/10 rounded-md text-center font-medium"
               onClick={() => setMobileMenuOpen(false)}>Offer对比</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;