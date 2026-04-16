export default function Footer() {
  return (
    <footer className="bg-navy-deep text-offwhite/70 py-16 border-t border-white/10" id="contact">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <a href="/" className="font-serif text-3xl tracking-wide flex items-center gap-2 text-white mb-6">
              <span className="text-aqua">Aqua</span> Clear
            </a>
            <p className="text-sm leading-relaxed mb-6">
              Austin's premier pool cleaning and repair service. Trusted by over 270 pool owners for weekly maintenance.
            </p>
            <div className="text-white font-medium flex flex-col gap-2">
              <a href="tel:+15126583922" className="hover:text-aqua transition-colors text-xl">
                (512) 658-3922
              </a>
              <a href="mailto:service@aquaclearpoolcare.com" className="hover:text-aqua transition-colors text-sm text-offwhite/80">
                service@aquaclearpoolcare.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white uppercase tracking-widest text-xs font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/services" className="hover:text-aqua transition-colors">Services</a></li>
              <li><a href="/#how-it-works" className="hover:text-aqua transition-colors">How It Works</a></li>
              <li><a href="/#pricing" className="hover:text-aqua transition-colors">Pricing</a></li>
              <li><a href="/#reviews" className="hover:text-aqua transition-colors">Reviews</a></li>
              <li><a href="/about" className="hover:text-aqua transition-colors">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white uppercase tracking-widest text-xs font-bold mb-6">Service Area</h4>
            <ul className="space-y-4 text-sm">
              <li>Austin</li>
              <li>West Lake Hills</li>
              <li>Cedar Park</li>
              <li>Round Rock</li>
              <li>Lakeway</li>
              <li>Bee Cave</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white uppercase tracking-widest text-xs font-bold mb-6">Connect & Hours</h4>
            <ul className="space-y-4 text-sm mb-8">
              <li>Mon - Fri: 8:00 AM - 6:00 PM</li>
              <li><a href="https://www.instagram.com/aquaclearpoolcare" target="_blank" rel="noopener noreferrer" className="hover:text-aqua transition-colors">Instagram</a></li>
              <li><a href="https://www.facebook.com/aquaclearpoolcare" target="_blank" rel="noopener noreferrer" className="hover:text-aqua transition-colors">Facebook</a></li>
              <li><a href="https://g.page/r/aquaclearpoolcare/review" target="_blank" rel="noopener noreferrer" className="hover:text-aqua transition-colors">Google Reviews</a></li>
            </ul>
            <div className="text-xs space-y-2 opacity-60">
              <p>Part of the Sunniva family of brands</p>
              <p>Fully Insured & Bonded</p>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Aqua Clear Pool Care. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
