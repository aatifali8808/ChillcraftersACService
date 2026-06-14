import { motion } from "motion/react";
import { Check } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Basic Dry Service",
      price: "499",
      description: "Quick filter cleaning and basic health check.",
      features: ["Filter cleaning", "Gas level check", "Outer unit wiping", "Standard 15-day warranty"]
    },
    {
      name: "Jet Deep Cleaning",
      price: "1,299",
      popular: true,
      description: "Intense water-jet cleaning for severe cooling issues.",
      features: ["Full indoor unit foam wash", "Chemical coil cleaning", "Drain pipe unblocking", "Outdoor unit pressure wash", "60-day service warranty"]
    },
    {
      name: "Premium AMC",
      price: "2,499",
      description: "Year-round protection and maintenance limits.",
      features: ["2 Free Jet Services / Year", "No visiting charges", "Priority emergency booking", "Discounts on spare parts", "Valid for 12 months"]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-[#0A192F] uppercase mb-3">Transparent Prices</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Affordable & Clear</h3>
          <p className="text-slate-600">No hidden costs, no surprise materials fees. What you see is exactly what you get.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 border ${
                plan.popular ? "border-blue-600 shadow-xl scale-100 md:scale-105 z-10" : "border-slate-200 shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Recommended
                </div>
              )}
              
              <h4 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h4>
              <p className="text-sm text-slate-500 mb-6 h-10">{plan.description}</p>
              
              <div className="mb-8 flex items-end gap-1">
                <span className="text-4xl font-display font-black text-slate-900">₹{plan.price}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <Check className="w-5 h-5 text-blue-600 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#booking"
                className={`block text-center w-full py-3.5 rounded-xl font-semibold transition-colors ${
                  plan.popular 
                    ? "bg-[#0A192F] text-white hover:bg-slate-800"
                    : "bg-slate-100 text-slate-900 border border-slate-200 hover:bg-slate-200"
                }`}
              >
                Select Plan
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
