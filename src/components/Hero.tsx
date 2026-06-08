import { Sparkles, ArrowRight, Star, Clock, Video, Laptop, Play, ShieldAlert } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onRegisterClick: () => void;
  onCurriculumClick: () => void;
  seatsLeft: number;
}

export default function Hero({ onRegisterClick, onCurriculumClick, seatsLeft }: HeroProps) {
  return (
    <div className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-white grid-overlay">
      {/* Background radial gradients for styling */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60 -z-10 translate-x-12 -translate-y-12"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50 -z-10 -translate-x-12 translate-y-12"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text / Copy Section */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Badges Container */}
            <div className="flex flex-wrap gap-2.5 mb-6">
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-[#1565C0] text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Beginner to Advanced
              </motion.span>
              
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="inline-flex items-center gap-1.5 bg-orange-50 border border-orange-100 text-[#FF6B00] text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider"
              >
                <Clock className="w-3.5 h-3.5" />
                90-Minute Master Class
              </motion.span>
            </div>

            {/* Main Catchy Display Header */}
            <h1 className="font-display font-extrabold text-5xl sm:text-6.5xl lg:text-7.5xl tracking-tight text-slate-900 leading-none sm:leading-[1.05] mb-6">
              Master <span className="text-[#1565C0]">DSA</span> Using <br className="hidden sm:inline" />
              <span className="text-[#FF6B00]">PYTHON</span>
            </h1>

            {/* Tagline / Secondary Subheading */}
            <div className="border-l-4 border-[#FF6B00] pl-4 mb-6">
              <p className="font-sans font-bold text-slate-800 text-xl sm:text-2xl uppercase tracking-wide">
                Learn Today, Lead Tomorrow
              </p>
              <p className="text-sm sm:text-base text-slate-500 font-mono">
                Hosted by Academy of Tech Masters
              </p>
            </div>

            {/* Promotional Description */}
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
              Master Data Structures and Algorithms using Python with practical coding sessions, interview-focused problem solving, and real-world programming techniques. Join the most structured starter session for engineering students.
            </p>

            {/* Trust Badges / Social Proof stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 border-y border-slate-100 py-6 mb-8 max-w-lg">
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 block font-display">15k+</span>
                <span className="text-xs sm:text-sm text-slate-500 mt-0.5 block font-sans">Learners Trained</span>
              </div>
              <div className="border-l border-slate-100 pl-4 sm:pl-6">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#1565C0] block font-display flex items-center gap-1">
                  4.8 <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400 inline" />
                </span>
                <span className="text-xs sm:text-sm text-slate-500 mt-0.5 block font-sans">Student Rating</span>
              </div>
              <div className="border-l border-slate-100 pl-4 sm:pl-6">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#FF6B00] block font-display">₹49</span>
                <span className="text-xs sm:text-sm text-slate-500 mt-0.5 block font-sans">Affordable Entry</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onRegisterClick}
                className="cursor-pointer group flex-1 sm:flex-initial text-center bg-slate-950 hover:bg-slate-850 text-white font-sans font-bold text-base px-8 py-4 rounded-xl border border-slate-800 shadow-lg hover:shadow-slate-950/30 hover:translate-y-[-1px] active:translate-y-[1px] transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />
                <span>Register Now @ ₹49</span>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 group-hover:text-white transition-all" />
              </button>

              <button
                onClick={onCurriculumClick}
                className="cursor-pointer flex-1 sm:flex-initial text-center border-2 border-blue-100 bg-blue-50/50 hover:bg-blue-50 hover:border-[#1565C0]/30 text-[#1565C0] font-sans font-semibold text-sm px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Laptop className="w-4 h-4" />
                View Curriculum
              </button>
            </div>

            {/* Mini Urgency text */}
            <div className="mt-4 flex items-center gap-1.5 text-xs text-rose-600 font-semibold px-1">
              <ShieldAlert className="w-4 h-4 animate-bounce" />
              <span>Hurry! Only {seatsLeft} seat slots available before the price re-adjusts to ₹99.</span>
            </div>

          </div>

          {/* Right Visual Simulation Section */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            
            {/* Visual background rings */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-orange-100 rounded-3xl blur-2xl opacity-70 -z-10 animate-pulse-slow"></div>

            {/* Premium coding/educational board mockup */}
            <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              
              {/* Window Controls */}
              <div className="bg-slate-950 px-4 py-3 flex items-center justify-between border-b border-slate-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-[11px] font-mono font-medium text-slate-500 tracking-wider">
                  binary_search.py
                </div>
                <span className="bg-blue-950 text-blue-300 text-[9px] font-mono px-2 py-0.5 rounded-md border border-blue-900 uppercase tracking-widest font-bold">
                  PYTHON 3
                </span>
              </div>

              {/* Console/Workspace code layout simulating binary search */}
              <div className="p-5 font-mono text-[12px] sm:text-xs text-left leading-relaxed text-slate-300 space-y-4 overflow-x-auto">
                <div>
                  <span className="text-pink-400">def</span> <span className="text-blue-400">binary_search</span>(arr, target):
                </div>
                <div className="pl-4">
                  <span className="text-slate-500"># O(log N) Time Complexity structure</span>
                </div>
                <div className="pl-4">
                  left, right = <span className="text-purple-400">0</span>, <span className="text-[#FF6B00]">len</span>(arr) - <span className="text-purple-400">1</span>
                </div>
                <div className="pl-4">
                  <span className="text-pink-400">while</span> left &lt;= right:
                </div>
                <div className="pl-8">
                  mid = (left + right) // <span className="text-purple-400">2</span>
                </div>
                <div className="pl-8 text-blue-300 bg-blue-950/40 py-1 border-l-2 border-[#1565C0]">
                  <span className="text-pink-400">if</span> arr[mid] == target:
                </div>
                <div className="pl-12 text-blue-300 bg-blue-950/40">
                  <span className="text-pink-400">return</span> mid <span className="text-slate-500"># Ideal index found</span>
                </div>
                <div className="pl-8">
                  <span className="text-pink-400">elif</span> arr[mid] &lt; target:
                </div>
                <div className="pl-12">
                  left = mid + <span className="text-purple-400">1</span>
                </div>
                <div className="pl-8">
                  <span className="text-pink-400">else</span>:
                </div>
                <div className="pl-12">
                  right = mid - <span className="text-purple-400">1</span>
                </div>
                <div className="pl-4">
                  <span className="text-pink-400">return</span> -<span className="text-purple-400">1</span> <span className="text-slate-500"># Not found</span>
                </div>
              </div>

              {/* Dynamic code feedback trace diagram */}
              <div className="bg-slate-950 p-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-2 text-slate-400">
                  <Play className="w-3.5 h-3.5 text-green-500 fill-green-500" />
                  <span>Target: <strong className="text-orange-400 text-xs">49</strong> in [10, 23, 35, 49, 72]</span>
                </div>
                <div className="text-emerald-400 font-bold bg-emerald-950/85 px-2 py-1 rounded">
                  index: 3 (Found in 2 steps!)
                </div>
              </div>

              {/* Quick Session attributes badge list inside code panel */}
              <div className="p-3.5 bg-[#FF6B00]/10 border-t border-slate-800 flex flex-wrap gap-2 justify-center">
                <span className="flex items-center gap-1 text-[10px] text-slate-300 bg-slate-900 border border-slate-700 px-2 py-1 rounded-md font-mono">
                  <Video className="w-3 h-3 text-blue-500" />
                  Live Zoom Interaction
                </span>
                <span className="flex items-center gap-1 text-[10px] text-slate-300 bg-slate-900 border border-slate-700 px-2 py-1 rounded-md font-mono">
                  <Laptop className="w-3 h-3 text-orange-500" />
                  Code Notebooks (.ipynb)
                </span>
              </div>

            </div>

            {/* Poster logo overlay style */}
            <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-gradient-to-br from-orange-500 to-[#FF6B00] text-white px-5 py-3.5 rounded-2xl shadow-xl hover:scale-105 transition-transform">
              <div className="text-[10px] uppercase font-mono tracking-widest font-extrabold text-orange-100">
                EXCLUSIVE OFFER
              </div>
              <div className="font-display font-extrabold text-2xl tracking-tight">
                SAVE 50%
              </div>
              <div className="text-[11px] opacity-90 font-sans">
                Only ₹49 Entry Fee
              </div>
            </div>

            {/* floating left accent */}
            <div className="absolute -top-6 -left-4 sm:-left-6 bg-gradient-to-br from-[#1565C0] to-blue-700 text-white px-4 py-2.5 rounded-xl shadow-lg border border-blue-500/10">
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold block opacity-75">
                CURRICULUM
              </span>
              <span className="font-display font-bold text-xs sm:text-sm">
                Arrays to Complexity
              </span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
