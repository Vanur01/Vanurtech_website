import React, { useState, useEffect } from 'react';

export default function AboutStatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    years: 0,
    results: 0,
    projects: 0,
    hours: 0
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counters
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounts({
        years: Math.floor(5 * progress),
        results: Math.floor(99 * progress),
        projects: Math.floor(200 * progress),
        hours: Math.floor(50 * progress)
      });
      
      if (step >= steps) {
        clearInterval(timer);
        setCounts({
          years: 5,
          results: 99,
          projects: 317,
          hours: 50
        });
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { value: `${counts.years}+`, label: 'Years of\nexperience' },
    { value: `${counts.results}%`, label: 'Results\nGuaranteed' },
    { value: `${counts.projects}+`, label: 'Successful\nProjects' },
    { value: `${counts.hours}K`, label: 'Hours of\nSupport' }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8" style={{ backgroundColor: '#0A0012' }}>
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 sm:gap-20 lg:gap-15">
          {/* Left Side - Stats and Images */}
          <div className="space-y-6 sm:space-y-8 md:space-y-30">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-left"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: `all 0.8s ease-out ${index * 0.1}s`
                  }}
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm md:text-base whitespace-pre-line leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Image */}
            <div 
              className="rounded-2xl sm:rounded-3xl overflow-hidden"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease-out 0.6s'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                alt="Team workspace"
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover grayscale"
              />
            </div>
          </div>

          {/* Right Side - Image and Text */}
          <div className="space-y-6 sm:space-y-8 md:space-y-30">
            {/* Top Image */}
            <div 
              className="rounded-2xl sm:rounded-3xl overflow-hidden"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease-out 0.4s'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop"
                alt="Working on laptop"
                className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover grayscale"
              />
            </div>

            {/* Mission Text */}
            <div 
              className="space-y-4 sm:space-y-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease-out 0.8s'
              }}
            >
              <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
                Welcome to our firm that specializes in Creative Advertisement, Digital Marketing, Website Development. We develop modern, easy apps that optimize processes and boost productivity. Our mission is to create solutions that are ready for the future and support the development of both individuals and enterprises in the world of digital technology. Utilizing modern technologies and a customer-oriented technique, we create applications that simplify and enhance life.
              </p>

              <div className="pt-3 sm:pt-4">
                <div className="text-white font-semibold text-base sm:text-lg">
                  Software Development Solutions
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">
                   Vanurtech Media Pvt. Ltd
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}