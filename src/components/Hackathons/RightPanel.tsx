import React, {FunctionComponent} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import '../../style/Hackathons/RightPanel.css';
import {Chat} from '../../assets/Constant/sample.js';

type props = {
  user_image: string;
  user_name: string;
};

const ChatPanel: FunctionComponent<props> = ({user_image, user_name}) => {
  return (
    <div>
      <img className="user_image" src={user_image} alt="user_image" />
      <p className="user_name">{user_name}</p>
    </div>
  );
};

const RightPanel: FunctionComponent = () => {
  return (
    <div className="right_panel top-0 end-0 w-25">
      <div className="chat_panel">
        <div className="chat_panel_header">
          Followers
          <SearchIcon className="search_icon" fontSize="default" />
        </div>
        <div className="chat_container">
          {Chat.map((item) => (
            <ChatPanel
              key={item.id}
              user_image={item.user_image}
              user_name={item.user_name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default RightPanel;



