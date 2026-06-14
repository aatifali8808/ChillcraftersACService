/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { BookingSection } from "./components/BookingSection";
import { BeforeAfter } from "./components/BeforeAfter";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { FloatingWidgets } from "./components/FloatingWidgets";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden font-sans text-slate-900">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <BookingSection />
        <BeforeAfter />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <FloatingWidgets />
    </div>
  );
}
