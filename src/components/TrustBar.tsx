export default function TrustBar() {
  const items = [
    "Licensed Professional",
    "Fully Insured",
    "Bonded Service",
    "15+ Years Experience",
    "Locally Owned & Operated"
  ];

  return (
    <section className="bg-navy-pool text-white py-6 border-b border-navy-deep">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-sm uppercase tracking-[0.15em] font-medium text-white/80">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-aqua hidden md:block"></span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
