import { AUDIENCE_DATA } from "../data";
import { 
  GraduationCap, 
  BookOpen, 
  Laptop, 
  Layers, 
  Milestone, 
  TrendingUp, 
  Terminal,
  User,
  Sparkles
} from "lucide-react";

// Fallback lookup dictionary mapping string representation to Lucide elements safely
const ICON_LOOKUP: Record<string, any> = {
  GraduationCap: GraduationCap,
  BookOpen: BookOpen,
  Laptop: Laptop,
  Layers: Layers,
  Milestone: Milestone,
  TrendingUp: TrendingUp,
  Terminal: Terminal
};

export default function Audience() {
  return (
    <div id="audience" className="py-20 bg-white relative scroll-mt-24">
      {/* Background radial soft light */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#1565C0] text-xs font-bold font-mono tracking-widest uppercase bg-blue-50 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
            <User className="w-3.5 h-3.5" />
            Designed For You
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 mt-4 tracking-tight leading-tight">
            Who Can Join this <span className="text-[#FF6B00]">Python DSA</span> Workshop?
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Whether you are starting from absolute scratch or looking to clean up your complexity formulas before product placement drives, we have you covered.
          </p>
        </div>

        {/* Audience mapping cards frame */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {AUDIENCE_DATA.map((aud) => {
            const IconComponent = ICON_LOOKUP[aud.iconName] || Terminal;
            return (
              <div
                key={aud.id}
                className="bg-white border border-slate-100 hover:border-[#1565C0]/20 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-left flex flex-col group relative"
              >
                {/* Visual side accent card border */}
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-transparent group-hover:bg-[#1565C0] transition-colors rounded-l-2xl"></div>

                <div className="bg-blue-50 border border-blue-100/40 p-2.5 rounded-xl text-[#1565C0] w-11 h-11 flex items-center justify-center mb-5 group-hover:bg-[#1565C0] group-hover:text-white transition-colors">
                  <IconComponent className="w-5.5 h-5.5" />
                </div>
                
                <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-[#FF6B00] transition-colors mb-2">
                  {aud.title}
                </h3>
                
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4">
                  {aud.description}
                </p>

                {/* Micro checklist item */}
                <span className="text-[10px] uppercase tracking-wide font-mono text-[#1565C0] bg-blue-50/50 border border-blue-100 px-2.5 py-0.5 rounded self-start font-bold">
                  Eligible entry
                </span>
              </div>
            );
          })}

          {/* Combined CTA card to drive urgency */}
          <div className="bg-gradient-to-r from-orange-500 to-[#FF6B00] p-6 rounded-2xl flex flex-col justify-between text-left shadow-lg text-white">
            <div>
              <span className="text-orange-100 font-mono text-[9px] uppercase tracking-widest font-extrabold block mb-1">
                LIMITED CAPACITY SEATS
              </span>
              <h3 className="font-display font-extrabold text-lg mt-1 tracking-tight leading-snug">
                Join 1,200+ Peers Gearing Up This Week!
              </h3>
              <p className="text-orange-50 text-[11px] leading-relaxed mt-2">
                Hurry! 90% of admission vouchers are already claimed in the Delhi/Bangalore sectors. Secure entry before the window shuts.
              </p>
            </div>
            <button
              onClick={() => {
                const formEl = document.getElementById("registration-form");
                if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
              }}
              className="cursor-pointer font-bold text-xs uppercase bg-slate-950 text-white border border-slate-900 hover:bg-slate-900 px-4 py-2.5 rounded-xl mt-6 text-center shadow-lg hover:scale-[1.01] transition-all flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
              Secure Seat Now
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
