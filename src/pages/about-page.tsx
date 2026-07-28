import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Container from "@/components/layout/container";
import Logo from "../components/layout/logo";
import { BrainCircuit, BriefcaseBusiness, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.4 }} 
     >
      <Navbar />

      <section
        className="
            relative
            overflow-hidden
            py-16
            sm:py-24
        "
      >
        <div
          className="
                    absolute
                    left-1/2
                    top-40
                    h-[300px]
                    w-[300px]
                    -translate-x-1/2
                    rounded-full
                    bg-indigo-500/20
                    blur-3xl
                "
        />
        <Container>
          <div className="text-center ">
           
            <motion.div className="text-center" 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}> 
            <div className="mb-12 flex justify-center">
              <Logo />
            </div>
            <p className="text-sm font-medium text-indigo-400">
              About HireFlow AI
            </p>

            <h1
              className="
                mt-4
                text-4xl
                sm:text-5xl
                font-black
                tracking-tight
              "
            >
              Building Smarter Career Experiences
            </h1>

            <p
              className="
                mt-8
                text-base
                sm:text-lg
                leading-8
                text-slate-400
              "
            >
              HireFlow AI is a modern AI-powered job discovery platform designed
              to help professionals explore opportunities, track industry
              trends, and discover roles tailored to their skills.
            </p>

            <p
              className="
                mt-6
                text-base
                sm:text-lg
                leading-8
                text-slate-400
              "
            >
              This project focuses on delivering a clean user experience,
              responsive design, and scalable frontend architecture using React,
              TypeScript, Tailwind CSS, Zustand, and Framer Motion.
            </p>
            </motion.div>
            <div
              className="
                    mt-16
                    grid
                    gap-6
                    sm:grid-cols-2
                    lg:grid-cols-3
                "
            >
              {[
                {
                  icon: BrainCircuit,
                  title: "AI-Powered Matching",
                  description:
                    "Smart recommendations tailored to skills and experience.",
                },
                {
                  icon: BriefcaseBusiness,
                  title: "Modern Job Discovery",
                  description:
                    "Explore curated opportunities from top companies.",
                },
                {
                  icon: Sparkles,
                  title: "Premium UX",
                  description:
                    "Crafted with responsive design and polished interactions.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
          rounded-3xl
          border
          border-white/10
          bg-slate-900/60
          p-8
          backdrop-blur-xl
        "
                  >
                    <div
                      className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-indigo-500
            to-violet-500
          "
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

                    <p className="mt-4 leading-7 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
            <div
              className="
    mt-16
    grid
    gap-6
    sm:grid-cols-3
  "
            >
              {[
                {
                  value: "10K+",
                  label: "Active Opportunities",
                },
                {
                  value: "500+",
                  label: "Hiring Companies",
                },
                {
                  value: "95%",
                  label: "AI Match Accuracy",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="
        rounded-3xl
        border
        border-white/10
        bg-slate-900/60
        p-8
        text-center
        backdrop-blur-xl
      "
                >
                  <h3
                    className="
          text-4xl
          font-black
          text-white
        "
                  >
                    {stat.value}
                  </h3>

                  <p className="mt-3 text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </motion.main>
  );
}

export default AboutPage;
