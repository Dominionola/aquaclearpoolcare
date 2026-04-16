export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Reach Out",
      desc: "Call us at (512) 658-3922 or click 'Get a Free Assessment' and we'll respond within one business day."
    },
    {
      num: "02",
      title: "We Assess",
      desc: "A certified technician evaluates your pool's chemistry, equipment, and needs."
    },
    {
      num: "03",
      title: "We Clean",
      desc: "We perform the necessary treatments and establish a maintenance routine."
    },
    {
      num: "04",
      title: "You Swim",
      desc: "Enjoy a consistently pristine pool without lifting a finger."
    }
  ];

  return (
    <section className="bg-sand py-24 md:py-32" id="how-it-works">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="mb-16 md:mb-24">
          <h2 className="text-xs uppercase tracking-[0.2em] text-navy-pool font-bold mb-4">
            The Process
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl text-navy-deep">
            How It <span className="italic text-teal">Works</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="h-[1px] w-full bg-navy-deep/20 mb-8 relative">
                <div className="absolute top-0 left-0 h-[3px] w-12 bg-aqua -translate-y-[1px]"></div>
              </div>
              
              <div className="font-serif text-4xl text-navy-deep/30 mb-4">{step.num}</div>
              <h4 className="text-2xl font-serif text-navy-deep mb-3">{step.title}</h4>
              <p className="text-navy-deep/70 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
