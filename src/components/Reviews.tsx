import { Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: "Michael Osei",
      location: "West Lake Hills",
      rating: 5,
      quote: "We struggled with algae for months. Aqua Clear had it crystal clear in 48 hours. Their technicians are incredibly professional and explain everything they do."
    },
    {
      name: "Sarah Jenkins",
      location: "Barton Creek",
      rating: 5,
      quote: "The most reliable service we've ever used. They show up exactly when they say they will, and my pool has never looked better. Worth every penny."
    },
    {
      name: "David Chen",
      location: "Lakeway",
      rating: 5,
      quote: "I love getting the detailed report after every visit. It gives me peace of mind knowing exactly what chemicals were added and that the water is safe for my kids."
    }
  ];

  const tickerItems = Array(10).fill("4.9 Average Rating");

  return (
    <section className="bg-offwhite py-24 md:py-32 overflow-hidden" id="reviews">
      
      <div className="w-full bg-navy-pool text-aqua py-4 mb-20 flex overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex gap-12 items-center">
          {tickerItems.map((item, i) => (
            <span key={i} className="text-sm font-bold uppercase tracking-widest">{item}</span>
          ))}
          {tickerItems.map((item, i) => (
            <span key={`dup-${i}`} className="text-sm font-bold uppercase tracking-widest">{item}</span>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-xs uppercase tracking-[0.2em] text-navy-pool font-bold mb-4">
            What Our Customers Say
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl text-navy-deep">
            Trust Earned, <span className="italic text-teal">Pool by Pool</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 md:p-10 border border-navy-deep/5">
              <div className="flex text-aqua mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg text-navy-deep/80 leading-relaxed mb-8 italic">
                "{review.quote}"
              </p>
              <div>
                <p className="font-serif text-xl text-navy-deep">{review.name}</p>
                <p className="text-sm text-navy-deep/50 uppercase tracking-wider mt-1">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-navy-deep font-bold uppercase tracking-wider text-sm hover:text-aqua transition-colors">
            Read more reviews on Google <span aria-hidden="true">&#8594;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
