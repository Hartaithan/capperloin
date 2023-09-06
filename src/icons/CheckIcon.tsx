import type { FC } from "react";
import type { IconProps } from "../models/icon";

const CheckIcon: FC<IconProps> = ({
  width = 32,
  height = 32,
  color = "#77C0AF",
  rotate = 0,
  opacity = 1,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: `rotate(${rotate}deg)`,
        opacity: opacity,
        transition: "opacity 0.3s ease",
      }}
    >
      <path
        d="M28.281 6.281L11 23.563 3.719 16.28 2.28 17.72l8 8 .719.687.719-.687 18-18z"
        fill={color}
      />
    </svg>
  );
};

export default CheckIcon;
