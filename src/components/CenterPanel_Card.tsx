import React, {FunctionComponent} from 'react';
import '../style/CenterPanel_Card.css';

type props = {
  user_image: string;
  user_name: string;
  date: Date;
  text: string;
  post_image?: string;
};

const CenterPanel_Card: FunctionComponent<props> = ({
  date,
  text,
  user_image,
  user_name,
  post_image,
}) => {
  return (
    <div className="card-container">
      <img
        src={user_image}
        alt="user image"
        className="user_image rounded-circle"
      />
      <p className="user_name">{user_name}</p>
      <p className="date">{date.toString()}</p>
      <p className="text">{text}</p>
      <img src={post_image} alt="post image" className="post_image" />
    </div>
  );
};

export default CenterPanel_Card;
