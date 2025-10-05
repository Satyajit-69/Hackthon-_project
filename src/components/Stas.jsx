import { useEffect, useRef, useState } from 'react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  const statsData = [
    {
      title: "Global Market Share",
      value: "39%",
      category: "Energy Drink Leader",
      metric: "Market Dominance",
      location: "Worldwide",
      year: "2024",
      highlight: "Second largest energy drink brand globally",
      description: "Monster Energy commands nearly 40% of the US energy drink market, making it the second-largest brand after Red Bull.",
      image: "/site-stats-animate.svg"
    },
    {
      title: "Annual Sales",
      value: "$7.1B",
      category: "Revenue Growth",
      metric: "Yearly Revenue",
      location: "Global Markets",
      year: "2023",
      highlight: "Consistent double-digit growth",
      description: "Monster Beverage Corporation achieved record-breaking sales of $7.1 billion with continuous year-over-year expansion.",
      image: "/browser-stats-animate.svg"
    },
    {
      title: "Product Varieties",
      value: "34+",
      category: "Flavor Portfolio",
      metric: "Active SKUs",
      location: "International",
      year: "2024",
      highlight: "Most diverse energy drink lineup",
      description: "From Original to Ultra Paradise, Monster offers over 34 different flavors and formulations to suit every taste preference.",
      image: "/statistics-animate.svg"
    },
    {
      title: "Caffeine Content",
      value: "160mg",
      category: "Energy Boost",
      metric: "Per 16oz Can",
      location: "Standard Formula",
      year: "Classic",
      highlight: "Optimal energy performance",
      description: "Each Monster Energy drink contains 160mg of caffeine per 16oz serving, providing the perfect energy boost for peak performance.",
      image: "/site-stats-animate.svg"
    },
    {
      title: "Countries Available",
      value: "120+",
      category: "Global Reach",
      metric: "Distribution Network",
      location: "Worldwide",
      year: "2024",
      highlight: "Expanding international presence",
      description: "Monster Energy is distributed in over 120 countries, making it one of the most accessible energy drinks on the planet.",
      image: "/browser-stats-animate.svg"
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

  return (
    <section 
      id="stats" 
      className="py-16 min-h-screen bg-black"
      ref={sectionRef}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Banger&family=Montserrat:wght@400;700;900&display=swap');
          #stats h4, #stats h3, #stats .value-text {
            font-family: 'Arial', sans-serif;
          }
          #stats * {
            font-family: 'Montserrat', sans-serif;
          }
        `}
      </style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h4 
            className={`text-5xl md:text-7xl font-black inline-block transition-all duration-700 tracking-wider ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-4'
            }`}
            style={{ color: '#39FF14', textTransform: 'uppercase', letterSpacing: '0.1em' , fontFamily :'Anton Sc ' }}
          >
            MONSTER STATS
          </h4>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-8 items-start">
          
          {/* Left Column - Stats Cards */}
          <div className="col-span-12 lg:col-span-6 space-y-6">
            {statsData.map((stat, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-500 transform hover:scale-105 border-2 ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-12'
                } ${
                  activeIndex === index
                    ? 'bg-gradient-to-r from-green-500 to-green-600 border-green-400 shadow-2xl shadow-green-500/50 scale-105'
                    : 'bg-gray-900 border-gray-700 shadow-lg hover:shadow-xl hover:border-green-500/50'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-2xl font-black mb-1" style={{ color: activeIndex === index ? '#000' : '#39FF14' , fontFamily : 'Anton Sc' }}>
                      {stat.title}
                    </h3>
                    <p className={`text-sm font-bold tracking-wider ${
                      activeIndex === index ? 'text-black' : 'text-green-400'
                    }`}>
                      {stat.category}
                    </p>
                  </div>
                  <div className={`px-4 py-2 rounded-full text-xl font-black value-text ${
                    activeIndex === index 
                      ? 'bg-black text-green-400' 
                      : 'bg-green-500 text-black'
                  }`}>
                    {stat.value}
                  </div>
                </div>
                
                <div className={`space-y-2 text-sm font-bold ${
                  activeIndex === index ? 'text-black' : 'text-gray-300'
                }`}>
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    {stat.metric}
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {stat.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {stat.year}
                  </p>
                </div>
                
                <p className={`mt-4 text-sm font-semibold ${
                  activeIndex === index ? 'text-gray-900' : 'text-gray-400'
                }`}>
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column - Sliding Image */}
          <div className="col-span-12 lg:col-span-6 sticky top-24">
            <div 
              className={`relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-gray-900 to-black border-2 border-green-500 p-8 transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-12'
              }`}
            >
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-in-out ${
                    activeIndex === index
                      ? 'opacity-100 translate-y-0 relative'
                      : 'opacity-0 absolute top-0 left-0 right-0'
                  }`}
                  style={{
                    transform: activeIndex === index 
                      ? 'translateY(0)' 
                      : `translateY(${(index - activeIndex) * 20}px)`
                  }}
                >
                  <img
                    src={stat.image}
                    alt={stat.title}
                    className="w-full h-[500px] object-contain transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="mt-6 text-center">
                    <h3 className="text-4xl font-black tracking-wider value-text" style={{ color: '#39FF14' }}>
                      {stat.value}
                    </h3>
                    <p className="font-bold mt-2 text-2xl text-white value-text">
                      {stat.title}
                    </p>
                    <p className="font-semibold mt-2 text-green-400 text-lg">
                      {stat.highlight}
                    </p>
                  </div>
                </div>
              ))}

              {/* Navigation Dots */}
              <div className="flex justify-center gap-3 mt-8">
                {statsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      activeIndex === index
                        ? 'w-9 h-3 bg-green-500'
                        : 'w-3 h-3 bg-gray-600 hover:bg-green-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;