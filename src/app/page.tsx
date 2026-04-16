import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Intro from "@/components/Intro";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import BeforeAfter from "@/components/BeforeAfter";
import Reviews from "@/components/Reviews";
import HowItWorks from "@/components/HowItWorks";
import ServiceArea from "@/components/ServiceArea";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Intro />
      <WhyUs />
      <Services />
      <Pricing />
      <BeforeAfter />
      <Reviews />
      <HowItWorks />
      <ServiceArea />
      <About />
    </>
  );
}
