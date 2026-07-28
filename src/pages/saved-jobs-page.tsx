import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Container from "@/components/layout/container";
import JobCard from "@/components/jobs/job-card";

import { jobs } from "@/data/jobs";
import { useSavedJobsStore } from "@/store/saved-jobs-store";

function SavedJobsPage() {
  const { savedJobs } = useSavedJobsStore();

  const filteredJobs = jobs.filter((job) =>
    savedJobs.includes(job.id),
  );

  return (
    <main>
      <Navbar />

      <section className="py-14 sm:py-20">
        <Container>
          <h1 className="text-5xl font-black">
            Saved Jobs
          </h1>

          <p className="mt-4 text-slate-400">
            Your bookmarked opportunities.
          </p>

          {filteredJobs.length === 0 ? (
            <div
              className="
                mt-16
                rounded-3xl
                border
                border-dashed
                border-white/10
                p-16
                text-center
              "
            >
              <h3 className="text-2xl font-bold">
                No Saved Jobs Yet
              </h3>

              <p className="mt-4 text-slate-400">
                Bookmark jobs to see them here.
              </p>
            </div>
          ) : (
            <div
              className="
                mt-12
                grid
                gap-6
                sm:grid-cols-2 xl:grid-cols-3
              "
            >
              {filteredJobs.map((job) => (
                <JobCard key={job.id} {...job} />
              ))}
            </div>
          )}
        </Container>
      </section>

      <Footer />
    </main>
  );
}

export default SavedJobsPage;