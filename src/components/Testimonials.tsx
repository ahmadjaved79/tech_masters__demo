import { TESTIMONIALS_DATA } from "../data";
import { Star, Quote, GraduationCap, Award, MessageSquare } from "lucide-react";

export default function Testimonials() {
  return (
    <div className="py-20 bg-slate-50 relative border-t border-slate-100 scroll-mt-24">
      {/* Background radial accent flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-100/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#FF6B00] text-xs font-bold font-mono tracking-widest uppercase bg-orange-50 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-[#FF6B00]" />
            STUDENT REVIEWS
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 mt-4 tracking-tight leading-tight">
            Loved by Over <span className="text-[#1565C0]">15,000+</span> Tech Masters
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Read how other engineering scholars and fresh graduates cracked technical tests and scaled their algorithmic confidence under our direct mentorship.
          </p>
        </div>

        {/* Testimonials Grids */}
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-slate-100 hover:border-blue-100 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group text-left"
            >
              <div className="absolute top-6 right-6 text-slate-100 group-hover:text-blue-50 transition-colors">
                <Quote className="w-10 h-10 transform rotate-180" />
              </div>

              <div>
                {/* Visual Rating stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-sans italic">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Student info card */}
              <div className="flex items-center gap-3.5 border-t border-slate-100 pt-5 mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#1565C0]/20 shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="font-display font-bold text-xs sm:text-sm text-slate-950 truncate">
                    {testimonial.name}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-[#1565C0] font-semibold flex items-center gap-1 truncate">
                    <GraduationCap className="w-3.5 h-3.5 shrink-0" />
                    {testimonial.college}
                  </p>
                  
                  {testimonial.company && (
                    <span className="inline-flex items-center gap-1 text-[9px] font-mono leading-none font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded mt-1">
                      <Award className="w-2.5 h-2.5" />
                      {testimonial.role} ({testimonial.company})
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Quick overall score layout */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 mt-12 max-w-lg mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm font-semibold text-slate-800">
            <span>Overall Score:</span>
            <div className="flex items-center gap-0.5 text-amber-400 ml-1.5">
              <Star className="w-4 h-4 fill-amber-400 text-amber40" />
              <Star className="w-4 h-4 fill-amber-400 text-amber40" />
              <Star className="w-4 h-4 fill-amber-400 text-amber40" />
              <Star className="w-4 h-4 fill-amber-400 text-amber40" />
              <Star className="w-4 h-4 fill-amber-400 text-amber40" />
            </div>
            <strong className="text-[#1565C0] ml-1">4.8 / 5.0</strong>
          </div>
          <span className="text-[10px] text-slate-400 font-mono font-medium lowercase">Verified via workshop registries</span>
        </div>

      </div>
    </div>
  );
}
