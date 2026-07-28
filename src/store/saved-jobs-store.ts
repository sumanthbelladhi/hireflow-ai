import { create } from "zustand";
import { persist } from "zustand/middleware";

type SavedJobsState = {
  savedJobs: number[];
  toggleSaveJob: (id: number) => void;
};

export const useSavedJobsStore =
  create<SavedJobsState>()(
    persist(
      (set) => ({
        savedJobs: [],

        toggleSaveJob: (id) =>
          set((state) => ({
            savedJobs:
              state.savedJobs.includes(id)
                ? state.savedJobs.filter(
                    (jobId) => jobId !== id,
                  )
                : [...state.savedJobs, id],
          })),
      }),
      {
        name: "saved-jobs-storage",
      },
    ),
  );