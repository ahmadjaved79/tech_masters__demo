import { useState, useEffect } from "react";
import { Sparkles, Flame, Play, Clock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface StickyCTAProps {
  seatsLeft: number;
}

export default function StickyCTA({ seatsLeft }: StickyCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      // Show after scrolling 500px, hide near the bottom registration form (around its scroll height)
      const isPastHero = scrollPosition > 500;
      const isBeforeFooter = scrollPosition < docHeight - winHeight - 650;

      setVisible(isPastHero && isBeforeFooter);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToForm = () => {
    const element = document.getElementById("registration-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 text-white shadow-2xl py-3 px-4 sm:px-6 lg:px-8 flex items-center justify-between pointer-events-auto"
        >
          {/* Layout alignment container */}
          <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-3">
            
            {/* Left informational block */}
            <div className="flex items-center gap-3 text-left">
              <div className="hidden md:flex bg-orange-500/15 p-2 rounded-xl text-orange-400">
                <Play className="w-4 h-4 fill-orange-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-extrabold text-xs sm:text-sm tracking-tight">
                    DSA USING PYTHON WORKSHOP
                  </span>
                  <span className="bg-orange-500 text-white font-mono text-[9px] uppercase font-bold px-1.5 py-0.5 rounded leading-none shrink-0 animate-pulse">
                    Save 50%
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-0.5 text-[10px] text-slate-400 font-sans">
                  <span className="flex items-center gap-1 font-mono text-orange-400 font-semibold">
                    <Flame className="w-3 h-3 fill-orange-500 text-orange-500" />
                    Only {seatsLeft} Seats Left!
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3 text-blue-400" />
                    Sunday 6PM
                  </span>
                </div>
              </div>
            </div>

            {/* Right Booking CTA row */}
            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end shrink-0">
              <div className="text-right">
                <div className="flex items-baseline gap-1.5 leading-none">
                  <span className="font-display font-black text-lg text-white">₹49</span>
                  <span className="line-through text-slate-500 text-[10px]">₹99</span>
                </div>
                <span className="text-[9px] text-[#FF6B00] font-semibold lowercase tracking-wide block leading-none mt-1">Limited Voucher offer</span>
              </div>

              <button
                onClick={handleScrollToForm}
                className="cursor-pointer flex-1 sm:flex-initial bg-slate-950 hover:bg-slate-850 text-white font-sans font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-xl border border-slate-750/80 shadow-lg hover:translate-y-[-1px] transition-all flex items-center justify-center gap-1.5 font-sans"
              >
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                Reserve For ₹49 Now
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
