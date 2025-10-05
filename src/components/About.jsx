import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -250px 0px'
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
      id="about" 
      className="py-16 min-h-screen"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Heading with fade-in from top */}
        <h1 
          className={`text-2xl font-bold p-2  inline-block transition-all duration-700 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-4'
          }`}

          style={{
            fontFamily: 'Anton SC, "Arial Black", sans-serif'
          }}
        >
          About
               {/* Underline */}
                  <div className="h-0.5 w-full mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full animate-shimmer mb-1.5" style={{backgroundSize: '200% 100%'}}></div>
        </h1>
        
            
          

        {/* Row (12-column grid) */}
        <div className="mt-5 grid grid-cols-12 gap-8 items-center">
          
          {/* Left Column (col-7) - Slide in from left */}
          <div 
            className={`col-span-12 md:col-span-7 text-left space-y-4 transition-all duration-700 delay-200 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-12'
            } p-3`}
          >
          
            <p className="text-lg leading-relaxed" style={{
              fontFamily : 'Anton Sc'
            }}>
             Monster Energy isn’t just a drink — it’s an adrenaline shot to your system.
It’s that raw power you feel before a big lift, the fire in your gut before a race, the fuel that turns tired eyes into focused rage. Every sip hits like a lightning bolt — sharp, loud, and unapologetic. It doesn’t whisper motivation; it screams it in your face. Monster is for those who refuse to slow down, who crave chaos, who live on the edge and love the rush. It’s not just energy — it’s attitude in a can
            </p>


                <div className=" items-center flex justify-center md:block  align-center">
            <button className="px-6 py-2 bg-gradient-to-r from-green-400 to-green-500 text-black font-black text-sm tracking-widest uppercase hover:from-green-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/50 align-center ml-7 ">
              UNLEASH THE BEAST
            </button>
          </div>             
 
          </div>

          {/* Right Column (col-5) - Slide in from right with scale */}
          <div 
            className={`col-span-12 md:col-span-5 flex justify-center transition-all duration-700 delay-400 ${
              isVisible 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 translate-x-12 scale-90'
            }`}
          >
            <img
              src="/rightside.png"
              alt="Profile"
              className="w-80 h-80 md:w-[500px] md:h-[500px] object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;