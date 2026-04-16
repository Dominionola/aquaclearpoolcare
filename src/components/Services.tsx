import { Droplets, Wrench, TestTube, Wind, Sparkles, ShieldCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: "01",
      title: "Weekly Maintenance",
      description: "Comprehensive cleaning, skimming, brushing, and vacuuming to keep your pool pristine week after week.",
      icon: <Sparkles size={32} strokeWidth={1.5} />,
      image: "/services/service_maintenance_1776368773796.png"
    },
    {
      id: "02",
      title: "Chemical Balancing",
      description: "Precise laboratory-grade testing and chemical adjustment for safe, crystal-clear, and comfortable water.",
      icon: <TestTube size={32} strokeWidth={1.5} />,
      image: "/services/service_chemical_1776368791628.png"
    },
    {
      id: "03",
      title: "Equipment Service",
      description: "Inspection, maintenance, and repair of pumps, filters, heaters, and salt cells to ensure optimal performance.",
      icon: <Wrench size={32} strokeWidth={1.5} />,
      image: "https://lh3.googleusercontent.com/p/AF1QipPtMbvi3eqEL17Tsn-O6FleJMTYS-_prd3admye=s1600"
    },
    {
      id: "04",
      title: "Deep Cleaning",
      description: "Intensive restorative cleaning for neglected pools, turning green water back to sparkling blue.",
      icon: <Droplets size={32} strokeWidth={1.5} />,
      image: "/services/service_deep_clean_1776368810024.png"
    },
    {
      id: "05",
      title: "Opening & Closing",
      description: "Professional seasonal preparation to protect your investment during winter and ready it for summer.",
      icon: <Wind size={32} strokeWidth={1.5} />,
      image: "/services/service_seasonal_1776368826079.png"
    },
    {
      id: "06",
      title: "Preventative Care",
      description: "Proactive treatments to prevent algae blooms, scaling, and staining before they become costly problems.",
      icon: <ShieldCheck size={32} strokeWidth={1.5} />,
      image: "/services/service_preventative_1776368852884.png"
    }
  ];

  return (
    <section className="bg-offwhite py-24 md:py-32" id="services">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-navy-pool font-bold mb-4">
              What We Do
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl text-navy-deep">
              Comprehensive <span className="italic">Care</span>
            </h3>
          </div>
          <div className="text-sm uppercase tracking-widest text-navy-deep/60 font-medium">
            06 Specialized Services
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 border-t border-navy-deep/10 pt-16">
          {services.map((service) => (
            <div key={service.id} className="group relative">
              <div className="w-full h-48 md:h-56 mb-8 overflow-hidden rounded-2xl bg-navy-deep/5">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <div className="text-navy-pool/50 group-hover:text-aqua transition-colors duration-300">
                  {service.icon}
                </div>
                <span className="font-serif text-2xl text-navy-deep/20 group-hover:text-navy-deep/40 transition-colors duration-300">
                  {service.id}
                </span>
              </div>
              <h4 className="text-2xl font-serif text-navy-deep mb-3">{service.title}</h4>
              <p className="text-navy-deep/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
