// data/businessModels/index.ts

import adBased from "./adBased";
import manufacturer from "./manufacturer";
import onDemand from "./onDemand";
import subscription from "./subscription";
import freemium from "./freemium";
import licensing from "./licensing";
import marketplace from "./marketplace";
import rental from "./rental";
import retail from "./retail";

export default Promise.all([
  adBased,
  manufacturer,
  onDemand,
  subscription,
  freemium,
  licensing,
  marketplace,
  rental,
  retail,
]).then(
  ([
    adBased,
    manufacturer,
    onDemand,
    subscription,
    freemium,
    licensing,
    marketplace,
    rental,
    retail,
  ]) => ({
    adBased,
    manufacturer,
    onDemand,
    subscription,
    freemium,
    licensing,
    marketplace,
    rental,
    retail,
  })
);
