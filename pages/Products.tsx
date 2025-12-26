
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Manufacturing', 'Design', 'Engineering'];

  const filteredProducts = filter === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-black text-slate-900 mb-6">Our Capabilities</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            High-precision products and specialized industrial services tailored to your unique requirements.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${
                  filter === cat
                    ? 'gold-gradient text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative overflow-hidden h-64 lg:h-auto">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-bold tracking-widest text-eden-navy uppercase">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{product.name}</h3>
                    <p className="text-slate-500 mb-6 leading-relaxed">{product.description}</p>
                    <div className="space-y-2 mb-8">
                      {product.specifications.map((spec) => (
                        <div key={spec} className="flex items-center text-xs font-semibold text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></span>
                          {spec}
                        </div>
                      ))}
                    </div>
                    <a
                      href="#/contact"
                      className="inline-flex items-center text-eden-gold font-bold text-sm hover:underline"
                    >
                      REQUEST SPECIFICATIONS
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8">Need a Custom Component?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Our engineers are ready to help you prototype and manufacture exactly what you need.
          </p>
          <a
            href="#/contact"
            className="inline-block px-12 py-5 gold-gradient text-white font-bold rounded-full shadow-xl shadow-amber-500/20"
          >
            START YOUR PROJECT TODAY
          </a>
        </div>
      </section>
    </div>
  );
};

export default Products;
