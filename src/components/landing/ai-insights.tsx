import Container from "@/components/layout/container";
import {
  BrainCircuit,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Match Score",
    description:
      "Get intelligent job compatibility analysis instantly.",
  },
  {
    icon: Sparkles,
    title: "Smart Recommendations",
    description:
      "Personalized opportunities based on your skills.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth Insights",
    description:
      "Track market trends and improve your profile.",
  },
];

function AIInsights() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="text-center">
          <p className="text-sm font-medium text-violet-400">
            AI Powered Features
          </p>

          <h2
            className="
              mt-3
              text-3xl sm:text-4xl
              font-black
              tracking-tight
            "
          >
            Built For Modern Careers
          </h2>
        </div>

        <div
          className="
            mt-16
            grid
            gap-6
            md:grid-cols-3
          "
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
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
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default AIInsights;