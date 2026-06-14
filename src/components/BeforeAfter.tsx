import React, { useState, useRef, useEffect } from "react";
import { MoveHorizontal } from "lucide-react";

export function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Use dummy, royalty-free images showcasing an AC unit
  const dirtyImage = "https://images.unsplash.com/photo-1542038383377-50b50302b112?auto=format&fit=crop&q=80&w=1200"; // Assume dirty/old look
  const cleanImage = "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=1200"; // Assume clean look

  const handleDrag = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setPosition(percent);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    handleDrag(e.clientX);
  };

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (isDragging) handleDrag(e.clientX);
    };
    const handlePointerUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
    }
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isDragging]);

  return (
    <section className="py-24 bg-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold tracking-widest text-[#0A192F] uppercase mb-3">Actual Results</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900">See The Difference</h3>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">Our deep jet cleaning removes months of built-up dust and mold, giving you fresher and significantly colder air.</p>
          </div>

          <div 
            ref={containerRef}
            className="relative w-full max-w-4xl mx-auto h-[300px] md:h-[500px] rounded-3xl overflow-hidden cursor-ew-resize select-none touch-none shadow-2xl border-4 border-white ring-1 ring-slate-200"
            onPointerDown={handlePointerDown}
          >
          {/* After (Clean) - absolute bottom layer */}
          <div className="absolute inset-0">
            <img src={cleanImage} alt="After AC Cleaning" className="w-full h-full object-cover" draggable={false} />
            <div className="absolute top-4 left-4 bg-green-500/90 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm z-10">After</div>
          </div>

          {/* Before (Dirty) - overlaid with clip path */}
          <div 
            className="absolute inset-0 z-10 pointer-events-none"
            style={{ clipPath: `polygon(${position}% 0, 100% 0, 100% 100%, ${position}% 100%)` }}
          >
            <img src={dirtyImage} alt="Before AC Cleaning" className="w-full h-full object-cover saturate-50 contrast-125 brightness-75" draggable={false} />
            <div className="absolute top-4 right-4 bg-red-500/90 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm">Before</div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl text-slate-800">
              <MoveHorizontal className="w-5 h-5" />
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
