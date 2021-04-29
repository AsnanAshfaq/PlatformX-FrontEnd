import React, {FC} from 'react';
import {Posts} from '../assets/Constant/sample.js';
import CenterPanel_Card  from './CenterPanel_Card';
import '../style/CenterPanel.css';

const CenterPanel: FC = () => {
  return (
    <div className="center_panel">
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