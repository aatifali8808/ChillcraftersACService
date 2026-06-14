import { motion } from "motion/react";
import { Clock, Shield, IndianRupee, Wrench, Settings, Award } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    { icon: Clock, title: "Fast Response", desc: "60-minute emergency arrival." },
    { icon: IndianRupee, title: "Transparent Pricing", desc: "Upfront quotes, no hidden fees." },
    { icon: Shield, title: "Warranty Support", desc: "30-day service warranty." },
    { icon: Wrench, title: "Genuine Parts", desc: "100% original OEM spares used." },
    { icon: Award, title: "Expert Techs", desc: "Background-verified professionals." },
    { icon: Settings, title: "Modern Tools", desc: "Advanced diagnostic equipment." },
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-100 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 lg:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-3">Emergency Help</h2>
              <h3 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
                The Standard in<br />Premium Cooling.
              </h3>
              <p className="text-slate-400 text-lg mb-8 max-w-lg italic">
                We go beyond basic repairs to offer a luxury service experience—fast, exceptionally clean, and highly reliable. Discover the difference of true professionalism.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-blue-400 text-4xl font-display font-bold">10K+</div>
                  <div className="text-sm text-slate-300">Satisfied Homes<br />Across the City</div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <reason.icon className="w-8 h-8 text-blue-400 mb-4" />
                  <h4 className="text-lg font-bold mb-2">{reason.title}</h4>
                  <p className="text-xs text-slate-400">{reason.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
