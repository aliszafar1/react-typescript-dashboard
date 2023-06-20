import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Common from "./common";

const Dashboard = React.lazy(() => import("../pages/dashboard"));
const Contacts = React.lazy(() => import("../pages/contacts"));
const Invoices = React.lazy(() => import("../pages/invoices"));
const Team = React.lazy(() => import("../pages/team"));

export const PATH = {
  HOME: "/",
  CONTACTS: "/contacts",
  TEAM: "/team",
  INVOICES: "/invoices",
  NOT_FOUND: "*",
};

const ROUTES = [
  { path: PATH.HOME, component: <Dashboard /> },
  { path: PATH.CONTACTS, component: <Contacts /> },
  { path: PATH.INVOICES, component: <Invoices /> },
  { path: PATH.TEAM, component: <Team /> },
];

const AppRoutes = () => {
  return (
    <Routes>
      {ROUTES.map((route, key) => {
        const { path, component } = route;
        return (
          <Route
            key={key}
            path={path}
            element={
              <React.Suspense fallback={<Common.FallBack />}>
                {component}
              </React.Suspense>
            }
          />
        );
      })}
      <Route path={PATH.NOT_FOUND} element={<Common.NoMatch />} />
    </Routes>
  );
};

export default AppRoutes;
