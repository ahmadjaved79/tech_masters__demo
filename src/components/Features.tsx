import { useState } from "react";
import { CURRICULUM_DATA, BENEFITS_DATA } from "../data";
import { 
  Code2, 
  Cpu, 
  Briefcase, 
  Keyboard, 
  UserCheck, 
  Award, 
  ChevronDown, 
  BookOpen, 
  Clock, 
  Play, 
  Check, 
  Sparkles,
  Zap
} from "lucide-react";

// Robust icon dictionary to avoid runtime import string evaluations
const ICON_MAP: Record<string, any> = {
  Code2: Code2,
  Cpu: Cpu,
  SearchCode: Code2, // Map to Code2 as stable fallback
  Briefcase: Briefcase,
  Keyboard: Keyboard,
  UserCheck: UserCheck,
  Award: Award
};

export default function Features() {
  const [activeCurriculum, setActiveCurriculum] = useState<string | null>("learn-1");

  const toggleCurriculum = (id: string) => {
    setActiveCurriculum(activeCurriculum === id ? null : id);
  };

  return (
    <div className="py-20 bg-slate-50/50 dots-overlay border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION 1: WHAT YOU WILL LEARN ================= */}
        <section id="curriculum" className="scroll-mt-24 mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#1565C0] text-xs font-bold font-mono tracking-widest uppercase bg-blue-50 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5" />
              Syllabus Overview
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 mt-4 tracking-tight leading-tight">
              What You Will Learn in <span className="text-[#FF6B00]">90 Minutes</span>
            </h2>
            <p className="text-slate-600 mt-4 text-lg sm:text-xl leading-relaxed">
              Our workshop is optimized to skip generic filler theories and drill down into the absolute core patterns tech companies look for.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Interactive Module Selector */}
            <div className="lg:col-span-7 space-y-4">
              {CURRICULUM_DATA.map((item, index) => {
                const isOpen = activeCurriculum === item.id;
                return (
                  <div
                    key={item.id}
                    className={`rounded-2xl transition-all duration-300 border ${
                      isOpen
                        ? "bg-white border-[#1565C0] shadow-lg shadow-blue-500/5 ring-1 ring-blue-50/50"
                        : "bg-white/80 border-slate-100 hover:border-slate-300 hover:bg-white"
                    }`}
                  >
                    <button
                      onClick={() => toggleCurriculum(item.id)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        {/* Number Indicator */}
                        <div className={`p-2.5 rounded-xl font-mono text-xs font-extrabold w-10 h-10 flex items-center justify-center border transition-colors ${
                          isOpen
                            ? "bg-[#1565C0] text-white border-blue-600"
                            : "bg-slate-50 text-slate-500 border-slate-200"
                        }`}>
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <div>
                          <h3 className="font-display font-bold text-sm sm:text-base text-slate-950 group-hover:text-blue-700 transition-colors">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-500">
                            <span className="flex items-center gap-1 font-mono">
                              <Clock className="w-3.5 h-3.5 text-[#FF6B00]" />
                              Duration: {item.duration}
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className="font-sans font-medium text-blue-600 bg-blue-50/50 px-2 py-0.5 rounded">
                              Core DSA Pattern
                            </span>
                          </div>
                        </div>
                      </div>

                      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-600" : ""}`} />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 border-t border-slate-50">
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                          {item.description}
                        </p>
                        
                        {/* Subtopics Checklist grids */}
                        <div className="bg-slate-50/65 rounded-xl p-4 border border-slate-100">
                          <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#FF6B00] block mb-2.5">
                            Key Lesson Subtopics:
                          </span>
                          <div className="grid sm:grid-cols-2 gap-2.5">
                            {item.topics?.map((topic, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                                <div className="bg-emerald-500/10 text-emerald-600 rounded p-0.5">
                                  <Check className="w-3.5 h-3.5" />
                                </div>
                                <span className="font-medium font-mono">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column: Key Takeaways Poster/Teaser Widget */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#1565C0] to-[#0A3D7C] text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
              {/* Background accent lines */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-orange-400/10 rounded-full blur-2xl -z-10"></div>
              
              <div className="relative z-10">
                <span className="bg-orange-500 text-white text-[10px] tracking-widest font-mono font-extrabold uppercase px-2.5 py-1 rounded">
                  WORKSHOP SPECIAL
                </span>
                
                <h3 className="font-display font-extrabold text-2xl tracking-normal mt-4 leading-tight">
                  Why settle for dry theory lessons?
                </h3>
                
                <p className="text-blue-100 mt-2 text-sm leading-relaxed">
                  We use an interactive workspace with step-by-step whiteboard visuals to trace stack frames, pointer movements, and recursion trees live.
                </p>

                <div className="space-y-4 mt-8 border-t border-blue-400/25 pt-6">
                  <div className="flex gap-3">
                    <div className="bg-white/10 p-2 rounded-lg text-orange-400 self-start mt-0.5">
                      <Play className="w-4 h-4 fill-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-sm">Interactive Python Tracing</h4>
                      <p className="text-xs text-blue-200 mt-0.5">See actual arrays shift, pivot, and search in computer memory in real time.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="bg-white/10 p-2 rounded-lg text-orange-400 self-start mt-0.5">
                      <Zap className="w-4 h-4 fill-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-sm">Interview Cheat Sheets</h4>
                      <p className="text-xs text-blue-200 mt-0.5">Grab hand-crafted PDF summaries covering 15 must-know algorithmic templates.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="bg-white/10 p-2 rounded-lg text-orange-400 self-start mt-0.5">
                      <Sparkles className="w-4 h-4 fill-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-sm">Verifiable e-Certificate</h4>
                      <p className="text-xs text-blue-200 mt-0.5">Authorized with verifiable credentials to embed in your LinkedIn.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-black/20 p-4 rounded-2xl border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-300">Exclusive cost:</span>
                    <p className="font-display font-extrabold text-xl text-orange-400">₹49 Only</p>
                  </div>
                  <button 
                    onClick={() => {
                      const element = document.getElementById("registration-form");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="cursor-pointer bg-white text-[#1565C0] hover:bg-orange-500 hover:text-white font-bold text-xs uppercase px-4 py-2.5 rounded-lg transition-all"
                  >
                    Hold My Slot
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= SECTION 2: WHY ATTEND ================= */}
        <section id="benefits" className="scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6B00] text-xs font-bold font-mono tracking-widest uppercase bg-orange-50 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              Impactful Coachings
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 mt-4 tracking-tight leading-tight">
              Elevate Your Knowledge. <span className="text-[#1565C0]">Why Attend?</span>
            </h2>
            <p className="text-slate-600 mt-4 text-lg sm:text-xl leading-relaxed">
              Every detail is engineered to help engineering candidates pass screenings, write optimal python programs, and gain systemic analytics logic.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {BENEFITS_DATA.map((benefit) => {
              const IconComp = ICON_MAP[benefit.iconName] || Award;
              return (
                <div
                  key={benefit.id}
                  className="bg-white border border-slate-100 hover:border-orange-200 p-6 rounded-2xl shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all duration-300 text-left flex flex-col group"
                >
                  <div className="bg-orange-50 border border-orange-100/50 p-2.5 rounded-xl text-[#FF6B00] w-12 h-12 flex items-center justify-center mb-5 group-hover:bg-[#FF6B00] group-hover:text-white transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-[#1565C0] transition-colors mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
            
            {/* CTA Extra block card */}
            <div className="bg-gradient-to-br from-[#1565C0]/5 to-transparent border-2 border-dashed border-[#1565C0]/20 p-6 rounded-2xl flex flex-col justify-between text-left relative overflow-hidden group">
              <div>
                <span className="font-display font-extrabold text-[#1565C0] block text-xl mb-1.5">
                  And much more...
                </span>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Join 1,200+ students from B.Tech, MCA, BCA & similar computer backgrounds joining on Sunday.
                </p>
              </div>
              <button
                onClick={() => {
                  const element = document.getElementById("registration-form");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="cursor-pointer text-xs font-bold text-[#FF6B00] group-hover:text-orange-600 flex items-center gap-1.5 mt-5 tracking-wide"
              >
                Claim Booking
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}

interface ArrowRightProps {
  className?: string;
}

function ArrowRight({ className }: ArrowRightProps) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2059/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}
