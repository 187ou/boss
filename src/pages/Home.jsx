import React, {useEffect} from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/sections/HeroSection';
import JobMatchSection from '@/sections/JobMatchSection';
import MessageGeneratorSection from '@/sections/MessageGeneratorSection';
import ResumeOptimizationSection from '@/sections/ResumeOptimizationSection';
import InterviewPreparationSection from '@/sections/InterviewPreparationSection';
import OfferComparisonSection from '@/sections/OfferComparisonSection';

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      {root: null, threshold: 0.1}
    );

    document.querySelectorAll('section > div > div:not(.fade-in)').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header/>
      <HeroSection/>
      <JobMatchSection/>
      <MessageGeneratorSection/>
      <ResumeOptimizationSection/>
      <InterviewPreparationSection/>
      <OfferComparisonSection/>
      <Footer/>
    </>
  );
}

export default Home;