// views/Home.tsx

import type { FormProps } from "./general/Form";
import type { HeadProps } from "./general/Head";
import type { IntroProps } from "./general/Intro";

import Footer from "./general/Footer";
import Head from "./general/Head";
import Intro from "./general/Intro";
import Controls from "./Controls";

interface HomeProps extends HeadProps, FormProps, IntroProps {}

export default ({ idea, ...props }: HomeProps) => (
  <html>
    <Head {...props} />
    <Controls idea={idea} job_id={null} hash={null} {...props} />
    <Intro {...props} />
    <Footer {...props} idea="" />
  </html>
);
