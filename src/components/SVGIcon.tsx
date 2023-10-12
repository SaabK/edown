import { SVGIconProps } from "../types";

function SVGIcon({
  width,
  height,
  viewBox,
  pathFill,
  opacity = "0.3",
  d,
}: SVGIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity={opacity}
        fillRule="evenodd"
        clipRule="evenodd"
        d={d}
        fill={pathFill}
      />
    </svg>
  );
}

export default SVGIcon;
