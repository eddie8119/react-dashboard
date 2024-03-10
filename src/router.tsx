import { lazy } from "react";
import { RouteObject } from "react-router";
import SidebarLayout from "./layouts/SidebarLayout";

const OverviewCase = lazy(() => import("./content/dashboards/OverviewCase"));
const CreateCase = lazy(() => import("./content/dashboards/CreateCase"));
const MaterialBudget = lazy(
  () => import("./content/dashboards/MaterialBudget")
);
const MaterialStock = lazy(() => import("./content/dashboards/MaterialStock"));
const CaseProfit = lazy(() => import("./content/dashboards/CaseProfit"));

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
        path: "materialbudget",
        element: <MaterialBudget />,
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
    ],
  },
];

export default routers;
