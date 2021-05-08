import React, { FC } from "react";
import "../../style/Hackathons/LeftPanel.css";
import { HackathonFilters } from "../../assets/Constant/sample.js";

type props = {
  tags: string;
  subTag: string[];
};

const Tags: FC<props> = ({ subTag, tags }) => {
  return (
    <div className="tags_container bg-dark mt-5">
      <p className="Tags text-gray font-weight-bold text-uppercase w-50 pb-4 ">
        {tags}
      </p>
      <ul className="list-group">
        {subTag.map((subtag) => (
          <li className="list-group-item bg-dark mx-auto d-flex flex-column">
            {subtag}
          </li>
        ))}
      </ul>
    </div>
  );
};

const LeftPanelHackathons: FC = () => {
  return (
    <div className="left_panel  vertical-nav w-25 mr-4" id="sidebar">
      {HackathonFilters.map((item) => (
        <Tags tags={item.tag} subTag={item.subtag} key={item.id} />
      ))}
    </div>
  );
};
export default LeftPanelHackathons;
