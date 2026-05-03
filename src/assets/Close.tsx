import type { SVGProps } from "react";
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg id="close-button" width="1em" height="1em" viewBox="0 0 25 25" {...props}>
    <path
      d="M27 27 5 5m.1 22L27 4.9"
      style={{
        fill: "currentColor",
        stroke: "currentColor",
        strokeWidth: 3,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 100,
        strokeDasharray: "none",
      }}
      transform="translate(-3.5 -3.4)"
    />
  </svg>
);
export default SvgClose;
