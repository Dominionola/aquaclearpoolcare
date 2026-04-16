import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="bg-navy-deep text-white py-24 md:py-32 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="w-full md:w-1/2 lg:w-7/12 order-2 md:order-1">
            <h2 className="text-xs uppercase tracking-[0.2em] text-aqua font-bold mb-6">
              Our Standard
            </h2>
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-8">
              "When we first moved to Austin, we realized maintaining a home is difficult. We're here to help make pool ownership effortless."
            </blockquote>
            <div className="mb-8">
              <p className="text-xl font-bold">The Aqua Clear Team</p>
              <p className="text-offwhite/60 uppercase tracking-wider text-sm mt-1">Part of the Sunniva family of brands</p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-offwhite/70">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">&#10003;</div>
                <span>Trusted by 270+ Austin Pool Owners</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">&#10003;</div>
                <span>Water Chemistry Certified</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-5/12 order-1 md:order-2">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto md:ml-auto">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop" 
                alt="Aqua Clear Pool Care Technician servicing a residential pool" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-aqua/10 -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border border-aqua/30 -z-10"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
