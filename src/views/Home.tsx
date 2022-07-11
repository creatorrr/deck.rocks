// views/Homei.tsx

import Head from "./general/Head";
import Controls from "./Controls";
import Intro from "./Intro";

import type { FormProps } from "./general/Form";
import type { HeadProps } from "./general/Head";

interface HomeProps extends HeadProps, FormProps {
  idea: string;
}

export default ({ idea, ...props }: HomeProps) => (
  <html>
    <Head {...props} />
    <Controls {...props} />
    <Intro idea={idea} />
  </html>
);
