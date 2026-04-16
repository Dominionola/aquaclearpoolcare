import { MapPin } from 'lucide-react';

export default function ServiceArea() {
  const areas = [
    "Downtown Austin",
    "West Lake Hills",
    "Barton Creek",
    "Cedar Park",
    "Round Rock",
    "Lakeway",
    "Bee Cave",
    "Pflugerville"
  ];

  return (
    <section className="bg-navy-deep text-white py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              We Serve Your <br/>
              <span className="italic text-aqua">Neighbourhood</span>
            </h2>
            <p className="text-lg text-offwhite/70 mb-10 max-w-lg">
              Our technicians are strategically routed to ensure prompt, reliable service across Austin and the Hill Country. Based in the heart of the city, we're never too far to keep your pool crystal clear.
            </p>
            
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center gap-3">
                  <MapPin size={18} className="text-aqua shrink-0" />
                  <span className="text-offwhite/90">{area}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-[400px] lg:h-[500px] rounded-2xl border border-white/10 overflow-hidden relative bg-navy-pool/30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d440897.62002167094!2d-98.03359114631215!3d30.30798270188612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full transition-all duration-500"
              title="Aqua Clear Service Area Map - Austin, TX"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
