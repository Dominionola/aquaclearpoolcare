import { Metadata } from 'next';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Aqua Clear Pool Care',
  description: 'Reach out to Aqua Clear Pool Care. Service@aquaclearpoolcare.com or 512-658-3922.',
};

export default function ContactPage() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2000&auto=format&fit=crop" 
            alt="Contact Aqua Clear" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-navy-deep/80" />
        </div>
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-20 pb-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-serif mb-4">
            Let's Talk <span className="italic text-aqua">Pools</span>
          </h1>
          <p className="text-lg md:text-xl text-offwhite/80 max-w-2xl mx-auto">
            Fill out the form below or reach us directly at our Austin office.
          </p>
        </div>
      </section>

      <section className="bg-offwhite py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 block md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            
            <div className="bg-white p-8 rounded-2xl border border-navy-deep/5 flex flex-col items-center text-center shadow-sm">
              <div className="w-12 h-12 rounded-full bg-navy-pool/10 flex items-center justify-center text-aqua mb-6">
                <MapPin size={24} />
              </div>
              <h4 className="font-serif text-xl text-navy-deep mb-2">Office Address</h4>
              <p className="text-navy-deep/70">
                2800 S I-35 Frontage Rd<br />
                Austin, TX 78704
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-navy-deep/5 flex flex-col items-center text-center shadow-sm">
              <div className="w-12 h-12 rounded-full bg-navy-pool/10 flex items-center justify-center text-aqua mb-6">
                <Clock size={24} />
              </div>
              <h4 className="font-serif text-xl text-navy-deep mb-2">Business Hours</h4>
              <p className="text-navy-deep/70">
                Monday — Friday<br />
                8:00 AM — 6:00 PM
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-navy-deep/5 flex flex-col items-center text-center shadow-sm">
              <div className="w-12 h-12 rounded-full bg-navy-pool/10 flex items-center justify-center text-aqua mb-6">
                <Phone size={24} />
              </div>
              <h4 className="font-serif text-xl text-navy-deep mb-2">Call or Text</h4>
              <p className="text-navy-deep/70">
                <a href="tel:+15126583922" className="hover:text-aqua transition-colors duration-200">
                  (512) 658-3922
                </a>
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-navy-deep/5 flex flex-col items-center text-center shadow-sm">
              <div className="w-12 h-12 rounded-full bg-navy-pool/10 flex items-center justify-center text-aqua mb-6">
                <Mail size={24} />
              </div>
              <h4 className="font-serif text-xl text-navy-deep mb-2">Email Us</h4>
              <p className="text-navy-deep/70">
                <a href="mailto:service@aquaclearpoolcare.com" className="hover:text-aqua transition-colors duration-200">
                  service@aquaclearpoolcare.com
                </a>
              </p>
            </div>

          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.168582847953!2d-97.74716768487771!3d30.222718981816576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b4cdea8f152d%3A0xcb1bbaaa58619356!2s2800%20S%20I-35%20Frontage%20Rd%2C%20Austin%2C%20TX%2078704!5e0!3m2!1sen!2sus!4v1629837130234!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
