// views/general/Footer.tsx

import AdInsert from "../utils/AdInsert";
import GeneratedUsing, { GeneratedUsingProps } from "../utils/GeneratedUsing";
import ProductHunt from "../utils/ProductHunt";

export interface FooterProps extends GeneratedUsingProps {}

export default (props: FooterProps) => (
  <footer>
    {props.idea && (
      <>
        <GeneratedUsing {...props} />
        <br />
      </>
    )}

    <AdInsert />

    <nav className="not-printable">
      <a href="/">Home</a> <a href="/gallery">Gallery</a>{" "}
      <a href="//github.com/creatorrr/deck.rocks">Github</a>{" "}
      <a href="//diwank.name">Author</a> <a href="/privacy.html">Privacy</a>{" "}
      <ProductHunt
        theme="neutral"
        size={1}
        imgStyle={{
          verticalAlign: "bottom",
          float: "right",
          marginLeft: "-125px",
        }}
      />
    </nav>
  </footer>
);
