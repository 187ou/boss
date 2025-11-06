import ParticleBackground from '@/components/ParticleBackground';
import Button from '@/components/Button';

const HeroSection = () => {
  return (
    <section className="pt-20 md:pt-24 min-h-screen flex items-center relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-secondary/10 z-0"></div>
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 fade-in text-center md:text-left" style={{animationDelay: '0.2s'}}>
            <h1
              className="text-[clamp(3rem,6vw,5rem)] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 leading-tight mb-6">
              智能匹配
              <br/>
              你的理想工作
            </h1>
            <p className="text-[clamp(1.1rem,2.2vw,1.35rem)] text-gray-500 mb-10 max-w-xl mx-auto md:mx-0">
              五大AI助手，从简历优化到offer谈判，全程助力你的求职之路
            </p>
            <Button
              shine
              className="px-10 py-5 text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1.5"
              onClick={() => document.getElementById('match').scrollIntoView({behavior: 'smooth'})}
            >
              立即开始 <i className="fa fa-arrow-right ml-3"></i>
            </Button>
          </div>

          <div className="md:w-2/3 h-[450px] md:h-[550px] fade-in relative" style={{animationDelay: '0.4s'}}>
            <ParticleBackground/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;