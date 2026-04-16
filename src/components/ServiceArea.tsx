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
              src="https://maps.google.com/maps?ll=30.228693,-97.745243&z=13&t=m&hl=en&gl=US&mapclient=embed&cid=5649556640715013138&output=embed"
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
