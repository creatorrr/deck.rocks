// views/utils/FormTips.tsx

import classnames from "classnames";
import { startCase } from "lodash";

export interface FormTipsProps {
  items: string[];
  type_: "tip" | "error";
}

export default ({ items, type_ = "tip" }: FormTipsProps) => (
  <details
    open={false}
    className={classnames({
      "hl-lightsalmon": type_ === "error",
      "hl-lightyellow": type_ === "tip",
    })}
  >
    <summary className="small-80">{startCase(type_)}s</summary>
    {items.map((item, i) => (
      <mark
        className={classnames({
          block: true,
          "small-80": true,
          "std-padding-md": true,
          "margin-1": true,
          "hl-red": type_ === "error",
          "hl-yellow": type_ === "tip",
          "inverted-color": type_ === "error",
        })}
        key={i}
      >
        {type_ === "error" ? "⚠️" : "💡"} &nbsp; {item}
      </mark>
    ))}
  </details>
);
