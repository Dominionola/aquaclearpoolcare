import { Metadata } from 'next';
import AboutComponent from '@/components/About';

export const metadata: Metadata = {
  title: 'About Us | Aqua Clear Pool Care',
  description: 'Austin\'s premier pool cleaning service. Trusted by over 270 pool owners with a 98% retention rate.',
};

export default function AboutPage() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576013551522-d04bbf167c76?q=80&w=2000&auto=format&fit=crop" 
            alt="Austin Pool Maintenance" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-20 pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-serif mb-4">
            Our Story & <span className="italic text-aqua">Team</span>
          </h1>
          <p className="text-lg md:text-xl text-offwhite/80 max-w-2xl">
            Meet the experts behind Austin's most reliable and trusted pool service. We treat every pool like it's our own.
          </p>
        </div>
      </section>

      <AboutComponent />

      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xs uppercase tracking-[0.2em] text-navy-pool font-bold mb-4">
              Our Origin Story
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif text-navy-deep mb-8 relative">
              <span className="text-aqua text-6xl absolute -top-4 -left-6 opacity-30">"</span>
              When we first moved to Austin, we also moved into our first house. Soon, we realized that we knew nothing about how to maintain a home.
            </h3>
            <p className="text-lg text-navy-deep/80 leading-relaxed mb-6">
              "After struggling to find reliable vendors for services such as residential cleaning, window cleaning, power washing, carpet cleaning, and pool maintenance and repair, we knew we had to do something about it. From there, Sunniva was born."
            </p>
            <p className="text-xl font-serif text-navy-deep mb-12">
              ~ Crystal C. Wu, Owner
            </p>
            <div className="h-px w-24 bg-navy-deep/10 mx-auto mb-12"></div>
            <h4 className="text-2xl font-serif text-navy-deep mb-4">The Sunniva Vision</h4>
            <p className="text-lg text-navy-deep/80 leading-relaxed">
              Sunniva’s vision is to become the one-stop shop for all home & commercial cleaning services. <a href="http://juanycleaningservice.com/" target="_blank" rel="noopener noreferrer" className="text-aqua font-medium hover:underline">Juany Cleaning Service</a> and Aqua Clear Pool Care are proud to be part of that vision. Thank you for giving our technicians an opportunity to earn your trust.
            </p>
          </div>

        </div>
      </section>

      <section className="bg-sand py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-navy-pool font-bold mb-4">
              Energy Efficiency
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-navy-deep mb-6">
              Austin Energy <br className="hidden md:block"/>
              <span className="italic text-teal">$300 Rebate</span>
            </h3>
            <p className="text-lg text-navy-deep/80 leading-relaxed mb-6">
              Aqua Clear Pool Care is proud to be a Participating Contractor in Austin Energy’s Appliance Efficiency Program. Install an ENERGY STAR certified variable speed pool pump and you could receive a $300 rebate.
            </p>
            <ul className="space-y-4 mb-8 text-navy-deep/80">
              <li className="flex items-start gap-3">
                <span className="text-aqua font-bold text-xl leading-none">•</span>
                <span>Up to 65% lower energy consumption</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-aqua font-bold text-xl leading-none">•</span>
                <span>Reliable performance for over a decade</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-aqua font-bold text-xl leading-none">•</span>
                <span>Whisper-quiet operation and better circulation</span>
              </li>
            </ul>
            <a href="/contact" className="inline-block bg-aqua text-navy-deep px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-cyan transition-colors duration-300">
              Ask About The Rebate
            </a>
          </div>
          <div className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=800&auto=format&fit=crop" 
              alt="Pool Pump Equipment" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer" 
            />
          </div>
        </div>
      </section>
    </>
  );
}
