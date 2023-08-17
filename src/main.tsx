import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";
import { makeServer } from "./libs";

const root = document.getElementById("root");

const queryClent = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      suspense: true,
    },
  },
});

makeServer({ environment: "development" });

createRoot(root!).render(
  <StrictMode>
    <QueryClientProvider client={queryClent}>
      <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
    </QueryClientProvider>
  </StrictMode>,
);
