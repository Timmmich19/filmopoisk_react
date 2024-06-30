import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "@/pages/homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
