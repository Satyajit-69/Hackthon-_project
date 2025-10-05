import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-sm shadow-lg shadow-green-500/20' 
          : 'bg-black'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo - Monster Style */}
         <div className="flex items-center gap-3">
  <img src="/mainlogo.png" alt="Logo" className="h-40 p-2 w-auto object-contain" />
</div>

          {/* Desktop Menu - Monster Style */}
          <ul className="hidden md:flex space-x-1">
            <li>
              <a 
                href="#hero" 
                className="px-6 py-2 text-white font-bold text-sm tracking-widest uppercase hover:text-green-400 transition-all duration-300 relative group"
              >
                HOME
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="px-6 py-2 text-white font-bold text-sm tracking-widest uppercase hover:text-green-400 transition-all duration-300 relative group"
              >
                ABOUT
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a 
                href="#product" 
                className="px-6 py-2 text-white font-bold text-sm tracking-widest uppercase hover:text-green-400 transition-all duration-300 relative group"
              >
                PRODUCTS
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a 
                href="#stats" 
                className="px-6 py-2 text-white font-bold text-sm tracking-widest uppercase hover:text-green-400 transition-all duration-300 relative group"
              >
                STATS
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a 
                href="#footer" 
                className="px-6 py-2 text-white font-bold text-sm tracking-widest uppercase hover:text-green-400 transition-all duration-300 relative group"
              >
                CONTACT
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          </ul>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button className="px-6 py-2 bg-gradient-to-r from-green-400 to-green-500 text-black font-black text-sm tracking-widest uppercase hover:from-green-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/50">
              UNLEASH
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 border-t border-green-500/30">
            <ul className="space-y-1 pt-4">
              <li>
                <a 
                  href="#home" 
                  onClick={closeMenu} 
                  className="block py-3 px-4 text-white font-bold text-sm tracking-widest uppercase hover:text-green-400 hover:bg-green-500/10 transition-all"
                >
                  HOME
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={closeMenu} 
                  className="block py-3 px-4 text-white font-bold text-sm tracking-widest uppercase hover:text-green-400 hover:bg-green-500/10 transition-all"
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a 
                  href="#education" 
                  onClick={closeMenu} 
                  className="block py-3 px-4 text-white font-bold text-sm tracking-widest uppercase hover:text-green-400 hover:bg-green-500/10 transition-all"
                >
                  STATS
                </a>
              </li>
             
              <li>
                <a 
                  href="#contact" 
                  onClick={closeMenu} 
                  className="block py-3 px-4 text-white font-bold text-sm tracking-widest uppercase hover:text-green-400 hover:bg-green-500/10 transition-all"
                >
                  CONTACT
                </a>
              </li>
              <li className="pt-2">
                <button className="w-full py-3 px-4 bg-gradient-to-r from-green-400 to-green-500 text-black font-black text-sm tracking-widest uppercase hover:from-green-500 hover:to-green-600 transition-all">
                  UNLEASH
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Bottom accent line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
    </nav>
  );
};

export default Navbar;