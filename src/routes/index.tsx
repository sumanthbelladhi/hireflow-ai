import { createBrowserRouter } from "react-router-dom";

import HomePage from "@/pages/home-page";
import JobsPage from "@/pages/jobs-page";
import JobDetailsPage from "@/pages/job-details-page";
import SavedJobsPage from "@/pages/saved-jobs-page";
import NotFoundPage from "@/pages/not-found";
import AboutPage from "@/pages/about-page";
import InsightsPage from "@/pages/insights-page";
const router = createBrowserRouter([
    {
      path: "*",
      element: <NotFoundPage />,
    },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/jobs",
    element: <JobsPage />,
  },
  {
    path: "/jobs/:id",
    element: <JobDetailsPage />,
  },
  {
    path:"/saved-jobs",
    element: <SavedJobsPage />
  },
  {
    path:"/about",
    element: <AboutPage />
  },
  {
    path:"/insights",
    element: <InsightsPage />
  }
]);

export default router;