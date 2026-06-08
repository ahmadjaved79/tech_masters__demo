import { useState, useEffect } from "react";
import { Menu, X, Flame, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import Logo from "./Logo";

interface NavbarProps {
  seatsLeft: number;
}

export default function Navbar({ seatsLeft }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-blue-100"
          : "bg-white/70 backdrop-blur-sm py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 cursor-pointer group select-none"
          >
            <div className="group-hover:scale-105 transition-transform shrink-0">
              <Logo size={46} />
            </div>
            <div className="flex flex-col items-start justify-center">
              <span className="font-display font-black text-base sm:text-[17px] tracking-tight leading-none">
                <span className="text-[#1565C0]">ACADEMY OF</span> <span className="text-[#FF6B00]">TECH MASTERS</span>
              </span>
              {/* Thin horizontal line divider matching the uploaded logo */}
              <div className="w-full h-[1px] bg-slate-300 mt-1 mb-0.5"></div>
              <div className="text-[8px] sm:text-[9px] uppercase tracking-[0.08em] font-extrabold font-sans leading-none flex items-center gap-1">
                <span className="text-[#FF6B00]">LEARN TODAY,</span>
                <span className="text-[#1565C0]">LEAD TOMORROW</span>
              </div>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => handleScrollTo("curriculum")}
              className="font-sans text-sm font-medium text-slate-600 hover:text-[#1565C0] transition-colors cursor-pointer"
            >
              Curriculum
            </button>
            <button
              onClick={() => handleScrollTo("benefits")}
              className="font-sans text-sm font-medium text-slate-600 hover:text-[#1565C0] transition-colors cursor-pointer"
            >
              Why Attend
            </button>
            <button
              onClick={() => handleScrollTo("audience")}
              className="font-sans text-sm font-medium text-slate-600 hover:text-[#1565C0] transition-colors cursor-pointer"
            >
              Who Can Join
            </button>
            <button
              onClick={() => handleScrollTo("faq")}
              className="font-sans text-sm font-medium text-slate-600 hover:text-[#1565C0] transition-colors cursor-pointer"
            >
              FAQs
            </button>
          </div>

          {/* Action Area (Urgency counter + CTA) */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Live Counter Widget */}
            <motion.div 
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="flex items-center gap-1.5 bg-orange-50 border border-orange-200 px-3 py-1.5 rounded-full text-xs font-semibold text-orange-700"
            >
              <Flame className="w-4 h-4 text-[#FF6B00] fill-orange-500 animate-pulse" />
              <span>Only {seatsLeft} Seats Left!</span>
            </motion.div>

            <button
              id="nav-cta-btn"
              onClick={() => handleScrollTo("registration-form")}
              className="cursor-pointer font-sans text-xs font-bold uppercase tracking-wider bg-slate-950 hover:bg-slate-850 text-white px-5 py-2.5 rounded-xl border border-slate-800 shadow-md hover:shadow-lg hover:shadow-slate-950/20 hover:translate-y-[-1px] active:translate-y-[1px] transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              Register Now @ ₹49
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Live Counter (Mini) */}
            <div className="sm:hidden flex items-center gap-1 bg-orange-50 border border-orange-200 px-2 py-1 rounded-full text-[10px] font-bold text-[#FF6B00]">
              <Flame className="w-3.5 h-3.5 text-[#FF6B00] animate-pulse" />
              <span>{seatsLeft} Left</span>
            </div>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-700 hover:text-[#1565C0] hover:bg-slate-100 rounded-lg transition-all"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-white/95 border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 flex flex-col gap-4 absolute top-full left-0 right-0"
        >
          <div className="flex flex-col gap-2">
            <button
              onClick={() => handleScrollTo("curriculum")}
              className="text-left py-2.5 px-3 rounded-lg text-slate-700 hover:bg-slate-50 font-medium transition-colors"
            >
              Workshop Curriculum
            </button>
            <button
              onClick={() => handleScrollTo("benefits")}
              className="text-left py-2.5 px-3 rounded-lg text-slate-700 hover:bg-slate-50 font-medium transition-colors"
            >
              Why You Should Attend
            </button>
            <button
              onClick={() => handleScrollTo("audience")}
              className="text-left py-2.5 px-3 rounded-lg text-slate-700 hover:bg-slate-50 font-medium transition-colors"
            >
              Who is this Workshop For?
            </button>
            <button
              onClick={() => handleScrollTo("faq")}
              className="text-left py-2.5 px-3 rounded-lg text-slate-700 hover:bg-slate-50 font-medium transition-colors"
            >
              Frequently Asked Questions
            </button>
          </div>

          <div className="border-t border-slate-100 pt-3 flex flex-col gap-3">
            <div className="flex items-center justify-between px-3 text-sm">
              <span className="text-slate-500 font-medium">Workshop Entry Fee:</span>
              <div className="flex items-center gap-1.5">
                <span className="line-through text-slate-400 font-bold">₹99</span>
                <span className="text-orange-600 font-extrabold text-base">₹49 only</span>
              </div>
            </div>
            
            <button
              onClick={() => handleScrollTo("registration-form")}
              className="w-full text-center font-sans font-bold bg-slate-950 hover:bg-slate-850 text-white py-3 rounded-xl shadow-lg border border-slate-800 text-sm tracking-wider"
            >
              RESERVE MY SEAT NOW
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
