import React, {FunctionComponent} from 'react';
import '../App.css';
import saifu from '../assets/Images/saifu.jpg';
import StarsIcon from '@material-ui/icons/Stars';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GroupWorkIcon from '@material-ui/icons/GroupWork';

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
          ></img>
        </div>
        <div className="Name">Muhammad Saif Waheed Raja</div>
        <div className="username">safuraja7</div>
        <div className="info">
          <div className="favourites">
            <StarsIcon color="primary"></StarsIcon> Favourites
          </div>
          <div className="mostrecent">
            <RecentActorsIcon color="primary"></RecentActorsIcon> Most Recent
          </div>
          <div className="saved">
            <BookmarksIcon color="primary"></BookmarksIcon> Saved
          </div>
          <div className="followers">
            <PeopleAltIcon color="primary"></PeopleAltIcon> Followers
          </div>
          <div className="groups">
            <GroupWorkIcon color="primary"></GroupWorkIcon> Groups
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
