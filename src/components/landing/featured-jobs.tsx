import Container from "@/components/layout/container";
import JobCard from "@/components/jobs/job-card";
import { jobs } from "@/data/jobs";
import { Link } from "react-router-dom";

function FeaturedJobs() {
  return (
    <section className="text-center py-16 sm:py-24">
      <Container>
        <div className="mb-14">
          <p className="text-sm font-medium text-indigo-400">
            Featured Opportunities
          </p>

          <h2
            className="
              mt-3
              text-3xl sm:text-4xl
              font-black
              tracking-tight
              text-white
            "
          >
            Top Jobs For You
          </h2>

          <p className="mt-4  text-slate-400">
            Curated opportunities from world-class companies powered by AI
            recommendations.
          </p>
        </div>

        <div
          className="
            grid
            gap-6
            sm:grid-cols-2 xl:grid-cols-3
          "
        >
          {jobs.slice(0, 3).map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            to="/jobs"
            className="
                rounded-2xl
                border
                border-slate-300
                px-6
                py-3
                font-semibold
                text-slate-700
                transition
                hover:bg-slate-100
                dark:border-white/10
                dark:text-white
                dark:hover:bg-slate-900
              "
          >
            View All Jobs
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default FeaturedJobs;
