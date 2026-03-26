import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import StatsBar from "@/components/StatsBar";
import ProblemSection from "@/components/ProblemSection";
import PillarsSection from "@/components/PillarsSection";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import ThreeDayBreakdown from "@/components/ThreeDayBreakdown";
import WhatYouGet from "@/components/WhatYouGet";
import CoachSection from "@/components/CoachSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <AnnouncementBar />
    <HeroSection />
    <HowItWorks />
    <StatsBar />
    <ProblemSection />
    <PillarsSection />
    <WhoIsThisFor />
    <ThreeDayBreakdown />
    <WhatYouGet />
    <CoachSection />
    <FAQSection />
    <FinalCTA />
    <Footer />
    <div className="pb-16 md:pb-0" />
    <MobileStickyBar />
  </div>
);

export default Index;
