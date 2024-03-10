import React from "react";
import { useParams } from "react-router-dom";
import PageTitle from "./../../../components/PageTitle";
import ChoseFirm from "../../../components/ChoseFirm";

const ProjectPlan = () => {
  const { id } = useParams();

  return (
    <div className="w-full h-full flex flex-col gap-6 p-6">
      <PageTitle title={`專案名稱: ${id}`} />
      <p>建立工程種類</p>
      <ChoseFirm />
    </div>
  );
};

export default ProjectPlan;
