import { motion } from "motion/react";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 sm:px-6",
        isScrolled ? "pt-2" : "pt-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
        <div className="flex items-center gap-2">
          {/* Logo representation */}
          <div className="w-10 h-10 rounded-lg bg-[#0A192F] flex items-center justify-center text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <span className="font-display font-bold text-xl tracking-tight uppercase text-slate-900 hidden sm:block">
            Chillcrafters <span className="text-blue-600">AC</span> Service
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {["Services", "Pricing", "Testimonials"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium hover:text-blue-600 transition-colors text-slate-600"
            >
              {item}
            </a>
          ))}
          <span className="text-sm font-medium hover:text-blue-600 cursor-pointer text-green-600 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Live Availability
          </span>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/919876543210"
            className="px-5 py-2.5 rounded-xl border border-slate-300 font-semibold hover:bg-slate-50 transition text-sm text-slate-700"
          >
            WhatsApp
          </a>
          <a
            href="#booking"
            className="px-5 py-2.5 bg-[#0A192F] text-white rounded-xl text-sm font-semibold shadow-lg hover:shadow-blue-900/20 transition"
          >
            Call 1800-Chillcrafters-AC
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-800 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-4"
        >
          {["Services", "Why Us", "Testimonials", "Pricing", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="block text-slate-600 font-medium py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <a href="tel:+919876543210" className="flex items-center justify-center gap-2 w-full py-3 bg-gray-50 rounded-lg text-blue-900 font-semibold border border-gray-200">
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a href="#booking" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center w-full py-3 bg-blue-900 text-white rounded-lg font-semibold">
              Book Service
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
