// views/Gallery.tsx

import type { FormProps } from "./general/Form";
import type { HeadProps } from "./general/Head";
import type { GalleryItemsProps } from "./general/GalleryItems";

import Head from "./general/Head";
import GalleryItems from "./general/GalleryItems";
import Controls from "./Controls";

interface GalleryProps extends HeadProps, FormProps, GalleryItemsProps {}

export default ({ ...props }: GalleryProps) => (
  <html>
    <Head {...props} />
    <Controls {...props} />
    <GalleryItems {...props} />
  </html>
);
