import { MapPin, BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Bookmark } from "lucide-react";
import { useSavedJobsStore } from "@/store/saved-jobs-store";
import { toast } from "sonner";
type JobCardProps = {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  tags: string[];
};

function JobCard({
  id,
  title,
  company,
  location,
  type,
  salary,
  tags,
}: JobCardProps) {
  const { savedJobs, toggleSaveJob } = useSavedJobsStore();
const isSaved = savedJobs.includes(id);

  return (
    <Link to={`/jobs/${id}`}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.2 }}
        className="
        rounded-3xl
        border
        border-white/10
        bg-slate-900/60
        p-6
        backdrop-blur-xl
      "
      >
        <div className="flex items-start justify-between">
          <div>
            <div
              className="
              mb-4
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
              <BriefcaseBusiness className="h-6 w-6 text-white" />
            </div>

            <h3 className="text-xl font-bold text-white">{title}</h3>

            <p className="mt-1 text-slate-400">{company}</p>
          </div>

          <div className="flex items-center gap-3">
            <span
              className="
      rounded-full
      border
      border-emerald-500/20
      bg-emerald-500/10
      px-3
      py-1
      text-xs
      font-medium
      text-emerald-300
    "
            >
              {type}
            </span>

            <button
              onClick={(e) => {
                e.preventDefault();
                toggleSaveJob(id);

                toast.success(
                  isSaved ? "Removed from saved jobs" : "Saved successfully",
                );
              }}
              className="
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-xl
      border
      border-white/10
      bg-slate-800
    "
            >
              <Bookmark
                className={`h-5 w-5 ${
                  isSaved ? "fill-indigo-400 text-indigo-400" : "text-slate-400"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 text-slate-400">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>

        <p className="mt-5 text-lg font-semibold text-white">{salary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="
              rounded-full
              bg-slate-800
              px-3
              py-1
              text-xs
              text-slate-300
            "
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          className="
          mt-6
          w-full
          rounded-2xl
          bg-indigo-600
          py-3
          font-semibold
          text-white
          transition
          hover:bg-indigo-500
          
        "
        >
          Apply Now
        </button>
      </motion.div>
    </Link>
  );
}

export default JobCard;
