import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home";
import Business from "../pages/business";
import Entertaiment from "../pages/entertaiment";
import General from "../pages/general";
import Health from "../pages/health";
import Science from "../pages/science";
import Sports from "../pages/sports";

export default function Routes() {
  const routes = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/business", element: <Business /> },
    { path: "/entertaiment", element: <Entertaiment /> },
    { path: "/general", element: <General /> },
    { path: "/health", element: <Health /> },
    { path: "/science", element: <Science /> },
    { path: "/sports", element: <Sports /> },
    { path: "/technology", element: <Sports /> },
  ]);
  return <RouterProvider router={routes} />;
}
