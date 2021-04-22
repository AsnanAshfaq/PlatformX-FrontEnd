import React, { FunctionComponent } from "react";
import "../App.css";
import saifu from "../assets/Images/saifu.jpg";
import StarsIcon from "@material-ui/icons/Stars";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import Colors from "../assets/Constant/Colors.js";

type props = {
  className: string;
  label: string;
};

const Icons: FunctionComponent<props> = ({ className, label, children }) => {
  return (
    <div className={`${className} d-flex flex-row `}>
      {children}
      <p>{label}</p>
    </div>
  );
};

const LeftPanel: FunctionComponent = () => {
  return (
    <div className="MainClass">
      <div className="leftpanel">
        <div className="profilepic">
          <img
            src={saifu}
            className="rounded-circle"
            alt="..."
            height="200px"
          />
        </div>
        <div className="Name">Muhammad Saif Waheed Raja</div>
        <div className="username">safuraja7</div>
        <div className="info">
          <Icons className={"favourites"} label={"Favorites"}>
            <StarsIcon color="primary" />
          </Icons>
          <Icons className={"mostrecent"} label={"Most Recent"}>
            <RecentActorsIcon color="primary" />
          </Icons>
          <Icons className={"mostrecent"} label={"Saved"}>
            <BookmarksIcon color="primary" />
          </Icons>
          <Icons className={"followers"} label={"Followers"}>
            <PeopleAltIcon color="primary" />
          </Icons>
          <Icons className={"groups"} label={"Groups"}>
            <GroupWorkIcon color="primary" />
          </Icons>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
// constant, function, class
