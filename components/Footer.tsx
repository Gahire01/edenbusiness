
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <a href="#/" className="flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 gold-gradient rounded-md flex items-center justify-center font-bold text-white">E</div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                EDEN <span className="text-eden-gold">BUSINESS</span>
              </span>
            </a>
            <p className="leading-relaxed mb-6">
              Leading the manufacturing industry in Runda with high-precision engineering and bespoke fabrication solutions since 2008.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'linkedin', 'twitter', 'instagram'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current mask-icon" style={{ maskImage: `url(https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${social}.svg)` }}></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#/" className="hover:text-eden-gold transition-colors">Home</a></li>
              <li><a href="#/about" className="hover:text-eden-gold transition-colors">About Us</a></li>
              <li><a href="#/products" className="hover:text-eden-gold transition-colors">Products & Services</a></li>
              <li><a href="#/contact" className="hover:text-eden-gold transition-colors">Contact</a></li>
              <li><a href="#/contact" className="hover:text-eden-gold transition-colors">Request Quote</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Operating Hours</h4>
            <ul className="space-y-4">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Monday - Friday</span>
                <span className="text-amber-500 font-bold">Open 24h</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Saturday</span>
                <span className="text-amber-500 font-bold">Open 24h</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-amber-500 font-bold">Open 24h</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-amber-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>2XPW+Q7C, Runda,<br />Nairobi, Kenya</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0786 660 972</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center text-sm">
          <p>© 2024 EDEN BUSINESS CENTER LTD. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
