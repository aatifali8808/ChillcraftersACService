import { motion } from "motion/react";
import { Star } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      name: "Rohan Sharma",
      area: "Navi Mumbai",
      text: "Exceptional service. The team arrived on time, was extremely polite, and left the place cleaner than they found it. My AC is chilling perfectly.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150"
    },
    {
      name: "Priya Patel",
      area: "Thane",
      text: "Booked them for jet cleaning. The transparency in pricing and the quality of work is unmatched. Way better than generic marketplace apps.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
      name: "Amit Desai",
      area: "Mumbai Central",
      text: "My office AC broke down during peak summer. They sent someone within an hour. Highly professional troubleshooting and genuine parts used.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[#0A192F] uppercase mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Loved by our Customers</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 relative"
            >
              <div className="flex text-amber-400 mb-6">
                {[...Array(review.rating)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-sm text-slate-500">{review.area}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
