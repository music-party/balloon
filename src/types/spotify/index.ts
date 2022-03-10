export * as Req from "./requests";
export * as Res from "./responses";
export * as Objects from "./objects";
export * as Endpoints from "./endpoints";

import * as Req from "./requests";
import * as Res from "./responses";
import * as Objects from "./objects";
import * as Api from "./endpoints";

export default {
  Req,
  Res,
  ...Objects,
  Api,
};
