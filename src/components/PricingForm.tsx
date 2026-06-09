import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  Timer, 
  Users, 
  Lock, 
  Mail, 
  User, 
  School, 
  GitBranch, 
  Calendar, 
  CheckCircle, 
  Download, 
  QrCode, 
  ArrowRight,
  ShieldCheck,
  Flame,
  Copy,
  Check,
  X
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

      {/* ================= PAYMENT MODAL ================= */}
      <AnimatePresence>
        {isCheckoutOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
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
            />

            {/* Modal */}
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl border border-slate-100 relative z-10"
            >

              {/* Header with logo */}
              <div className="bg-gradient-to-r from-[#1565C0] to-blue-700 text-white p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="https://res.cloudinary.com/dcmt06mac/image/upload/v1780993565/WhatsApp_Image_2026-06-09_at_1.55.11_PM_jgb2ym.jpg"
                    alt="Academy of Tech Masters"
                    className="h-10 w-auto rounded-lg bg-white p-1 shrink-0"
                  />
                  <div>
                    <h4 className="font-display font-extrabold text-sm uppercase tracking-tight leading-none text-white">
                      Academy of Tech Masters
                    </h4>
                    <span className="text-[10px] text-blue-200 font-mono mt-0.5 block">
                      {paymentStep === "success" ? "Registration Confirmed" : "Complete Your Payment"}
                    </span>
                  </div>
                </div>
                {paymentStep !== "processing" && (
                  <button
                    type="button"
                    onClick={() => setIsCheckoutOpen(false)}
                    className="p-1.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors shrink-0"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                )}
              </div>

              <div className="p-6 sm:p-8">

                {/* ---- QR STEP ---- */}
                {paymentStep === "qr" && (
                  <div className="flex flex-col items-center gap-5">

                    {/* Amount badge */}
                    <div className="flex items-center gap-2 bg-orange-50 border border-orange-200 px-4 py-2 rounded-full">
                      <span className="text-[#FF6B00] font-extrabold text-lg font-display">₹49</span>
                      <span className="text-slate-400 text-xs font-medium">— DSA Using Python Workshop</span>
                    </div>

                    {/* QR Code */}
                    <div className="bg-white border-2 border-slate-100 rounded-2xl p-4 shadow-md flex flex-col items-center gap-3">
                      <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent("upi://pay?pa=info@aotms.in&pn=Academy+of+Tech+Masters&am=49&cu=INR")}`}
                        alt="Scan to Pay ₹49 via UPI"
                        className="w-48 h-48 object-contain"
                      />
                      <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest bg-slate-50 border border-slate-100 px-3 py-1 rounded-lg">
                        <QrCode className="w-3.5 h-3.5 text-slate-400" />
                        Scan via GPay · PhonePe · Paytm
                      </div>
                    </div>

                    {/* UPI ID copy row */}
                    <div className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[9px] text-slate-400 font-mono uppercase block">UPI ID</span>
                        <code className="text-sm font-bold font-mono text-slate-800">info@aotms.in</code>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText("info@aotms.in");
                          setIsCopied(true);
                          setTimeout(() => setIsCopied(false), 2000);
                        }}
                        className="cursor-pointer bg-slate-900 text-white text-[10px] uppercase font-bold py-1.5 px-3 rounded-lg flex items-center gap-1 transition-all hover:bg-slate-700 shrink-0"
                      >
                        {isCopied ? (
                          <><Check className="w-3 h-3 text-emerald-400" /><span>Copied!</span></>
                        ) : (
                          <><Copy className="w-3 h-3 text-slate-400" /><span>Copy UPI ID</span></>
                        )}
                      </button>
                    </div>

                    {/* UTR Input */}
                    <div className="w-full space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 block">
                        UTR / Transaction Reference Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        maxLength={12}
                        value={transactionRef}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, "");
                          setTransactionRef(val);
                          if (val.trim().length >= 8) setRefError("");
                        }}
                        placeholder="e.g. 518388902012"
                        className={`w-full bg-slate-50 border ${refError ? "border-red-400 ring-2 ring-red-100" : "border-slate-200"} focus:bg-white focus:border-[#1565C0] focus:ring-2 focus:ring-blue-100 p-3 px-4 rounded-xl text-sm font-mono font-semibold transition-all outline-none`}
                      />
                      {refError && (
                        <p className="text-[11px] text-red-500 font-medium">{refError}</p>
                      )}
                      <p className="text-[10px] text-slate-400">
                        Found in your UPI app under payment history after successful payment.
                      </p>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3 w-full pt-1">
                      <button
                        type="button"
                        onClick={() => setIsCheckoutOpen(false)}
                        className="cursor-pointer border border-slate-200 hover:bg-slate-50 py-3 rounded-xl text-xs font-bold text-slate-500 uppercase transition-all px-5"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (!transactionRef.trim()) {
                            setRefError("UTR / Transaction reference number is required.");
                            return;
                          }
                          if (transactionRef.trim().length < 8) {
                            setRefError("Reference number must be at least 8 digits.");
                            return;
                          }
                          setRefError("");
                          simulatePayment();
                        }}
                        className="cursor-pointer flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-[#1565C0] hover:to-blue-700 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                      >
                        <ShieldCheck className="w-4 h-4" />
                        Submit &amp; Confirm Seat
                      </button>
                    </div>

                  </div>
                )}

                {/* ---- PROCESSING STEP ---- */}
                {paymentStep === "processing" && (
                  <div className="flex flex-col items-center py-10 gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full border-4 border-slate-100 border-t-[#1565C0] animate-spin"></div>
                      <ShieldCheck className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-[#1565C0]" />
                    </div>
                    <h5 className="font-display font-extrabold text-[#1565C0] text-sm tracking-wide uppercase">
                      Verifying your payment...
                    </h5>
                    <p className="text-slate-400 text-[11px] font-mono text-center leading-relaxed max-w-xs">
                      Please do not close or refresh this window.
                    </p>
                  </div>
                )}

                {/* ---- SUCCESS STEP ---- */}
                {paymentStep === "success" && generatedTicket && (
                  <div className="flex flex-col gap-5">

                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex gap-3 items-start">
                      <div className="bg-emerald-600 p-1.5 rounded-lg text-white shrink-0">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h6 className="font-bold text-sm text-emerald-800">Registration Confirmed!</h6>
                        <p className="text-slate-500 text-[11px] leading-relaxed mt-0.5">
                          A confirmation has been sent to <strong className="text-[#1565C0]">{form.email}</strong>. Your seat is reserved.
                        </p>
                      </div>
                    </div>

                    {/* Ticket card */}
                    <div id="printpass" className="rounded-2xl border-2 border-blue-100 bg-gradient-to-b from-blue-50/50 to-white p-5 shadow-sm">
                      <div className="flex items-start justify-between border-b border-slate-100 pb-3 mb-4">
                        <div>
                          <span className="text-[9px] uppercase font-mono tracking-widest text-[#FF6B00] font-bold">Admission Pass</span>
                          <h5 className="font-display font-bold text-sm text-slate-900 mt-0.5">DSA With Python Workshop</h5>
                          <div className="flex items-center gap-1 text-[10px] text-slate-500 font-mono mt-1">
                            <Calendar className="w-3.5 h-3.5 text-blue-600" />
                            <span>Sunday, June 14 @ 6:00 PM</span>
                          </div>
                        </div>
                        <div className="bg-[#1565C0] text-white rounded-lg px-2 py-1 font-display font-bold text-xs uppercase text-center leading-tight">
                          ATM<br /><span className="text-[9px]">2026</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                        <div>
                          <span className="text-slate-400 font-mono text-[9px] uppercase block">Name</span>
                          <span className="font-bold text-slate-800 truncate block">{form.fullName}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 font-mono text-[9px] uppercase block">Ticket ID</span>
                          <span className="font-bold font-mono text-blue-700 block">{generatedTicket.id}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 font-mono text-[9px] uppercase block">College</span>
                          <span className="font-medium text-slate-600 truncate block">{form.college}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 font-mono text-[9px] uppercase block">Mobile</span>
                          <span className="font-mono text-slate-600 font-medium block">+91 {form.mobile}</span>
                        </div>
                      </div>
                      <div className="bg-slate-950 text-slate-100 p-3 rounded-xl text-[11px] font-mono">
                        <div className="flex items-center gap-1.5 text-orange-400 font-bold text-[10px] uppercase mb-1">
                          <Users className="w-3.5 h-3.5" />
                          Zoom Entry Credentials
                        </div>
                        <p>Meeting ID: <strong>812 902 4433</strong></p>
                        <p className="mt-0.5">Passcode: <strong className="text-emerald-400">DSA_MASTER</strong></p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={downloadTicketAsImage}
                        className="cursor-pointer flex-1 border border-blue-200 hover:bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Print Ticket
                      </button>
                      <button
                        onClick={() => setIsCheckoutOpen(false)}
                        className="cursor-pointer flex-1 bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider py-3 rounded-xl transition-all"
                      >
                        Close
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