import React, {FC} from 'react';
import {Posts} from '../assets/Constant/sample.js';
import CenterPanel_Card from './CenterPanel_Card';
import '../style/CenterPanel.css';
import saifu from '../assets/Images/saifu.jpg';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
const CenterPanel: FC = () => {
  return (
    <div className="center_panel">
      <div className="search_field_container">
        <img src={saifu} alt="" className="search_field_image rounded-circle" />
        <div className="input-group">
          <input
            type="text"
            placeholder="What's in your mind?"
            className="form-control"
          />
        </div>
        <hr />
        <div>
          <a className="photo_video" href="#">
            <AddAPhotoIcon />
            Photo/Video
          </a>
          <a className="feeling_activity" href="#">
            <LocalActivityIcon /> Feeling/Activity
          </a>
        </div>
        <hr />
      </div>

      {Posts.map((item) => (
        <CenterPanel_Card
          key={item.id}
          date={item.date}
          text={item.text}
          user_image={item.user_image}
          user_name={item.user_name}
          post_image={item.post_image}
        />
      ))}
    </div>
  );
};
export default CenterPanel;
