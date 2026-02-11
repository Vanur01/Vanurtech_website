import React, { useState, useEffect } from 'react';

export default function OurBeginning() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="my-40 flex items-center justify-center p-4 md:p-8" style={{ backgroundColor: '#0A0012' }}>
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-12">
          {/* Large 2021 Text */}
          <div 
            className="relative"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
              transition: 'all 1s ease-out'
            }}
          >
            <div 
              className="text-[120px] sm:text-[120px] md:text-[160px] lg:text-[200px] font-bold leading-none select-none"
              style={{
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)',
                color: 'transparent',
                fontFamily: 'Arial, sans-serif'
              }}
            >
              2021
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <div 
              className="mb-4 md:mb-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s ease-out 0.2s'
              }}
            >
              <span className="text-gray-400 text-sm md:text-lg">Our Beginning</span>
            </div>

            <div className="space-y-1 md:space-y-2">
              <h2 
                className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.8s ease-out 0.4s'
                }}
              >
                Started small.
              </h2>
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.8s ease-out 0.6s'
                }}
              >
                Fueled by curiosity.
              </h2>
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.8s ease-out 0.8s'
                }}
              >
                Now trusted by 200+ founders.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}