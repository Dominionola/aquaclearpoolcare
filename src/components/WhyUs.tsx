export default function WhyUs() {
  return (
    <section className="bg-navy-deep text-white py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
              The Science of <br/>
              <span className="italic text-aqua">Perfect Chemistry</span>
            </h2>
            <p className="text-lg text-offwhite/70 leading-relaxed mb-6 max-w-xl">
              Clear water isn't just about adding chlorine. It's a delicate balance of pH, alkalinity, calcium hardness, and cyanuric acid. Our certified technicians use laboratory-grade testing equipment to prescribe the exact treatment your specific pool needs.
            </p>
            <p className="text-lg text-offwhite/70 leading-relaxed mb-12 max-w-xl">
              The result? Water that doesn't just look clean, but feels soft on the skin, doesn't burn the eyes, and protects your expensive pool equipment from corrosion and scaling.
            </p>
            
            <div className="border-l-2 border-aqua pl-8 py-2">
              <div className="flex items-end gap-4 mb-2">
                <span className="text-6xl font-serif leading-none text-white">98<span className="text-aqua">%</span></span>
              </div>
              <p className="text-lg text-offwhite/80 font-light">
                Customer Retention Rate over our 15 years in business.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1200&auto=format&fit=crop" 
                alt="Water chemistry and premium pool maintenance" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
