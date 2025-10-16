import { lazy } from "react";

const routerConfig = [
  { path: "/lcn", component: lazy(() => import("@/pages/lcn/index")), layout:"lcn" },
];

export default routerConfig;  