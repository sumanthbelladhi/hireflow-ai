import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/landing/hero-section";
import TrustedCompanies from "@/components/landing/trusted-companies";
import FeaturedJobs from "@/components/landing/featured-jobs";
import AIInsights from "@/components/landing/ai-insights";
import Footer from "@/components/layout/footer";
import { motion } from "framer-motion";
function HomePage() {
  return (
    <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.4 }} 
    >
      <Navbar />

      <HeroSection />

      <TrustedCompanies />

      <FeaturedJobs />

      <AIInsights />

      <Footer />
    </motion.main>
  );
}

export default HomePage;