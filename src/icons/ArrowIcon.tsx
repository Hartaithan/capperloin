import type { FC } from "react";
import type { IconProps } from "../models/icon";

const ArrowIcon: FC<IconProps> = ({
  width = 24,
  height = 24,
  color = "#d9d9d9",
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <path
        d="M12 17.414L3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowIcon;
