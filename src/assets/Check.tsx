import type { SVGProps } from "react";
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="accept-button"
    width="1em"
    height="1em"
    viewBox="0 0 23 25"
    {...props}
  >
    <path
      d="M16 27 27 5M16 27 7.4 15"
      style={{
        fill: "currentColor",
        stroke: "currentColor",
        strokeWidth: 3,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 100,
      }}
      transform="translate(-5.9 -3.5)"
    />
  </svg>
);
export default SvgCheck;
