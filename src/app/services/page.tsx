import { Metadata } from 'next';
import { Sparkles, TestTube, Wrench, Droplets, Wind, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services | Aqua Clear Pool Care',
  description: 'Weekly cleaning, chemical balancing, deep cleaning, and full equipment repair services in Austin, TX.',
};

export default function ServicesPage() {
  const allServices = [
    {
      id: "weekly-maintenance",
      title: "Weekly Pool Maintenance",
      description: "A clean pool is not just about looks – it's about lifestyle. Our recurring weekly service ensures your pool is always ready for a swim.",
      icon: <Sparkles size={40} className="text-aqua" strokeWidth={1.5} />,
      image: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=1200&auto=format&fit=crop",
      bullets: [
        "Debris removal, skimming and netting",
        "Empty skimmer, pump baskets, and Polaris bags",
        "Detailed brushing of waterline, walls, and floors",
        "Vacuuming (hose vac or Riptide as needed)",
        "Flat-fee pricing includes standard chemicals (Chlorine, Salt, Acid, Bicarb, CYA)",
      ]
    },
    {
      id: "equipment-repair",
      title: "Equipment Repair & Replacement",
      description: "Austin's unpredictable weather and hard water can be tough on pool equipment. We diagnose and repair all major brands.",
      icon: <Wrench size={40} className="text-aqua" strokeWidth={1.5} />,
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1200&auto=format&fit=crop",
      bullets: [
        "Variable Speed Pump repair and installation (Austin Energy Rebates available)",
        "Filter cleaning, grid replacement, and full system repairs",
        "Residential pool heater diagnostics and repair",
        "Automation system upgrades (Jandy, Pentair, Hayward)",
        "Salt water conversion and salt cell cleaning",
      ]
    },
    {
      id: "chemical-balancing",
      title: "Science-Driven Chemical Balancing",
      description: "Clear water isn't just adding chlorine. It's a delicate balance. Our technicians use laboratory-grade testing.",
      icon: <TestTube size={40} className="text-aqua" strokeWidth={1.5} />,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1200&auto=format&fit=crop",
      bullets: [
        "Precision testing of pH, Alkalinity, Calcium, and Cyanuric Acid",
        "Prevention of skin irritation and red eyes",
        "Protection of pool plaster and expensive equipment from scaling",
        "Post-visit chemical report detailing exactly what was added",
      ]
    },
    {
      id: "deep-cleaning",
      title: "Green-To-Clean & Deep Cleaning",
      description: "Has your pool been neglected or overrun by algae? Our restorative cleaning service brings it back from the brink.",
      icon: <Droplets size={40} className="text-aqua" strokeWidth={1.5} />,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      bullets: [
        "Intensive multi-day treatment process",
        "Heavy debris removal and vacuuming to waste",
        "Shock treatments and intensive chemical rebalancing",
        "Filter backwashing and teardown to restore circulation",
      ]
    }
  ];

  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?q=80&w=2000&auto=format&fit=crop" 
            alt="Pool Services" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-20 pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-serif mb-4">
            Comprehensive <br />
            <span className="italic text-aqua">Pool Care</span>
          </h1>
          <p className="text-lg md:text-xl text-offwhite/80 max-w-2xl">
            From routine weekly maintenance to complex equipment repairs, we handle the hard work so you can simply enjoy your pool.
          </p>
        </div>
      </section>

      <div className="bg-offwhite py-8 sticky top-24 z-20 shadow-sm border-b border-navy-deep/5 hidden md:block">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <ul className="flex justify-between items-center text-sm font-bold uppercase tracking-widest text-navy-pool">
            {allServices.map(service => (
              <li key={`nav-${service.id}`}>
                <a href={`#${service.id}`} className="hover:text-aqua transition-colors duration-200">
                  {service.title.replace("Science-Driven ", "").replace(" & Deep Cleaning", "")}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-offwhite">
        {allServices.map((service, index) => (
          <section id={service.id} key={service.id} className={`py-24 md:py-32 ${index % 2 !== 0 ? 'bg-sand/30' : ''}`}>
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
              <div className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                <div className="w-full lg:w-1/2">
                  <div className="w-16 h-16 rounded-full bg-navy-pool/5 flex flex-col items-center justify-center mb-8">
                    {service.icon}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif text-navy-deep mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg text-navy-deep/70 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-4">
                    {service.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-4 text-navy-deep/80">
                        <span className="text-aqua text-xl mt-1 leading-none">•</span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10">
                    <a href="/contact" className="inline-block border border-navy-deep text-navy-deep px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-navy-deep hover:text-white transition-colors duration-300">
                      Request Service
                    </a>
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
