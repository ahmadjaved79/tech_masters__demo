import { Calendar, Clock, Video, Hourglass, Sparkles, MapPin, CheckCircle, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export default function SessionDetails() {
  return (
    <div className="py-16 bg-[#070e27] relative overflow-hidden text-white grid-overlay">
      {/* Background graphic elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-orange-400 text-xs font-mono font-bold uppercase tracking-wider bg-orange-950/60 border border-orange-900 px-3 py-1 rounded-full">
            MARK YOUR CALENDAR
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight mt-3">
            Workshop Live Session Details
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-base mt-3">
            Convenient evening slot designed for students and working enthusiasts across India.
          </p>
        </div>

        {/* Master Card representing entry pass */}
        <div className="max-w-4xl mx-auto bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          
          {/* Ticket styling dashes inside borders */}
          <div className="hidden md:block absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-12 bg-[#070e27] rounded-r-full border-r border-[#1565C0]/20"></div>
          <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-12 bg-[#070e27] rounded-l-full border-l border-[#1565C0]/20"></div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* Left Grid: Ticket Details */}
            <div className="space-y-6 text-left">
              <div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest font-extrabold block mb-2">
                  OFFICIAL ACCESS PASS
                </span>
                <h3 className="font-display font-semibold text-xl sm:text-2xl text-white">
                  DSA with Python Masterclass
                </h3>
                <div className="h-1 w-16 bg-gradient-to-r from-[#FF6B00] to-orange-400 rounded-full mt-3"></div>
              </div>

              {/* Grid lists */}
              <div className="grid sm:grid-cols-2 gap-4">
                
                {/* DATE COMPONENT */}
                <div className="flex gap-3 bg-slate-950/50 p-3.5 rounded-xl border border-slate-800/80">
                  <div className="bg-orange-500/10 p-2 rounded-lg text-orange-400 self-start">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-400">Date</span>
                    <p className="text-xs sm:text-sm font-bold mt-0.5 text-white">June 14, 2026</p>
                    <span className="text-[9px] font-medium text-amber-500 font-sans block mt-0.5">Sunday Session</span>
                  </div>
                </div>

                {/* TIME COMPONENT */}
                <div className="flex gap-3 bg-slate-950/50 p-3.5 rounded-xl border border-slate-800/80">
                  <div className="bg-blue-500/10 p-2 rounded-lg text-blue-400 self-start">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-400">Time</span>
                    <p className="text-xs sm:text-sm font-bold mt-0.5 text-white">6:00 PM - 7:30 PM (IST)</p>
                    <span className="text-[9px] font-medium text-blue-400 font-sans block mt-0.5">Evening Slot</span>
                  </div>
                </div>

                {/* MODE COMPONENT */}
                <div className="flex gap-3 bg-slate-950/50 p-3.5 rounded-xl border border-slate-800/80">
                  <div className="bg-emerald-500/10 p-2 rounded-lg text-emerald-400 self-start">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-400">Location</span>
                    <p className="text-xs sm:text-sm font-bold mt-0.5 text-white">Zoom Webinar</p>
                    <span className="text-[9px] font-medium text-emerald-400 font-sans block mt-0.5">Direct calendar join</span>
                  </div>
                </div>

                {/* DURATION COMPONENT */}
                <div className="flex gap-3 bg-slate-950/50 p-3.5 rounded-xl border border-slate-800/80">
                  <div className="bg-purple-500/10 p-2 rounded-lg text-purple-400 self-start">
                    <Hourglass className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-400">Length</span>
                    <p className="text-xs sm:text-sm font-bold mt-0.5 text-white">90 Minutes</p>
                    <span className="text-[9px] font-medium text-purple-400 font-sans block mt-0.5">Highly Interactive</span>
                  </div>
                </div>

              </div>

              {/* Secure Checkout Trust stamp */}
              <div className="flex items-center gap-2 text-[11px] text-slate-400 bg-slate-950/80 px-4 py-2.5 rounded-xl border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Authorized credentials provided immediately upon checking out.</span>
              </div>
            </div>

            {/* Right Grid: Visual checklist and CTA widget */}
            <div className="bg-[#1565C0]/5 rounded-2xl border border-[#1565C0]/15 p-5 md:p-6 text-left relative overflow-hidden">
              <span className="text-[#FF6B00] text-[9px] uppercase font-mono font-extrabold tracking-widest block mb-1">
                PREPARATION CHECKLIST
              </span>
              <h4 className="font-display font-bold text-base text-white">
                How to prepare for Sunday:
              </h4>

              <ul className="space-y-3 mt-4 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span>Ensure your desktop or smartphone has Zoom updated and configured.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span>Install Python 3.9+ or sign up on Google Colab before 5:45 PM.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span>Keep a notepad handy to trace algorithmic pointers alongside the Master.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span>Join exactly at 5:55 PM to download the workshop resource bundle.</span>
                </li>
              </ul>

              <div className="border-t border-slate-800/85 pt-4 mt-6">
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-slate-400">Sunday Access Price</span>
                  <span className="text-white font-mono bg-blue-900/50 px-2 py-0.5 rounded border border-blue-700/60 font-semibold">₹49 ONLY</span>
                </div>
                
                <button
                  onClick={() => {
                    const el = document.getElementById("registration-form");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="cursor-pointer w-full text-center bg-slate-950 hover:bg-slate-850 text-white py-3 rounded-xl border border-slate-850 font-bold text-xs uppercase tracking-wider shadow-lg hover:translate-y-[-1px] transition-all block"
                >
                  Book Seat Now
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
