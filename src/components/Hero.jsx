import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);

  const educationData = [
    {
      image: "/photo1.jpeg"
    },
    {
      image: "/photo2.jpg"
    },
    {
      image: "/photo3.jpeg"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -200px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % educationData.length);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isPaused, educationData.length]);

  return (
    <section 
      id="hero" 
      className="py-16 min-h-screen bg-gradient-to-b from-gray-900 to-black"
      ref={sectionRef}
    >
      <div className="container mx-auto mt-3 px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-8 mt-10 items-start">
          
          {/* Image Slider */}
          <div className="col-span-12 lg:col-span-12 sticky top-24">
            <div 
              className={`relative overflow-hidden rounded-2xl shadow-2xl bg-black border-2 border-green-500/30 transition-all duration-700 hover:border-green-400 hover:shadow-green-500/50 group ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-12'
              }`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Image Container */}
              <div className="relative h-[500px] overflow-hidden">
                {educationData.map((edu, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      activeIndex === index
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-95'
                    }`}
                  >
                    <img
                      src={edu.image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                    />
                    {/* Dark overlay for better visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
                  </div>
                ))}
                
                {/* Static Text Overlay - UNLEASH THE BEAST */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <h1 
                    className="text-6xl md:text-6xl  text-white uppercase tracking-wider"
                    style={{
                      fontFamily: 'Anton SC, "Arial Black", sans-serif',
                      textShadow: '0 0 20px rgba(34, 197, 94, 0.8), 0 0 40px rgba(34, 197, 94, 0.5), 3px 3px 6px rgba(0, 0, 0, 0.9)',
                      WebkitTextStroke: '2px #22c55e'
                    }}
                  >
                    UNLEASH THE BEAST
                  </h1>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
                {educationData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`relative transition-all duration-300 rounded-full ${
                      activeIndex === index
                        ? 'w-12 h-3'
                        : 'w-3 h-3 bg-gray-400/50 hover:bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    {activeIndex === index && (
                      <>
                        <div className="absolute inset-0 bg-gray-400/30 rounded-full"></div>
                        <div 
                          className="absolute inset-0 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
                          style={{
                            animation: isPaused ? 'none' : 'fillProgress 4s linear',
                            transformOrigin: 'left',
                          }}
                        ></div>
                      </>
                    )}
                  </button>
                ))}
              </div>

              <style>{`
                @keyframes fillProgress {
                  from {
                    transform: scaleX(0);
                  }
                  to {
                    transform: scaleX(1);
                  }
                }
              `}</style>

              {/* Navigation Arrows */}
              <button
                onClick={() => setActiveIndex((prev) => (prev - 1 + educationData.length) % educationData.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-green-400 text-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={() => setActiveIndex((prev) => (prev + 1) % educationData.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-green-400 text-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;