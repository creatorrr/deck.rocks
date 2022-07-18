// data/businessModels/index.ts

import adBased from "./adBased";
import disintermediation from "./disintermediation";
import manufacturer from "./manufacturer";
import onDemand from "./onDemand";
import reseller from "./reseller";
import subscription from "./subscription";
import commission from "./commission";
import freemium from "./freemium";
import licensing from "./licensing";
import marketplace from "./marketplace";
import rental from "./rental";
import retail from "./retail";
import virtualGoods from "./virtualGoods";

export default Promise.all([
  adBased,
  disintermediation,
  manufacturer,
  onDemand,
  reseller,
  subscription,
  commission,
  freemium,
  licensing,
  marketplace,
  rental,
  retail,
  virtualGoods,
]).then(
  ([
    adBased,
    disintermediation,
    manufacturer,
    onDemand,
    reseller,
    subscription,
    commission,
    freemium,
    licensing,
    marketplace,
    rental,
    retail,
    virtualGoods,
  ]) => ({
    adBased,
    disintermediation,
    manufacturer,
    onDemand,
    reseller,
    subscription,
    commission,
    freemium,
    licensing,
    marketplace,
    rental,
    retail,
    virtualGoods,
  })
);
