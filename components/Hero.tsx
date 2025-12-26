
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with parallax-like effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1920"
          alt="Manufacturing Facility"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl animate-slide-up">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
            </span>
            <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">Open 24 Hours</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-white leading-tight mb-6">
            The Pinnacle of <br />
            <span className="text-eden-gold font-serif italic">Manufacturing</span> Precision.
          </h1>

          <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            Located in the heart of Runda, EDEN BUSINESS CENTER LTD sets the benchmark for quality, reliability, and innovation in industrial manufacturing and custom fabrication.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#/products"
              className="px-10 py-5 gold-gradient text-white font-bold rounded-full text-center hover:shadow-2xl hover:shadow-amber-500/40 transition-all transform hover:-translate-y-1"
            >
              DISCOVER OUR PRODUCTS
            </a>
            <a
              href="#/contact"
              className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full text-center hover:bg-white/20 transition-all transform hover:-translate-y-1"
            >
              CONTACT US NOW
            </a>
          </div>
        </div>
      </div>

      {/* Stats / Accents */}
      <div className="absolute bottom-10 left-0 w-full hidden lg:block">
        <div className="container mx-auto px-6">
          <div className="flex space-x-12 text-white/60">
            <div>
              <p className="text-3xl font-bold text-white">15+</p>
              <p className="text-xs tracking-widest uppercase">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">500+</p>
              <p className="text-xs tracking-widest uppercase">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-xs tracking-widest uppercase">Precision Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
