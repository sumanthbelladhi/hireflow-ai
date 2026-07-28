import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import ThemeProvider from "@/components/shared/theme-provider";
import { Toaster } from "sonner";
import AppRouter from "@/routes";
import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")!,
).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={AppRouter} />
      <Toaster richColors />
    </ThemeProvider>
  </React.StrictMode>,
);