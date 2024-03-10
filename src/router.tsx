import { lazy } from "react";
import { RouteObject } from "react-router";
import SidebarLayout from "./layouts/SidebarLayout";

const OverviewCase = lazy(() => import("./content/dashboards/OverviewCase"));
const CreateCase = lazy(() => import("./content/dashboards/CreateCase"));
const ProjectPlan = lazy(() => import("./content/dashboards/ProjectPlan"));
const MaterialStock = lazy(() => import("./content/dashboards/MaterialStock"));
const CaseProfit = lazy(() => import("./content/dashboards/CaseProfit"));
const MaterialLibrary = lazy(
  () => import("./content/dashboards/MaterialLibrary")
);
const ProjectConstruction = lazy(
  () => import("./content/dashboards/ProjectConstruction")
);
const ProjectCloseout = lazy(
  () => import("./content/dashboards/ProjectCloseout")
);
const MaterialBudget = lazy(
  () => import("./content/dashboards/MaterialBudget")
);

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
  {
    path: "plan",
    element: <SidebarLayout />,
    children: [
      {
        path: "materiallibrary",
        element: <MaterialLibrary />,
      },
      {
        path: "materialbudget",
        element: <MaterialBudget />,
      },
      {
        path: "project/:id",
        element: <ProjectPlan />,
      },
    ],
  },
  {
    path: "construction",
    element: <SidebarLayout />,
    children: [
      {
        path: "materialstock",
        element: <MaterialStock />,
      },
      {
        path: "project/:id",
        element: <ProjectConstruction />,
      },
    ],
  },
  {
    path: "closeout",
    element: <SidebarLayout />,
    children: [
      {
        path: "caseprofit",
        element: <CaseProfit />,
      },
      {
        path: "project/:id",
        element: <ProjectCloseout />,
      },
    ],
  },
];

export default routers;
