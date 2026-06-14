import { Star, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                R
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">Chillcrafters AC Service</span>
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Premium AC installation, repair, and maintenance. Keeping you cool and comfortable with fast, reliable, and professional service.
            </p>
            {/* Google review placeholder */}
            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10 w-max">
              <div className="flex text-amber-400">
                <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current text-white/20" />
              </div>
              <span className="text-sm font-semibold text-white">4.9 on Google</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Why Us', 'Testimonials', 'Pricing', 'FAQ'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="hover:text-sky-400 transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-bold mb-6">Service Areas</h4>
            <ul className="space-y-3">
              {['Kalyanphata', 'Mumbra', 'Thane', 'Navi Mumbai'].map(area => (
                <li key={area} className="flex items-center gap-2 text-sm">
                   <MapPin className="w-3 h-3 text-sky-400 opacity-50" /> {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919876543210" className="flex items-start gap-3 group">
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-sky-500/20 transition-colors">
                    <Phone className="w-4 h-4 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Call Us 24/7</div>
                    <div className="font-semibold text-white group-hover:text-sky-400 transition-colors">+91 98765 43210</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:aatifali8808@gmail.com" className="flex items-start gap-3 group">
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-sky-500/20 transition-colors">
                    <Mail className="w-4 h-4 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Email</div>
                    <div className="font-semibold text-white group-hover:text-sky-400 transition-colors">aatifali8808@gmail.com</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Chillcrafters AC Service. All rights reserved.</p>
          <div className="flex gap-4">
             <a href="#" className="hover:text-white transition">Privacy Policy</a>
             <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
