import React, { useState } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    location: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally handle logic, e.g. API call
    alert("Booking request sent! We will contact you shortly.");
    setFormData({ name: "", phone: "", service: "", location: "" });
  };

  return (
    <section id="booking" className="py-24 bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 lg:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative rounded-3xl overflow-hidden"
            >
              <img src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=800" alt="Tech at work" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
              
              {/* Promo banner on image */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A192F] to-transparent p-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 inline-block">
                  <p className="text-white font-bold xl:text-xl">Get 20% Off</p>
                  <p className="text-slate-200 text-sm">On your first AC service.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <h2 className="text-3xl font-display font-bold text-slate-900">Quick Service Booking</h2>
              </div>
              <p className="text-slate-500 mb-8 max-w-md text-sm">Schedule your service. A certified technician will be assigned to you immediately.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4 flex-1">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-1 block">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 text-sm transition-colors"
                      placeholder="Aatif Ali"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-1 block">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 text-sm transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-1 block">Service Type</label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 text-sm transition-colors text-slate-600 mb-1"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="repair">AC Repair & Fix</option>
                    <option value="service">Jet Cleaning Service</option>
                    <option value="gas">Gas Refilling</option>
                    <option value="install">Installation / Uninstall</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="location" className="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-1 block">Location</label>
                  <input
                    id="location"
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 text-sm transition-colors"
                    placeholder="Enter City / Area"
                  />
                </div>

                <div className="mt-4 pt-4">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white flex items-center justify-center gap-2 py-4 rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition"
                  >
                    Book Technician in 30s <Send className="w-4 h-4 ml-1" />
                  </button>
                  <p className="text-center text-[10px] text-slate-400 mt-3">No hidden costs. 100% genuine spare parts used.</p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
