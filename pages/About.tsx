
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-8 animate-slide-up">About Eden Business Center</h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-400 leading-relaxed">
            Building the infrastructure of tomorrow, today. We are a premier manufacturer committed to precision, innovation, and unwavering quality.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div>
                <h2 className="text-eden-gold font-bold uppercase tracking-widest text-sm mb-4">Our History</h2>
                <h3 className="text-4xl font-black text-slate-900 mb-6">A Legacy of Quality Since 2008</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Founded in Nairobi, EDEN BUSINESS CENTER LTD began as a small specialized machine shop. Over the last decade and a half, we have expanded our capabilities to become one of Kenya's most trusted manufacturing hubs, servicing clients across East Africa from our state-of-the-art facility in Runda.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-amber-500">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h4>
                  <p className="text-slate-500 text-sm">To empower African industries by providing world-class precision manufacturing and bespoke engineering solutions.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-amber-500">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Our Vision</h4>
                  <p className="text-slate-500 text-sm">To be the leading global partner for innovative industrial production and high-quality design fabrication.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=600" alt="Factory" className="rounded-3xl w-full h-80 object-cover mt-8" />
              <img src="https://images.unsplash.com/photo-1530124560676-586cad3ad730?auto=format&fit=crop&q=80&w=600" alt="Team" className="rounded-3xl w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4">Core Values</h2>
            <h3 className="text-4xl font-black">What Drives Us Every Day</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { title: 'Integrity', desc: 'We uphold the highest ethical standards in all our business dealings.' },
              { title: 'Precision', desc: 'Near-zero tolerance for error is our baseline for every project.' },
              { title: 'Innovation', desc: 'Constant improvement of techniques and technology.' },
              { title: 'Reliability', desc: 'Meeting deadlines and exceeding expectations, every single time.' }
            ].map((value) => (
              <div key={value.title} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 gold-gradient rounded-full mx-auto mb-6 flex items-center justify-center font-bold text-lg">
                  {value.title[0]}
                </div>
                <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
