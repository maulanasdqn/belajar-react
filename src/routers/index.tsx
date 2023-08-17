import { lazily } from "react-lazily";
import { createBrowserRouter } from "react-router-dom";

const { HomePages, BookPages } = lazily(() => import("@/pages"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePages />,
  },
  {
    path: "/book",
    element: <BookPages />,
  },
]);
