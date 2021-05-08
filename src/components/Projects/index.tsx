import React, { FC } from "react";
import LeftPanelHackathons from "../Hackathons/LeftPanel";
import { ProjectFilters } from "../../assets/Constant/sample";
const Projects: FC = () => {
  return <LeftPanelHackathons data={ProjectFilters} />;
};

export default Projects;
