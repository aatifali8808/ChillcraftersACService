import { motion } from "motion/react";
import { CheckCircle2, Star, ShieldCheck, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-12 overflow-hidden bg-slate-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#0A192F] rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
        {/* Background Decor from Bento theme */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20 pointer-events-none"></div>

        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-blue-600/30 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-500/30 mb-6">
              <span>Premium Home Service</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight mb-6 italic">
              Fast & Reliable AC Repair <br className="hidden md:block"/> <span className="text-slate-400 font-light">at Your Doorstep.</span>
            </h1>
            
            <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
              Expert installation, repair, gas filling, and same-day maintenance by certified technicians in your area.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-10 items-start sm:items-center">
              <a href="#booking" className="inline-flex justify-center items-center bg-white hover:bg-blue-50 text-[#0A192F] px-8 py-4 rounded-2xl text-lg font-bold transition-all shadow-xl">
                Book Service Now
              </a>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full border-2 border-[#0A192F] bg-slate-400"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#0A192F] bg-slate-500"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#0A192F] bg-slate-600"></div>
                </div>
                <div className="text-sm">
                  <p className="font-bold text-white">10k+ Customers</p>
                  <p className="text-blue-400 text-xs mt-0.5">Trusted & Verified</p>
                </div>
              </div>
            </div>

            {/* Trust Badges styled as pills */}
            <div className="flex flex-wrap gap-3 border-t border-white/10 pt-8 mt-4">
              {[
                { icon: ShieldCheck, text: "Certified Techs" },
                { icon: CheckCircle2, text: "Same-Day Service" },
                { icon: MapPin, text: "Transparent Pricing" }
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-slate-300">
                  <badge.icon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-sm font-bold">{badge.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image / Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[500px] flex items-center justify-center lg:justify-end hidden md:flex"
          >
            {/* Elegant placeholder representing AC service */}
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-[#0A192F] ring-1 ring-white/10">
              <img 
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800" 
                alt="Professional AC Technician" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              
              {/* Floating element */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Technician Available</p>
                    <p className="text-xs text-slate-300">Arrives in 60 mins</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
