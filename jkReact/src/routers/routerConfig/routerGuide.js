import { lazy } from "react";

const routerConfig = [
  { path: "/portfolio", component: lazy(() => import("@/pages/portfolio/index")), layout:"portfolio" },
  // { path: "/elements", component: lazy(() => import("@/pages/elements/index")), layout:"default" },
  // { path: "/templates", component: lazy(() => import("@/pages/templates/index")), layout:"default" },
  // { path: "/popup", component: lazy(() => import("@/pages/popup/index")), layout:"default" },
  // { path: "/pagelist", component: lazy(() => import("@/pages/pagelist/index")), layout:"default" },
];

export default routerConfig;  