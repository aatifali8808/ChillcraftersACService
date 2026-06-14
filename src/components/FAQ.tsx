import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

export function FAQ() {
  const faqs = [
    {
      q: "How fast can you reach my location?",
      a: "We offer an Emergency VIP service where our technicians reach within 60 minutes. Standard bookings usually have same-day availability within a 2-4 hour window."
    },
    {
      q: "Are your technicians certified?",
      a: "Yes, all our professionals undergo strict background verification and rigorous technical training. They are certified to work on all major AC brands."
    },
    {
      q: "Do you provide a warranty on repairs?",
      a: "Absolutely! We provide a 30-day warranty on all repairs and services, and extended warranties for spare parts as provided by the manufacturer."
    },
    {
      q: "What is the difference between dry service and jet cleaning?",
      a: "Dry service involves basic cleaning of external parts and filters. Jet deep cleaning uses an advanced pressure washer and foaming chemicals to thoroughly clean inner coils, drastically improving cooling."
    },
    {
      q: "Is gas filling included in standard service?",
      a: "No, gas (refrigerant) filling is a separate service. Our technician will check the gas levels during standard service and inform you if a top-up is genuinely required."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[#0A192F] uppercase mb-3">Questions?</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Frequently Asked</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={cn(
                "border rounded-2xl overflow-hidden transition-colors duration-300 bg-white",
                openIdx === i ? "border-blue-600 shadow-md" : "border-slate-200 shadow-sm hover:border-slate-300"
              )}
            >
              <button
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
                <span className="shrink-0 text-slate-500">
                  {openIdx === i ? <Minus className="text-blue-600" /> : <Plus />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
