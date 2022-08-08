// views/utils/AdInsert.tsx

import { enableAds, googleAdsClientId } from "../../env";

export default () =>
  enableAds && (
    <>
      <ins
        className="adsbygoogle not-printable"
        style={{ display: "block" }}
        data-ad-client={googleAdsClientId}
        data-ad-slot="6384944670"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <hr style={{ width: "100%" }} />
    </>
  );
