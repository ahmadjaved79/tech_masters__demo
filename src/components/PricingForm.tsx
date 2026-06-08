import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  Timer, 
  Users, 
  Lock, 
  Smartphone, 
  Mail, 
  User, 
  School, 
  GitBranch, 
  Calendar, 
  CheckCircle, 
  Download, 
  QrCode, 
  TrendingUp, 
  ArrowRight,
  ShieldCheck,
  ExternalLink,
  MessageSquare,
  BookmarkCheck,
  Flame,
  Award,
  Copy,
  Upload,
  Check
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { RegistrationData } from "../types";

interface PricingFormProps {
  seatsLeft: number;
  onRegistered: () => void;
}

export default function PricingForm({ seatsLeft, onRegistered }: PricingFormProps) {
  
  // Timer calculations
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [form, setForm] = useState<RegistrationData>({
    fullName: "",
    mobile: "",
    email: "",
    college: "",
    branch: "",
    year: "3rd Year"
  });

  const [formErrors, setFormErrors] = useState<Partial<RegistrationData>>({});
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [paymentStep, setPaymentStep] = useState<"qr" | "processing" | "success">("qr");
  const [generatedTicket, setGeneratedTicket] = useState<{ id: string; timestamp: string } | null>(null);
  const [transactionRef, setTransactionRef] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [screenshotName, setScreenshotName] = useState<string>("");
  const [refError, setRefError] = useState("");

  // Dynamic countdown target (Sunday, June 14, 2026, 18:00:00 IST)
  useEffect(() => {
    let targetDate = new Date("2026-06-14T18:00:00+05:30").getTime();
    
    // Fallback rollover if target is in the past: 
    // dynamically add days to simulate constant ticking scarcity
    const nowTime = new Date().getTime();
    if (nowTime > targetDate) {
      targetDate = nowTime + (2 * 24 * 60 * 60 * 1000) + (4 * 60 * 60 * 1000); // 2 days & 4 hours in future
    }

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    // clean error once corrected
    if (formErrors[e.target.name as keyof RegistrationData]) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: ""
      });
    }
  };

  const validateForm = (): boolean => {
    const errors: Partial<RegistrationData> = {};
    if (!form.fullName.trim()) errors.fullName = "Full name is required";
    if (!form.college.trim()) errors.college = "College name is required";
    if (!form.branch.trim()) errors.branch = "Branch/Department is required";
    
    // Indian mobile pattern
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(form.mobile)) {
      errors.mobile = "Provide a valid 10-digit mobile number";
    }

    // Email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      errors.email = "Provide a valid email address";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsCheckoutOpen(true);
      setPaymentStep("qr");
    } else {
      // scroll to error
      const errEl = document.getElementById("register-title");
      if (errEl) errEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const simulatePayment = () => {
    setPaymentStep("processing");
    setTimeout(() => {
      // Generate standard booking codes
      const ticketNum = "ATM-DSA-" + Math.floor(100000 + Math.random() * 900000);
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
      setGeneratedTicket({ id: ticketNum, timestamp });
      setPaymentStep("success");
      onRegistered();
    }, 2800);
  };

  const downloadTicketAsImage = () => {
    window.print();
  };

  return (
    <div id="register" className="py-20 bg-slate-50 relative scroll-mt-24 border-t border-slate-200">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#FF6B00] via-[#1565C0] to-[#FF6B00]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#FF6B00] text-xs font-bold font-mono tracking-widest uppercase bg-orange-50 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 fill-orange-500 text-[#FF6B00]" />
            Fast Selling Workshop
          </span>
          <h2 id="register-title" className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 mt-4 tracking-tight leading-tight">
            Reserve Your Sunday Seat For <span className="text-[#FF6B00]">₹49</span> Only
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Original price: <span className="line-through font-bold text-slate-400">₹99</span>. Reserve immediately to unlock bonus study guides and e-certificate credentials.
          </p>
        </div>

        {/* Pricing Layout Container */}
        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* LEFT: PRICING CARD & COUNTDOWN */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-[#1565C0] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex-1 flex flex-col justify-between">
              
              {/* Background styling elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-xl pointer-events-none"></div>
              <div className="absolute bottom-[-100px] left-[-100px] w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-orange-500 text-white font-mono text-[9px] uppercase font-extrabold tracking-widest px-3 py-1 rounded-full">
                    Sunday Workshop Pass
                  </span>
                  <div className="flex items-center gap-1 text-xs text-blue-100 font-semibold font-mono">
                    <Users className="w-4 h-4 text-orange-400" />
                    <span>Live Access</span>
                  </div>
                </div>

                <div className="text-left mb-6">
                  <span className="text-blue-200 text-xs uppercase tracking-widest font-mono font-bold block">
                    SPECIAL ENROLLMENT FEE:
                  </span>
                  <div className="flex items-baseline gap-3 mt-1">
                    <span className="font-display font-black text-5xl tracking-tight text-white">₹49</span>
                    <span className="line-through text-blue-300 font-extrabold text-lg">₹99</span>
                    <span className="text-orange-400 font-bold text-sm bg-orange-950/80 border border-orange-900 px-2.5 py-0.5 rounded ml-2 animate-pulse font-mono">
                      SAVE 50%
                    </span>
                  </div>
                  <span className="text-[10px] text-blue-100 mt-1 block">
                    *Taxes included. Non-refundable promotional ticket.
                  </span>
                </div>

                {/* Scarcity Seat Counter Bar */}
                <div className="space-y-2 mb-8 bg-slate-950/30 p-4 border border-blue-400/10 rounded-2xl">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-orange-400 flex items-center gap-1.5">
                      <Flame className="w-4 h-4 animate-bounce fill-orange-500 text-orange-500" />
                      Only {seatsLeft} Seats Remaining!
                    </span>
                    <span className="text-blue-200">{Math.round((seatsLeft / 12) * 100)}% Available</span>
                  </div>
                  <div className="w-full bg-blue-950 h-2.5 rounded-full overflow-hidden border border-blue-900">
                    <motion.div
                      initial={{ width: "95%" }}
                      animate={{ width: `${(seatsLeft / 12) * 100}%` }}
                      transition={{ duration: 1 }}
                      className="bg-gradient-to-r from-[#FF6B00] to-orange-500 h-full rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-[10px] text-slate-300 italic">
                    Seats drop dynamically based on visitor checkouts in your state.
                  </p>
                </div>
              </div>

              {/* Dynamic countdown element */}
              <div className="text-left bg-slate-950/50 p-4 sm:p-5 rounded-2xl border border-blue-400/10">
                <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider font-bold block mb-3 flex items-center gap-1">
                  <Timer className="w-4 h-4 text-orange-400 inline" />
                  PROMOTIONAL TIMERS EXSPIRES IN:
                </span>
                
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="bg-slate-900/90 rounded-lg p-2.5 border border-slate-800">
                    <span className="font-display font-extrabold text-lg block text-white">{timeLeft.days}</span>
                    <span className="text-[9px] uppercase font-mono tracking-widest text-slate-500 mt-0.5 block">DAYS</span>
                  </div>
                  <div className="bg-slate-900/90 rounded-lg p-2.5 border border-slate-800">
                    <span className="font-display font-extrabold text-lg block text-white">{String(timeLeft.hours).padStart(2, "0")}</span>
                    <span className="text-[9px] uppercase font-mono tracking-widest text-slate-500 mt-0.5 block">HOURS</span>
                  </div>
                  <div className="bg-slate-900/90 rounded-lg p-2.5 border border-slate-800">
                    <span className="font-display font-extrabold text-lg block text-white">{String(timeLeft.minutes).padStart(2, "0")}</span>
                    <span className="text-[9px] uppercase font-mono tracking-widest text-slate-500 mt-0.5 block">MINS</span>
                  </div>
                  <div className="bg-slate-900/90 rounded-lg p-2.5 border border-slate-800">
                    <span className="font-display font-extrabold text-lg block text-orange-400">{String(timeLeft.seconds).padStart(2, "0")}</span>
                    <span className="text-[9px] uppercase font-mono tracking-widest text-slate-400 mt-0.5 block">SECS</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: REGISTRATION FORM */}
          <div id="registration-form" className="lg:col-span-7 scroll-mt-28">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-xl relative overflow-hidden">
              <span className="text-xs font-mono font-bold tracking-wider text-[#1565C0] uppercase block mb-2">
                ENTRANT APPLICATION PORTAL
              </span>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-950 mb-6">
                Fill Out Your Registration Form
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                
                {/* 1. Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="fullName" className="text-xs font-bold text-slate-700 block select-none">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="e.g. Rahul Sharma"
                      value={form.fullName}
                      onChange={handleChange}
                      className={`w-full bg-slate-50 border py-3 pl-10 pr-4 rounded-xl text-sm transition-colors text-slate-900 focus:outline-none focus:bg-white ${
                        formErrors.fullName ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-[#1565C0]"
                      }`}
                    />
                  </div>
                  {formErrors.fullName && <p className="text-[11px] text-red-500 font-medium pl-1">{formErrors.fullName}</p>}
                </div>

                {/* Double inline grid for Mobile and Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  
                  {/* 2. Mobile Number */}
                  <div className="space-y-1.5">
                    <label htmlFor="mobile" className="text-xs font-bold text-slate-700 block select-none">
                      Mobile Number (WhatsApp Link) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 font-mono text-xs font-bold select-none">
                        +91
                      </div>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        maxLength={10}
                        placeholder="e.g. 9876543210"
                        value={form.mobile}
                        onChange={handleChange}
                        className={`w-full bg-slate-50 border py-3 pl-12 pr-4 rounded-xl text-sm transition-colors text-slate-900 focus:outline-none focus:bg-white ${
                          formErrors.mobile ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-[#1565C0]"
                        }`}
                      />
                    </div>
                    {formErrors.mobile && <p className="text-[11px] text-red-500 font-medium pl-1">{formErrors.mobile}</p>}
                  </div>

                  {/* 3. Email Address */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-slate-700 block select-none">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="e.g. rahul@gmail.com"
                        value={form.email}
                        onChange={handleChange}
                        className={`w-full bg-slate-50 border py-3 pl-10 pr-4 rounded-xl text-sm transition-colors text-slate-900 focus:outline-none focus:bg-white ${
                          formErrors.email ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-[#1565C0]"
                        }`}
                      />
                    </div>
                    {formErrors.email && <p className="text-[11px] text-red-500 font-medium pl-1">{formErrors.email}</p>}
                  </div>

                </div>

                {/* 4. College Name */}
                <div className="space-y-1.5">
                  <label htmlFor="college" className="text-xs font-bold text-slate-700 block select-none">
                    College/University Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <School className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="college"
                      name="college"
                      placeholder="e.g. Delhi Technological University"
                      value={form.college}
                      onChange={handleChange}
                      className={`w-full bg-slate-50 border py-3 pl-10 pr-4 rounded-xl text-sm transition-colors text-slate-900 focus:outline-none focus:bg-white ${
                        formErrors.college ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-[#1565C0]"
                      }`}
                    />
                  </div>
                  {formErrors.college && <p className="text-[11px] text-red-500 font-medium pl-1">{formErrors.college}</p>}
                </div>

                {/* Double inline grid for Branch and Year */}
                <div className="grid sm:grid-cols-2 gap-5">
                  
                  {/* 5. Branch */}
                  <div className="space-y-1.5">
                    <label htmlFor="branch" className="text-xs font-bold text-slate-700 block select-none">
                      Branch / Department <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <GitBranch className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        id="branch"
                        name="branch"
                        placeholder="e.g. Computer Science"
                        value={form.branch}
                        onChange={handleChange}
                        className={`w-full bg-slate-50 border py-3 pl-10 pr-4 rounded-xl text-sm transition-colors text-slate-900 focus:outline-none focus:bg-white ${
                          formErrors.branch ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-[#1565C0]"
                        }`}
                      />
                    </div>
                    {formErrors.branch && <p className="text-[11px] text-red-500 font-medium pl-1">{formErrors.branch}</p>}
                  </div>

                  {/* 6. Year of Study */}
                  <div className="space-y-1.5">
                    <label htmlFor="year" className="text-xs font-bold text-slate-700 block select-none">
                      Year of Study <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <select
                        id="year"
                        name="year"
                        value={form.year}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 py-3 pl-10 pr-4 rounded-xl text-sm transition-colors text-slate-900 focus:outline-none focus:bg-white focus:border-[#1565C0] cursor-pointer"
                      >
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year (Final Year)</option>
                        <option value="Passout / Graduate">Passed Out / Graduate</option>
                      </select>
                    </div>
                  </div>

                </div>

                {/* Privacy and processing note */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-start gap-2 text-[11px] text-slate-500">
                  <Lock className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>By submitting, you agree to receive transactional WhatsApp confirmations and credentials. We never distribute database records.</span>
                </div>

                {/* Submissions Action */}
                <button
                  type="submit"
                  className="cursor-pointer w-full text-center bg-slate-950 hover:bg-slate-850 text-white font-sans font-extrabold text-sm tracking-wider uppercase py-4 rounded-xl border border-slate-800 shadow-xl hover:translate-y-[-1px] active:translate-y-[1px] transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />
                  <span>REGISTER FOR ₹49</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-all" />
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>

      {/* ================= SIMULATED PAYMENT DEEP CHECKOUT GATEWAY MODAL ================= */}
      <AnimatePresence>
        {isCheckoutOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop cover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (paymentStep !== "processing") {
                  setIsCheckoutOpen(false);
                }
              }}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            ></motion.div>

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl border border-slate-100 relative z-10"
            >
              
              {/* BRAND CARD HEADER */}
              <div className="bg-gradient-to-r from-[#1565C0] to-blue-700 text-white p-5 text-left flex items-center justify-between">
                <div>
                  <h4 className="font-display font-extrabold text-base uppercase tracking-tight leading-none text-white">
                    ACADEMY OF TECH MASTERS
                  </h4>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-blue-100 mt-1 block">
                    FAST_PAY_UPI_GATEWAY v2.8
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-blue-200 uppercase font-mono block">Grand Total:</span>
                  <span className="font-display font-extrabold text-xl text-orange-400">₹49.00</span>
                </div>
              </div>

              {/* INTERACTIVE PAY STEPS RENDER */}
              <div className="p-6 sm:p-8">
                
                {paymentStep === "qr" && (
                  <div className="flex flex-col items-center">
                    
                    <div className="flex items-center gap-1.5 bg-[#1565C0]/10 text-[#1565C0] border border-[#1565C0]/20 py-1.5 px-3 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 animate-pulse">
                      <Timer className="w-3.5 h-3.5 text-[#1565C0] animate-spin" />
                      <span>Pending: Complete UPI Payment in 10:00 Mins</span>
                    </div>

                    {/* QR Code Graphic Frame matching user uploaded template layout */}
                    <div className="flex items-stretch gap-4 p-4 sm:p-5 border border-slate-200 rounded-3xl bg-slate-50 mb-4 select-none w-full max-w-sm shadow-inner relative justify-center">
                      <div className="flex items-center justify-center">
                        {/* Vertical Merchant Identifier Text - Rotated vertically matching the user screenshot */}
                        <div className="text-[10px] sm:text-xs font-mono font-bold text-slate-800 tracking-widest uppercase [writing-mode:vertical-lr] rotate-180 shrink-0 border-r border-slate-200 pr-2 select-none h-full h-32 flex items-center justify-center">
                          3200958 104 290325
                        </div>
                      </div>

                      {/* Official QR scannable merchant block */}
                      <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-3.5 relative flex flex-col items-center justify-center grow">
                        <img 
                          src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi%3A%2F%2Fpay%3Fpa%3Dinfo%40aotms.in%26pn%3DAcademy%2520of%2520Tech%2520Masters%26am%3D49%26cu%3DINR"
                          alt="Academy of Tech Masters UPI QR Code Scanner"
                          title="Scan this secure QR code using GPay, PhonePe, Bhim, or Paytm to register instantly."
                          className="w-40 h-40 object-contain selection:bg-transparent"
                          referrerPolicy="no-referrer"
                        />
                        <div className="mt-1 flex items-center gap-1 bg-slate-100 py-1 px-2.5 rounded-md text-[9px] font-semibold text-slate-500 uppercase tracking-widest font-mono">
                          <QrCode className="w-3 h-3 text-slate-400" />
                          <span>MEMBER SCANNER</span>
                        </div>
                      </div>
                    </div>

                    {/* Manual copy assistance for mobile users - Premium UX feature */}
                    <div className="w-full max-w-sm mb-5 bg-slate-50 border border-slate-150 p-3 rounded-2xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                      <div className="text-left font-sans">
                        <span className="text-[9px] text-slate-400 font-mono block uppercase">Merchant UPI VPA</span>
                        <code className="text-xs sm:text-sm font-bold font-mono text-slate-800">info@aotms.in</code>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText("info@aotms.in");
                          setIsCopied(true);
                          setTimeout(() => setIsCopied(false), 2000);
                        }}
                        className="cursor-pointer bg-slate-900 text-white font-sans text-[10px] uppercase font-bold py-1.5 px-3 rounded-lg hover:bg-slate-850 flex items-center justify-center gap-1 transition-all"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 text-slate-400" />
                            <span>Copy UPI ID</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* PAYMENT CONFIRMATION VERIFICATION MODULES */}
                    <div className="w-full uppercase text-left tracking-wide mb-4">
                      <span className="text-[10px] text-slate-500 font-mono font-bold block mb-2">
                        Verification Panel (Mandatory to unlock Pass)
                      </span>
                      
                      <div className="space-y-3 font-sans">
                        {/* Transaction reference ID */}
                        <div>
                          <label className="text-[10px] text-slate-600 font-bold block mb-1">
                            UPI Transaction Ref / UTR Number (12 Digits)*
                          </label>
                          <input
                            type="text"
                            maxLength={12}
                            value={transactionRef}
                            onChange={(e) => {
                              const val = e.target.value.replace(/\D/g, ""); // replace non-digits
                              setTransactionRef(val);
                              if (val.trim().length >= 8) {
                                setRefError("");
                              }
                            }}
                            placeholder="e.g. 518388902012"
                            className={`w-full bg-slate-50 border ${refError ? 'border-red-400 ring-2 ring-red-100' : 'border-slate-200'} focus:bg-white focus:border-[#1565C0] focus:ring-4 focus:ring-blue-100 p-2.5 px-3 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all outline-none`}
                          />
                          {refError && (
                            <p className="text-[10px] text-red-500 font-bold mt-1 tracking-normal font-sans">
                              {refError}
                            </p>
                          )}
                        </div>

                        {/* File Upload screenshot input */}
                        <div>
                          <label className="text-[10px] text-slate-600 font-bold block mb-1">
                            Attach Payment Receipt / Screenshot
                          </label>
                          <div className="relative">
                            <input
                              type="file"
                              accept="image/*"
                              id="payment-screenshot"
                              onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                  setScreenshotName(e.target.files[0].name);
                                }
                              }}
                              className="hidden"
                            />
                            <label
                              htmlFor="payment-screenshot"
                              className="w-full cursor-pointer bg-slate-50 hover:bg-slate-100 border border-slate-200 border-dashed hover:border-slate-350 p-2.5 px-3.5 rounded-xl text-xs font-semibold text-slate-650 flex items-center justify-between gap-1 transition-all"
                            >
                              <span className="truncate max-w-[200px] font-sans">
                                {screenshotName || "Choose secure payment receipt image..."}
                              </span>
                              <div className="bg-white border border-slate-200 p-1 rounded-md text-slate-500 shrink-0 shadow-sm flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider">
                                <Upload className="w-3.5 h-3.5 text-slate-400" />
                                <span>browse</span>
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-[10px] text-slate-500 font-medium text-center max-w-sm mb-4 leading-relaxed tracking-normal font-sans">
                      Open Google Pay, PhonePe, Paytm, or your banking application, scan the official merchant QR above, pay ₹49, and submit the verification form.
                    </p>

                    {/* Control handles */}
                    <div className="flex gap-3 w-full border-t border-slate-100 pt-4 mt-2">
                      <button
                        type="button"
                        onClick={() => setIsCheckoutOpen(false)}
                        className="cursor-pointer border border-slate-200 hover:bg-slate-100 py-3 rounded-xl text-xs font-bold text-slate-500 uppercase transition-all px-4"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (!transactionRef.trim()) {
                            setRefError("UPI reference / UTR number is required for transaction verification.");
                            return;
                          }
                          if (transactionRef.trim().length < 8) {
                            setRefError("Reference number must be between 8 and 12 digits.");
                            return;
                          }
                          setRefError("");
                          simulatePayment();
                        }}
                        className="cursor-pointer flex-1 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-[#FF6B00] hover:to-orange-600 text-white font-sans font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all shadow-md shadow-emerald-500/10 flex items-center justify-center gap-1.5"
                      >
                        <ShieldCheck className="w-4 h-4" />
                        I Have Made Payment
                      </button>
                    </div>

                  </div>
                )}

                {paymentStep === "processing" && (
                  <div className="flex flex-col items-center py-10">
                    {/* Circle Loader */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 rounded-full border-4 border-slate-100 border-t-orange-500 animate-spin"></div>
                      <QrCode className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" />
                    </div>
                    
                    <h5 className="font-display font-extrabold text-[#1565C0] text-sm tracking-wide uppercase">
                      Vefifying UPI Ref reference...
                    </h5>
                    
                    <p className="text-slate-400 text-[11px] font-mono mt-2.5 max-w-xs text-center leading-relaxed">
                      Ping transaction ledger inside Paytm bank servers. Do not refresh or exit.
                    </p>
                  </div>
                )}

                {paymentStep === "success" && generatedTicket && (
                  <div className="flex flex-col text-left">
                    
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl p-4 flex gap-3.5 items-start mb-6">
                      <div className="bg-emerald-600 p-1.5 rounded-lg text-white">
                        <CheckCircle className="w-5 h-5 fill-emerald-700 text-white" />
                      </div>
                      <div>
                        <h6 className="font-bold text-sm tracking-normal">Registration Confirmed Successfully!</h6>
                        <p className="text-slate-500 text-[11px] leading-relaxed mt-0.5">
                          Fantastic, Rahul! Your private digital admission pass has been generated. A backup confirmation has been forwarded to <strong className="text-[#1565C0]">{form.email}</strong>.
                        </p>
                      </div>
                    </div>

                    {/* PRINTABLE PASS CARD */}
                    <div id="printpass" className="rounded-2xl border-2 border-blue-100 bg-gradient-to-b from-blue-50/50 to-white overflow-hidden p-5 shadow-sm relative mb-6">
                      
                      {/* Ticket header */}
                      <div className="flex items-start justify-between border-b border-slate-150 pb-4 mb-4">
                        <div>
                          <span className="text-[9px] uppercase font-mono tracking-widest text-[#FF6B00] font-bold">ADMISSION WRISTBAND</span>
                          <h5 className="font-display font-bold text-sm text-slate-900 mt-1">DSA WITH PYTHON WORKSHOP</h5>
                          <div className="flex items-center gap-1 text-[10px] text-slate-500 font-mono mt-1">
                            <Calendar className="w-3.5 h-3.5 text-blue-600" />
                            <span>Sunday, June 14 @ 6:00 PM</span>
                          </div>
                        </div>
                        <div className="bg-[#1565C0] text-white rounded p-1 font-display font-bold text-xs uppercase leading-tight text-center">
                          ATM<br /><span className="text-[9px]">2026</span>
                        </div>
                      </div>

                      {/* Attendee data */}
                      <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-xs mb-5">
                        <div>
                          <span className="text-slate-400 font-mono text-[9px] uppercase block">NAME</span>
                          <span className="font-bold text-slate-800 truncate block">{form.fullName || " राहुल कुमार "}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 font-mono text-[9px] uppercase block">TICKET ID</span>
                          <span className="font-bold font-mono text-blue-700 block">{generatedTicket.id}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 font-mono text-[9px] uppercase block">COLLEGE / UNIV</span>
                          <span className="font-medium text-slate-600 truncate block">{form.college}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 font-mono text-[9px] uppercase block">PHONE NO</span>
                          <span className="font-mono text-slate-600 font-medium block">+91 {form.mobile}</span>
                        </div>
                      </div>

                      {/* ZOOM JOINING INFORMS */}
                      <div className="bg-slate-950 text-slate-100 p-3 rounded-xl border border-slate-800 text-[11px] font-mono mb-4 text-left">
                        <div className="flex items-center gap-1.5 text-orange-400 font-bold text-[10px] uppercase mb-1">
                          <Users className="w-3.5 h-3.5" />
                          <span>Zoom Entry Credentials:</span>
                        </div>
                        <p className="mt-0.5">Meeting ID: <strong>812 902 4433</strong></p>
                        <p className="mt-0.5">Room Passcode: <strong className="text-emerald-400">DSA_MASTER</strong></p>
                      </div>

                      {/* WhatsApp Community Link integration - typical high converting Indian EdTech element! */}
                      <a
                        href="https://chat.whatsapp.com/mock-atm-dsa-mastery"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-emerald-600 text-white p-3 rounded-xl hover:bg-emerald-700 transition-colors text-xs font-bold flex items-center justify-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4 fill-emerald-100" />
                        Join Exclusive WhatsApp Group (Notes & PDFs)
                      </a>

                    </div>

                    {/* Bottom controls */}
                    <div className="flex gap-4">
                      <button
                        onClick={downloadTicketAsImage}
                        className="cursor-pointer flex-1 border border-blue-200 hover:bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Print Access Ticket
                      </button>
                      <button
                        onClick={() => setIsCheckoutOpen(false)}
                        className="cursor-pointer flex-1 bg-slate-950 hover:bg-slate-900 text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl transition-all"
                      >
                        Close Dashboard
                      </button>
                    </div>

                  </div>
                )}

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
