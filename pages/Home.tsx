
import React from 'react';
import Hero from '../components/Hero';
import TestimonialCarousel from '../components/TestimonialCarousel';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />

      {/* Feature Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000"
                  alt="Quality Control"
                  className="w-full"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 gold-gradient rounded-3xl -z-0 hidden md:block"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-slate-100 rounded-full -z-10 animate-pulse"></div>
            </div>

            <div className="space-y-8">
              <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm">Our Commitment</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Engineering Excellence with a Human Touch.
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                At EDEN BUSINESS CENTER LTD, we believe that manufacturing isn't just about machines—it's about the precision of thought, the quality of materials, and the reliability of the relationships we build with our clients.
              </p>
              <ul className="space-y-4">
                {[
                  'Advanced CNC & Laser Cutting Technology',
                  'ISO 9001:2015 Quality Management System',
                  'Expert Engineering Team available 24/7',
                  'Sustainable Production Practices'
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-3 font-semibold text-slate-800">
                    <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <a href="#/about" className="inline-flex items-center text-eden-gold font-bold group">
                  Learn more about our history
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4">Core Expertise</h2>
            <h3 className="text-4xl font-black text-slate-900 mb-6">Integrated Manufacturing Solutions</h3>
            <p className="text-slate-600">From concept to delivery, we provide end-to-end industrial services designed to help your business scale efficiently.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Custom Fabrication', icon: '🛠️', desc: 'Tailored metal and plastic parts designed to your exact specifications.' },
              { title: 'Product Assembly', icon: '⚙️', desc: 'Highly efficient automated and manual assembly for complex products.' },
              { title: 'Design Engineering', icon: '📐', desc: 'Expert consultation and CAD modeling to optimize your product design.' }
            ].map((service) => (
              <div key={service.title} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform inline-block">{service.icon}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-500 leading-relaxed mb-6">{service.desc}</p>
                <a href="#/products" className="text-sm font-bold text-eden-gold uppercase tracking-widest hover:underline">View Details</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialCarousel />
    </div>
  );
};

export default Home;
