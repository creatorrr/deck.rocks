// views/utils/BarChart.tsx

import * as React from "react";
import _ from "lodash";

export interface BarChartProps {
  data: (string | number)[][];
  valueFormatter: (value: number) => string;
}
/* data={[[keywords, marketSize], getComparableGDP(marketSize)]}
 * valueFormatter={(val: number) => `$${millify(val, { precision: 2 })}`} */

export default ({ data, valueFormatter }: BarChartProps) => (
  <div className="chart">
    {data.map(([label, value]: [string, number], idx: number) => (
      <div
        key={idx}
        className="bar"
        style={
          {
            "--value": _.floor((value / (_(data).map(1).max() as any)) * 100),
            "--bg-color": value === _(data).map(1).max() ? "green" : "blue",
          } as React.CSSProperties
        }
      >
        <strong>{label}</strong>{" "}
        <label className="value">{valueFormatter(value)}</label>
      </div>
    ))}
  </div>
);
