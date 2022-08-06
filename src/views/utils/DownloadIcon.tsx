// views/utils/PrintIcon.tsx

import toStyle from "css-to-style";

export interface PrintIconProps {
  size?: number;
}

export default ({ size = 16 }: PrintIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width={size}
    height={size}
    viewBox="0 0 256 256"
  >
    <defs></defs>
    <g
      style={toStyle(
        "stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
      )}
      transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
    >
      <path
        d="M 66.848 42.103 c -2.111 -1.782 -5.266 -1.512 -7.046 0.599 L 50 54.325 V 5 c 0 -2.761 -2.238 -5 -5 -5 c -2.761 0 -5 2.239 -5 5 v 49.325 l -9.802 -11.623 c -1.78 -2.111 -4.934 -2.378 -7.046 -0.599 c -2.111 1.78 -2.379 4.935 -0.599 7.046 l 18.624 22.085 c 0.075 0.088 0.156 0.168 0.236 0.251 c 0.028 0.029 0.054 0.059 0.083 0.088 c 0.2 0.196 0.416 0.372 0.643 0.531 c 0.044 0.031 0.088 0.061 0.133 0.091 c 0.23 0.15 0.471 0.282 0.722 0.392 c 0.05 0.022 0.101 0.04 0.151 0.061 c 0.264 0.105 0.534 0.193 0.813 0.252 c 0.035 0.007 0.071 0.011 0.106 0.018 c 0.306 0.058 0.618 0.094 0.935 0.094 c 0.317 0 0.628 -0.036 0.934 -0.094 c 0.035 -0.007 0.071 -0.01 0.106 -0.018 c 0.279 -0.059 0.549 -0.147 0.812 -0.252 c 0.052 -0.021 0.103 -0.039 0.154 -0.062 c 0.25 -0.11 0.49 -0.241 0.719 -0.39 c 0.047 -0.03 0.092 -0.061 0.137 -0.093 c 0.226 -0.158 0.441 -0.333 0.64 -0.528 c 0.03 -0.029 0.057 -0.061 0.086 -0.091 c 0.079 -0.082 0.161 -0.161 0.234 -0.249 l 18.624 -22.085 C 69.227 47.037 68.958 43.883 66.848 42.103 z"
        style={toStyle(
          "stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
        )}
        transform=" matrix(1 0 0 1 0 0) "
        strokeLinecap="round"
      />
      <path
        d="M 79.692 90 H 10.307 c -2.761 0 -5 -2.239 -5 -5 l 0 -20.352 c 0 -2.611 1.909 -4.943 4.508 -5.191 c 2.982 -0.285 5.492 2.053 5.492 4.976 v 14.528 c 0 0.574 0.465 1.039 1.039 1.039 h 57.308 c 0.574 0 1.039 -0.465 1.039 -1.039 V 64.648 c 0 -2.612 1.91 -4.943 4.509 -5.191 c 2.982 -0.284 5.491 2.053 5.491 4.977 V 85 C 84.692 87.761 82.454 90 79.692 90 z"
        style={toStyle(
          "stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
        )}
        transform=" matrix(1 0 0 1 0 0) "
        strokeLinecap="round"
      />
    </g>
  </svg>
);
