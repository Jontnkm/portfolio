import routerMain from "./routerConfig/routerMain";
import routerGuide from "./routerConfig/routerGuide";
import routerSub1 from "./routerConfig/routerSub1";
import routerSub2 from "./routerConfig/routerSub2";

const routerConfig = [
  ...routerMain,
  ...routerGuide,
  ...routerSub1,
  ...routerSub2,
];

export default routerConfig;