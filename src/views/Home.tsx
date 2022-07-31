// views/Home.tsx

import type { FormProps } from "./general/Form";
import type { HeadProps } from "./general/Head";
import type { IntroProps } from "./general/Intro";

import Head from "./general/Head";
import Intro from "./general/Intro";
import Controls from "./Controls";
import Footer from "./Footer";

interface HomeProps extends HeadProps, FormProps, IntroProps {}

export default ({ idea, ...props }: HomeProps) => (
  <html>
    <Head {...props} />
    <Controls idea={idea} {...props} />
    <Intro {...props} />
    <Footer />
  </html>
);
