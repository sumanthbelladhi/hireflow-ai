import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import JobsSection from "@/components/jobs/job-section";
import { motion } from "framer-motion";

function JobsPage() {
  return (
    <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.4 }}
    >
      <Navbar />

      <JobsSection />

      <Footer />
    </motion.main>
  );
}

export default JobsPage;