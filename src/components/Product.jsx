import { useEffect, useRef, useState } from 'react';

const ProductSection = () => {
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

  const productData = [
    {
      title: "Monster Original",
      description: "The classic that started it all. Monster Original is a fierce blend of energy and taste, a potent concoction designed to fuel the wildest of adventures. With 160mg of caffeine, it's the perfect hit to keep you sharp, focused, and ready for whatever the day throws at you. Unleash the beast and own your grind.",
      image: "/rightside.png"
    },
    {
      title: "Monster Ultra",
      description: "Zero sugar, a thousand times the flavor. Monster Ultra offers the same bone-crushing energy in a lighter, crisper form. It’s for those who want to rip through the day without the extra sweetness. Smooth, citrusy, and dangerously refreshing, Ultra delivers a clean buzz that won’t weigh you down. This is pure, unadulterated energy.",
      image: "/product-ultra.png"
    },
    {
      title: "Monster Juice",
      description: "A full-throttle fusion of juice and energy. Monster Juice is a wild ride of flavor, blending classic Monster energy with authentic fruit juice. From Mango Loco to Pacific Punch, each can is a vibrant explosion of taste that revs you up and keeps you going. Get ready for a flavorful rampage.",
      image: "/product-juice.png"
    },
    {
      title: "Monster Rehab",
      description: "Hydrate, revitalize, and refuel. Monster Rehab is the ultimate pick-me-up for a long night or a tough workout. It combines electrolytes, vitamins, and a powerful dose of Monster energy to get you back in the game. Non-carbonated and packed with a tea and lemonade flavor, it's a refreshing recovery drink with an attitude.",
      image: "/product-rehab.png"
    }
  ];

  return (
    <section 
      id="products" 
      className="py-20 bg-black text-white"
      ref={sectionRef}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Anton+SC&family=Roboto:wght@400;700;900&display=swap');
          .product-title {
            font-family: 'Anton SC', sans-serif;
          }
          .product-description, .product-btn {
            font-family: 'Roboto', sans-serif;
          }
        `}
      </style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="product-title text-5xl md:text-7xl font-black inline-block tracking-wider uppercase text-green-500">
            OUR LINEUP
          </h2>
          <div className="h-1 w-full max-w-lg mx-auto mt-4 bg-gradient-to-r from-green-400 via-green-500 to-green-400 rounded-full animate-pulse"></div>
        </div>

        {productData.map((product, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center mb-24 last:mb-0 transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {/* Conditional rendering for alternating layout */}
            {index % 2 === 0 ? (
              <>
                {/* Left: Image, Right: Text */}
                <div className="flex justify-center md:justify-start">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full max-w-sm md:max-w-md object-contain transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center md:text-left space-y-6">
                  <h3 className="product-title text-4xl md:text-5xl font-black text-green-500">
                    {product.title}
                  </h3>
                  <p className="product-description text-lg leading-relaxed text-gray-300">
                    {product.description}
                  </p>
                  <button className="product-btn px-8 py-3 bg-gradient-to-r from-green-400 to-green-500 text-black font-black text-sm tracking-widest uppercase rounded-md hover:from-green-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/50">
                    LEARN MORE
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Left: Text, Right: Image */}
                <div className="text-center md:text-left space-y-6 md:order-last">
                  <h3 className="product-title text-4xl md:text-5xl font-black text-green-500">
                    {product.title}
                  </h3>
                  <p className="product-description text-lg leading-relaxed text-gray-300">
                    {product.description}
                  </p>
                  <button className="product-btn px-8 py-3 bg-gradient-to-r from-green-400 to-green-500 text-black font-black text-sm tracking-widest uppercase rounded-md hover:from-green-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/50">
                    LEARN MORE
                  </button>
                </div>
                <div className="flex justify-center md:justify-end">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full max-w-sm md:max-w-md object-contain transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;