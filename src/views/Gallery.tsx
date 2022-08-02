// views/Gallery.tsx

import type { FormProps } from "./general/Form";
import type { HeadProps } from "./general/Head";
import type { GalleryItemsProps } from "./general/GalleryItems";

import Controls from "./Controls";
import Footer from "./general/Footer";
import GalleryItems from "./general/GalleryItems";
import Head from "./general/Head";
import ProductHunt from "./utils/ProductHunt";

interface GalleryProps extends HeadProps, FormProps, GalleryItemsProps {
  total?: number;
}

export default ({ total, ...props }: GalleryProps) => (
  <html>
    <Head {...props} />
    <Controls
      idea={null}
      job_id={null}
      hash={null}
      shareUrl="/gallery"
      {...props}
    />
    <section id="gallery">
      <span className="inline-block float-right">
        <ProductHunt size={2} />
      </span>

      <h2>Gallery</h2>

      <p>
        Some of the ideas people generated so far.{" "}
        {total && <mark>{`${total}+ and counting!`}</mark>}
        <br />
        <cite>(Hover over the taglines to see the original idea)</cite>
      </p>
      <hr />

      <GalleryItems {...props} />
    </section>
    <Footer {...props} idea="" />
  </html>
);
