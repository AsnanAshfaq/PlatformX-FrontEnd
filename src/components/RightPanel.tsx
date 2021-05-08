import React, {FunctionComponent} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import '../style/RightPanel.css';
import {Chat, Articles} from '../assets/Constant/sample.js';
import ChatPanel, {ArticlesPanel} from './RightPanel_Card';

const RightPanel: FunctionComponent = () => {
  return (
    <div className="right_panel top-0 end-0">
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
      <div className="articles_panel_header">Articles</div>
      <div className="articles_container">
        {Articles.map((item) => (
          <ArticlesPanel
            key={item.id}
            article_image={item.article_image}
            article_title={item.article_title}
            article_desc={item.article_desc}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
};

export default RightPanel;
