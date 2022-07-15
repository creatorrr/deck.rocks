// views/utils/Thanks.tsx

import { thanku } from "../../data/lists";

export default () => (
  <>
    <blockquote> ♥ heartfelt thanks to ♥ </blockquote>

    <ul className="item-grid-2">
      {thanku.map(([url, name], i) => (
        <li key={i}>
          <a href={url}> {name} </a>
        </li>
      ))}
    </ul>
  </>
);
