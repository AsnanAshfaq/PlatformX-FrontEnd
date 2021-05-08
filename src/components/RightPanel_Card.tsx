import React, {FunctionComponent} from 'react';

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

type prop = {
  article_image: string;
  article_title: string;
  article_desc: string;
  date: Date;
};

const ArticlesPanel: FunctionComponent<prop> = ({
  article_image,
  article_title,
  article_desc,
  date,
}) => {
  return (
    <div>
      <img className="article_image" src={article_image} alt="article_image" />
      <p className="article_title">{article_title}</p>
      <a href="#" className="article_description">{article_desc}</a>
      <p className="article_date">{date.toString()}</p>
    </div>
  );
};
export default ChatPanel;
export {ArticlesPanel};
