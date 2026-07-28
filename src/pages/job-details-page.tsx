import { useParams } from "react-router-dom";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Container from "@/components/layout/container";
import Button from "@/components/ui/button";

import { jobs } from "@/data/jobs";

function JobDetailsPage() {
  const { id } = useParams();

  const job = jobs.find(
    (job) => job.id === Number(id),
  );

  if (!job) {
    return (
      <main>
        <Navbar />

        <section className="py-20">
          <Container>
            <div
              className="
                rounded-3xl
                border
                border-dashed
                border-white/10
                p-20
                text-center
              "
            >
              <h1 className="text-4xl font-bold">
                Job Not Found
              </h1>

              <p className="mt-4 text-slate-400">
                The requested job does not exist.
              </p>
            </div>
          </Container>
        </section>

        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />

      <section className="py-14 sm:py-20">
        <Container>
          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-slate-900/60
              p-6
              sm:p-10
              backdrop-blur-xl
            "
          >
            <div
              className="
                flex
                flex-col
                gap-8
                lg:flex-row
                lg:items-start
                lg:justify-between
              "
            >
              <div>
                <p className="text-indigo-400">
                  {job.company}
                </p>

                <h1
                  className="
                    mt-3
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    font-black
                    tracking-tight
                  "
                >
                  {job.title}
                </h1>

                <p className="mt-4 text-slate-400">
                  {job.location} • {job.type}
                </p>

                <p className="mt-6 text-xl font-semibold">
                  {job.salary}
                </p>

                <p className="mt-8 max-w-3xl leading-8 text-slate-400">
                  {job.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {job.tags.map((skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-full
                        bg-slate-800
                        px-4
                        py-2
                        text-sm
                        text-slate-300
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="
                  w-full
                  max-w-sm
                  rounded-3xl
                  border
                  border-indigo-500/20
                  bg-indigo-500/10
                  p-6
                "
              >
                <p className="text-sm text-indigo-300">
                  AI Match Analysis
                </p>

                <h3 className="mt-3 text-4xl font-black">
                  92%
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  Your profile strongly matches
                  the required technical stack and
                  experience level.
                </p>

                <Button
                  disabled
                  className="
                    mt-6
                    w-full
                    cursor-not-allowed
                    opacity-60
                  "
                >
                  Applications Opening Soon
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

export default JobDetailsPage;