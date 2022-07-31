// views/utils/Thanks.tsx

import { thanku } from "../../data/lists";

export default () => (
  <>
    <h4> Heartfelt thanks to </h4>

    <ul className="item-grid-2">
      {thanku.map(([url, name], i) => (
        <li key={i}>
          <a href={url}> {name} </a>
        </li>
      ))}
    </ul>
  </>
);
