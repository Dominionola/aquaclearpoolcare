'use client';

import { Star } from 'lucide-react';

export default function Hero() {


  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2400&auto=format&fit=crop"
          alt="Aerial view of a pristine residential pool"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-20 pt-24 flex flex-col lg:flex-row items-end lg:items-center justify-between gap-12">
        
        <div className="w-full lg:w-7/12 text-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex text-aqua">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm font-medium tracking-wide">4.9 — 372 Reviews</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[90px] leading-[1.05] tracking-tight mb-6">
            A New Standard of <br className="hidden md:block" />
            <span className="italic text-aqua">Crystal Clear</span> Water
          </h1>
          
          <p className="text-lg md:text-xl text-offwhite/90 max-w-2xl mb-10 font-light">
            Laboratory-grade chemistry meets white-glove service. Serving Austin, TX and the Hill Country with excellence.
          </p>
          <a href="#quote" className="inline-block bg-aqua text-navy-deep px-10 py-5 font-bold uppercase tracking-wider hover:bg-cyan transition-colors duration-300">
            Get a Free Assessment
          </a>
        </div>

      </div>
    </section>
  );
}
