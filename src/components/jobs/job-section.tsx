import { Search } from "lucide-react";

import Container from "@/components/layout/container";
import JobCard from "./job-card";
import { jobs } from "@/data/jobs";
import { useMemo, useState } from "react";
function JobsSection() {
  const [search, setSearch] = useState("");
  const [jobType, setJobType] = useState("");
  const [experience, setExperience] = useState("");
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase()) ||
        job.location.toLowerCase().includes(search.toLowerCase());

      const matchesType = !jobType || job.type === jobType;

      const matchesExperience = !experience || job.experience === experience;

      return matchesSearch && matchesType && matchesExperience;
    });
  }, [search, jobType, experience]);
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="mb-10">
          <h1 className="text-5xl font-black tracking-tight">Explore Jobs</h1>

          <p className="mt-4 text-slate-400">
            Discover opportunities tailored for your career growth.
          </p>
        </div>

        <div
          className="
            mb-10
            flex
            flex-col
            gap-4
            rounded-3xl
            border
            border-white/10
            bg-slate-900/60
            p-5
            backdrop-blur-xl
            lg:flex-row
          "
        >
          <div className="relative flex-1">
            <Search
              className="
                absolute
                left-4
                top-1/2
                h-5
                w-5
                -translate-y-1/2
                text-slate-500
              "
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search jobs..."
              className="
                h-14
                w-full
                rounded-2xl
                border
                border-white/10
                bg-slate-950
                pl-12
                pr-4
                text-white
                outline-none
              "
            />
          </div>

          <select
            className="
              h-14
              rounded-2xl
              border
              border-white/10
              bg-slate-950
              px-4
              text-white
              outline-none
            "
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Full Time">Full Time</option>
          </select>

          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="
                h-14
                rounded-2xl
                border
                border-white/10
                bg-slate-950
                px-4
                text-white
                outline-none
            "
          >
            <option value="">Experience</option>

            <option value="1-3 Years">1-3 Years</option>

            <option value="2-4 Years">2-4 Years</option>

            <option value="3-5 Years">3-5 Years</option>

            <option value="4-6 Years">4-6 Years</option>
          </select>
        </div>

       {filteredJobs.length === 0 ? (
  <div
    className="
      rounded-3xl
      border
      border-dashed
      border-white/10
      p-16
      text-center
    "
  >
    <h3 className="text-2xl font-bold">
      No Jobs Found
    </h3>

    <p className="mt-4 text-slate-400">
      Try adjusting your filters or search.
    </p>
  </div>
) : (
  <div
    className="
      grid
      gap-6
      sm:grid-cols-2
      xl:grid-cols-3
    "
  >
    {filteredJobs.map((job) => (
      <JobCard key={job.id} {...job} />
    ))}
  </div>
)}
      </Container>
    </section>
  );
}

export default JobsSection;
