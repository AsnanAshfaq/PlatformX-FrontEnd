import React, { FC } from "react";
import LeftPanelHackathons from "../Hackathons/LeftPanel";
import { ProjectFilter } from "../../assets/Constant/sample";
const Projects: FC = () => {
  return <LeftPanelHackathons data={ProjectFilter} />;
};

export default Projects;
