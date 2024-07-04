import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "@/pages/homepage";
import { BaseLayout } from "./layouts/BaseLayout";

export const router = (): ReturnType<typeof createBrowserRouter> =>
  createBrowserRouter([
    {
      element: BaseLayout,
      errorElement: <div>error</div>,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
    },
  ]);
