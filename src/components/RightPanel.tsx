import React, {FunctionComponent} from 'react';
import '../App.css';
import SearchIcon from '@material-ui/icons/Search';
import saifu from '../assets/Images/saifu.jpg';

const RightPanel: FunctionComponent = () => {
  return (
    <div className="position-absolute top-0 end-0">
      <h5 className="followersname">
        Followers
        <SearchIcon className="searchicon" fontSize="default"></SearchIcon>
      </h5>
      <div className="followerss">
        <ul className="list-group">
          <div className="imgname">
            <img src={saifu} className="rounded-circle" alt="..." height="40px">
            </img>

            <br />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default RightPanel;
