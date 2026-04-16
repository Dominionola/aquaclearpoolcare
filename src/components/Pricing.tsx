import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Essential",
      price: "$149",
      period: "per month",
      description: "Perfect for screened-in pools requiring basic chemical maintenance.",
      features: [
        "Bi-weekly water testing & balancing",
        "Empty skimmer & pump baskets",
        "Filter backwashing as needed",
        "Visual equipment inspection",
        "Basic chemical supplies included"
      ],
      isPopular: false
    },
    {
      name: "Professional",
      price: "$229",
      period: "per month",
      description: "Our most comprehensive weekly service for pristine year-round swimming.",
      features: [
        "Weekly water testing & balancing",
        "Full surface skimming & netting",
        "Wall & step brushing",
        "Bottom vacuuming",
        "Empty all baskets & cleaners",
        "Filter cleaning & backwashing",
        "All premium chemicals included"
      ],
      isPopular: true
    },
    {
      name: "Premium",
      price: "$349",
      period: "per month",
      description: "White-glove service for large, complex, or heavily used luxury pools.",
      features: [
        "Twice-weekly visits",
        "Everything in Professional plan",
        "Salt cell cleaning (quarterly)",
        "Filter cartridge replacement labor",
        "Priority storm cleanup response",
        "Annual equipment tune-up",
        "24/7 emergency support line"
      ],
      isPopular: false
    }
  ];

  return (
    <section className="bg-white py-24 md:py-32" id="pricing">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-xs uppercase tracking-[0.2em] text-navy-pool font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl text-navy-deep">
            Choose Your <span className="italic text-teal">Level of Care</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 md:p-12 transition-transform duration-300 hover:-translate-y-2 ${
                plan.isPopular 
                  ? 'bg-navy-deep text-white shadow-2xl border-2 border-aqua' 
                  : 'bg-offwhite text-navy-deep border border-navy-deep/10'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-aqua text-navy-deep px-4 py-1 text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <h4 className="text-2xl font-serif mb-2">{plan.name}</h4>
              <p className={`text-sm mb-8 h-10 ${plan.isPopular ? 'text-white/70' : 'text-navy-deep/70'}`}>
                {plan.description}
              </p>
              
              <div className="mb-8 pb-8 border-b border-current/10">
                <span className="text-5xl font-serif">{plan.price}</span>
                <span className={`text-sm ml-2 ${plan.isPopular ? 'text-white/60' : 'text-navy-deep/60'}`}>
                  {plan.period}
                </span>
              </div>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={20} className={plan.isPopular ? 'text-aqua shrink-0' : 'text-teal shrink-0'} />
                    <span className="text-sm leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#quote" 
                className={`block w-full text-center py-4 text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
                  plan.isPopular 
                    ? 'bg-aqua text-navy-deep hover:bg-cyan' 
                    : 'bg-navy-deep text-white hover:bg-navy-pool'
                }`}
              >
                Select Plan
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
