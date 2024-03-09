import { lazy } from "react";
import { RouteObject } from "react-router";
import SidebarLayout from "./layouts/SidebarLayout";

const OverviewCase = lazy(() => import("./content/dashboards/OverviewCase"));
const CreateCase = lazy(() => import("./content/dashboards/CreateCase"));

const routers: RouteObject[] = [
  {
    path: "",
    element: <SidebarLayout />,
    children: [
      {
        path: "/",
        element: <OverviewCase />,
      },
      {
        path: "createcase",
        element: <CreateCase />,
      },
    ],
  },
];

export default routers;
