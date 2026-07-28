import { motion } from "framer-motion";
import Container from "@/components/layout/container";
import Button from "@/components/ui/button";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="relative overflow-hidden py-28">
      <Container>
        <div
          className="
            mx-auto
            max-w-4xl
            text-center
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="
                mb-6
                inline-flex
                items-center
                rounded-full
                border
                border-indigo-500/20
                bg-indigo-500/10
                px-4
                py-2
                text-sm
                text-indigo-300
              "
            >
              AI-Powered Career Platform
            </div>

            <h1
              className="
                text-3xl sm:text-4xl
                sm:text-5xl
                md:text-6xl
                xl:text-7xl
                font-black
                leading-tight
                tracking-tight
                text-white
                md:text-7xl
              "
            >
              Find Your Dream Job
              <span
                className="
                  bg-gradient-to-r
                  from-indigo-400
                  to-violet-400
                  bg-clip-text
                  text-transparent
                "
              >
                {" "}
                Smarter
              </span>
            </h1>

            <p
              className="
                mx-auto
                mt-8
                max-w-2xl
                text-base
                sm:text-lg
                leading-8
                text-slate-400
              "
            >
              Discover AI-curated opportunities, personalized career insights,
              and your next big role.
            </p>

            <div
              className="
                mt-10
                flex
                flex-col
                items-center
                justify-center
                gap-4
                sm:flex-row
              "
            >
              <Link to="/jobs">
                <Button className="w-full sm:w-auto">Explore Jobs</Button>
              </Link>
              <Link to="/saved-jobs">
                <Button variant="secondary" className="w-full sm:w-auto">
                Saved Jobs
              </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;