import { lazy } from "react";

const routerConfig = [
  { path: "/portfolio", component: lazy(() => import("@/pages/portfolio/index")), layout:"portfolio" },
];

export default routerConfig;  