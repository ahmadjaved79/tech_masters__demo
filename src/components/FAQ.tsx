import { useState } from "react";
import { FAQ_DATA } from "../data";
import { HelpCircle, ChevronDown, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div id="faq" className="py-20 bg-white relative scroll-mt-24 border-t border-slate-100">
      {/* Background soft accent */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#1565C0] text-xs font-bold font-mono tracking-widest uppercase bg-blue-50 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            Support Queries
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 mt-4 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 font-sans text-sm sm:text-base mt-3">
            Got queries? We have laid out direct, transparent answers to save your time.
          </p>
        </div>

        {/* Collapsible Accordion Group */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-gradient-to-r from-blue-50/20 via-white to-orange-50/20 border-slate-200 shadow-md"
                    : "bg-white border-slate-100 hover:bg-slate-50/50 hover:border-slate-200"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-display font-bold text-sm sm:text-base text-slate-800 hover:text-[#1565C0] transition-colors">
                    {faq.question}
                  </span>
                  
                  <div className={`p-1.5 rounded-lg border transition-all ${
                    isOpen ? "bg-orange-50 border-orange-100 text-[#FF6B00] rotate-180" : "bg-slate-50 border-slate-100 text-slate-400"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 text-left border-t border-slate-100/50 pt-4">
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                          {faq.answer}
                        </p>
                        
                        {/* Instant guarantee stamp inside open answer */}
                        <div className="flex items-center gap-1.5 mt-4 text-[10px] text-[#1565C0] font-sans font-semibold bg-blue-50/50 border border-blue-100/40 rounded px-2.5 py-1 self-start inline-flex">
                          <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                          <span>100% Guaranteed Workshop Parameter</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

        {/* Support helper section block */}
        <div className="mt-12 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 hover:shadow-lg transition-shadow border border-slate-800">
          <div className="text-left">
            <span className="text-orange-400 text-[10px] uppercase font-mono font-extrabold tracking-widest block mb-1">
              STILL HAVE QUESTIONS?
            </span>
            <h4 className="font-display font-bold text-base sm:text-lg">
              Talk directly with Academy Admins
            </h4>
            <p className="text-slate-400 text-xs mt-1 font-sans">
              Connect to our helpline at +91 8019942233 for custom corporate / bulk college entries.
            </p>
          </div>

          <a
            href="tel:+918019942233"
            className="cursor-pointer font-sans text-xs font-extrabold tracking-wider bg-[#FF6B00] hover:bg-orange-650 text-white uppercase px-6 py-3.5 rounded-xl transition-all shadow-md shrink-0 block"
          >
            Call Helpline
          </a>
        </div>

      </div>
    </div>
  );
}
