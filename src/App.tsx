import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import SessionDetails from "./components/SessionDetails";
import PricingForm from "./components/PricingForm";
import Audience from "./components/Audience";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import StickyCTA from "./components/StickyCTA";

export default function App() {
  // Scarcity state logic: starts at 12, randomly ticks down over time to 4 to drive urgency
  const [seatsLeft, setSeatsLeft] = useState(12);

  useEffect(() => {
    const minSeats = 4;
    const interval = setInterval(() => {
      setSeatsLeft((current) => {
        if (current > minSeats) {
          // 30% chance to reduce 1 seat on check loop
          return Math.random() < 0.3 ? current - 1 : current;
        }
        return current;
      });
    }, 15000); // Verify every 15 seconds

    return () => clearInterval(interval);
  }, []);

  const handleScrollToForm = () => {
    const formElement = document.getElementById("registration-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToCurriculum = () => {
    const curElement = document.getElementById("curriculum");
    if (curElement) {
      curElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col justify-between selection:bg-[#FF6B00]/10 selection:text-[#FF6B00]">
      
      {/* Dynamic Header */}
      <Navbar seatsLeft={seatsLeft} />

      {/* Main Contents */}
      <main className="flex-grow">

        {/* Hero Segment */}
        <Hero 
          onRegisterClick={handleScrollToForm} 
          onCurriculumClick={handleScrollToCurriculum} 
          seatsLeft={seatsLeft} 
        />

        {/* Highlights: What You Will Learn + Why Attend */}
        <Features />

        {/* Session Metadata display pass */}
        <SessionDetails />

        {/* Targeting demography lists */}
        <Audience />

        {/* High-conversion Form checkout portal with simulated QR scanner */}
        <PricingForm seatsLeft={seatsLeft} onRegistered={() => {}} />

        {/* Testimonials */}
        <Testimonials />

        {/* Collapsible Accordion Support portal */}
        <FAQ />
      </main>

      {/* Sticky footer checkout elements */}
      <StickyCTA seatsLeft={seatsLeft} />

    </div>
  );
}
