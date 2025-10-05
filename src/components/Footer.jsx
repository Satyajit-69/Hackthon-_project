import React from 'react';
import { Facebook, Instagram, Youtube, Twitter, Section } from 'lucide-react';

const Footer = () => {
  return ( 
 <section 
      id="footer" 
      className="py-16 min-h-screen bg-black"
      
    >
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Logo Section */}
          <div className="flex flex-col items-start align-center">
            <img src="/mainlogo.png" alt="Monster Energy" className="h-25 w-auto mb-6" />
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-green-400 hover:border-green-400 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-green-400 hover:border-green-400 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-green-400 hover:border-green-400 transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-green-400 hover:border-green-400 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div className='mt-10 text-center'>
            <h3 className="text-white font-bold text-lg mb-4 uppercase   hover:text-green-200 tracking-wider" style={{}}>Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Monster Army
                </a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
           <div className='mt-10 text-center'>
            <h3 className="text-white font-bold text-lg mb-4 uppercase  hover:text-green-200 tracking-wider">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Explore Column */}
          <div className='mt-10 text-center'>
            <h3 className="text-white font-bold text-lg mb-4 uppercase  hover:text-green-200 tracking-wider">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Monster Ultra
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Energy Drinks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Monster Energy
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs">
              © Anshuman & Team &nbsp;&nbsp; All Rights Reserved
            </p>
            <p style={{color : 'green'}}>Call us : 9178076537</p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              <a href="#" className="hover:text-green-400 transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-green-400 transition-colors">Cookies Policy</a>
              <a href="#" className="hover:text-green-400 transition-colors">Do Not Sell or Share My Personal Information</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
   


    </section>
  );
};

export default Footer;