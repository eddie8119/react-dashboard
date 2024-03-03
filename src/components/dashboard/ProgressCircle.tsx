import { FC } from "react";
import { Box } from "@mui/material";

interface ProgressCircleProps {
  progress: number;
}

const ProgressCircle: FC<ProgressCircleProps> = ({ progress }) => {
  const angle = (progress / 100) * 360;
  const size = "40";

  return (
    <Box
      sx={{
        background: `radial-gradient(#1F2A40 55%, transparent 56%),
          conic-gradient(transparent 0deg ${angle}deg, #6870FA ${angle}deg 360deg),
          #4CCEAC`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
