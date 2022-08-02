// views/deck/Footer.tsx

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

    <nav>
      <a href="/">Home</a> <a href="/gallery">Gallery</a>{" "}
      <a href="//github.com/creatorrr/deck.rocks">Github</a>{" "}
      <a href="//diwank.name">Author</a>{" "}
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
