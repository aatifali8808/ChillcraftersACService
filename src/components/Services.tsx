import { motion } from "motion/react";
import { Wrench, Wind, Droplets, SprayCan as Spray, Snowflake, Building2 } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "AC Repair",
      description: "Fast diagnosis and repair for all major brands. Cooling issues, weird noises, or leaks fixed.",
      icon: Wrench,
      popular: true,
    },
    {
      title: "AC Installation",
      description: "Professional installation for split and window ACs with clean and secure mounting.",
      icon: Snowflake,
    },
    {
      title: "AC Gas Filling",
      description: "Complete leak check and precise refrigerant recharge to restore maximum cooling.",
      icon: Wind,
    },
    {
      title: "Jet Deep Cleaning",
      description: "High-pressure water jet cleaning to remove stubborn dirt, pet hair, and mold from coils.",
      icon: Spray,
    },
    {
      title: "Routine Maintenance",
      description: "Preventive dry and wet service to extend AC life and reduce electricity bills.",
      icon: Droplets,
    },
    {
      title: "Commercial AC",
      description: "AMC and on-demand maintenance for offices, restaurants, and retail spaces.",
      icon: Building2,
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[#0A192F] uppercase mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Premium AC Solutions</h3>
          <p className="text-lg text-slate-600">Expert services tailored for your comfort. We handle everything from minor repairs to complete overhauls.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white border border-slate-200 shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {service.popular && (
                <span className="absolute top-6 right-6 bg-blue-100/50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full border border-blue-200">
                  Most Popular
                </span>
              )}
              <div className="w-14 h-14 bg-[#0A192F] text-white rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-slate-300 transition-transform">
                <service.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
