import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Container from "@/components/layout/container";

import {
  BrainCircuit,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const insights = [
  {
    icon: TrendingUp,
    title: "Frontend Engineering Trends",
    description:
      "React, TypeScript, and AI-assisted development continue dominating hiring demand.",
  },
  {
    icon: BrainCircuit,
    title: "AI Career Matching",
    description:
      "AI-driven platforms improve job discovery and candidate-role alignment significantly.",
  },
  {
    icon: Sparkles,
    title: "Remote Hiring Growth",
    description:
      "Remote-first engineering opportunities continue expanding across global companies.",
  },
];

function InsightsPage() {
  return (
    <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.4 }}
    >
      <Navbar />

      <section className="py-16 sm:py-24">
        <div
          className="absolute left-1/2 top-40 h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl"/>
        <Container>
          <motion.div className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-violet-400">
              AI Career Insights
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
              Stay Ahead of Industry Trends
            </h1>

            <p
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-base
                sm:text-lg
                leading-8
                text-slate-400
              "
            >
              Explore curated insights about hiring,
              engineering trends, AI-powered
              recruitment, and the future of careers.
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
            {insights.map((item) => {
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

                  <h3 className="mt-6 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <Footer />
    </motion.main>
  );
}

export default InsightsPage;