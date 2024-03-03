import { FC } from "react";
import Button from "@mui/material/Button";

interface TitleAreaProps {
  title: string;
  index: string;
}

const TitleArea: FC<TitleAreaProps> = ({ title, index }) => {
  return (
    <div className="w-full h-[95px] flex justify-between">
      <div className="flex flex-col">
        <h1 className="text-gray">{title}</h1>
        <p className="text-primary">{index}</p>
      </div>

      <Button
        variant="contained"
        disableElevation
        style={{
          backgroundColor: "#4CCEAC",
          color: "white",
          width: "200px",
          height: "50px",
        }}
      >
        elevation
      </Button>
    </div>
  );
};

export default TitleArea;
