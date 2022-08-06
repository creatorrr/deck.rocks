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
        d="M 31.275 62.192 h -3.876 v 5.74 h 3.876 c 0.444 0 0.806 -0.361 0.806 -0.806 v -4.129 C 32.081 62.554 31.72 62.192 31.275 62.192 z"
        style={toStyle(
          "stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
        )}
        transform=" matrix(1 0 0 1 0 0) "
        strokeLinecap="round"
      />
      <path
        d="M 46.097 62.192 h -3.587 v 12.41 h 3.587 c 0.604 0 1.095 -0.491 1.095 -1.095 V 63.286 C 47.191 62.683 46.7 62.192 46.097 62.192 z"
        style={toStyle(
          "stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
        )}
        transform=" matrix(1 0 0 1 0 0) "
        strokeLinecap="round"
      />
      <path
        d="M 77.467 17.233 L 61.702 1.467 C 60.755 0.521 59.496 0 58.157 0 H 16.078 c -2.764 0 -5.013 2.249 -5.013 5.013 v 79.975 c 0 2.764 2.249 5.013 5.013 5.013 h 57.844 c 2.764 0 5.013 -2.249 5.013 -5.013 v -64.21 C 78.935 19.439 78.413 18.18 77.467 17.233 z M 31.863 35.012 c 0.155 -0.374 0.52 -0.617 0.924 -0.617 h 4.805 V 22.616 c 0 -0.552 0.448 -1 1 -1 h 12.816 c 0.553 0 1 0.448 1 1 v 11.778 h 4.805 c 0.404 0 0.77 0.244 0.924 0.617 c 0.155 0.374 0.069 0.804 -0.217 1.09 L 45.707 48.314 c -0.195 0.195 -0.451 0.293 -0.707 0.293 s -0.512 -0.098 -0.707 -0.293 L 32.08 36.102 C 31.794 35.815 31.708 35.386 31.863 35.012 z M 36.081 67.127 c 0 2.649 -2.156 4.806 -4.806 4.806 h -3.876 v 4.67 c 0 1.104 -0.896 2 -2 2 s -2 -0.896 -2 -2 v -6.67 v -9.74 c 0 -1.104 0.896 -2 2 -2 h 5.876 c 2.65 0 4.806 2.156 4.806 4.806 V 67.127 z M 51.191 73.508 c 0 2.81 -2.285 5.095 -5.095 5.095 h -5.587 c -1.104 0 -2 -0.896 -2 -2 v -16.41 c 0 -1.104 0.896 -2 2 -2 h 5.587 c 2.81 0 5.095 2.285 5.095 5.094 V 73.508 z M 64.601 62.192 h -6.682 v 4.205 h 3.686 c 1.104 0 2 0.896 2 2 s -0.896 2 -2 2 h -3.686 v 6.205 c 0 1.104 -0.896 2 -2 2 s -2 -0.896 -2 -2 v -16.41 c 0 -1.104 0.896 -2 2 -2 h 8.682 c 1.104 0 2 0.896 2 2 S 65.705 62.192 64.601 62.192 z M 62.15 17.529 c -0.411 0 -0.745 -0.334 -0.745 -0.745 V 6.828 l 10.701 10.702 H 62.15 z"
        style={toStyle(
          "stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
        )}
        transform=" matrix(1 0 0 1 0 0) "
        strokeLinecap="round"
      />
    </g>
  </svg>
);
