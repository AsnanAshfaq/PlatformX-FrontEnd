import React, {FunctionComponent} from 'react';
import {HackathonsCard} from '../../assets/Constant/sample.js';
import '../../style/Hackathons/CenterPanel.css';

type props = {
  hackathon_image: string;
  hackathon_title: string;
  days_left: number;
  prizes: string;
  status: string;
  participants: number;
};
const CenterPanelCard: FunctionComponent<props> = ({
  hackathon_image,
  hackathon_title,
  days_left,
  prizes,
  status,
  participants,
}) => {
  return (
    <div className="card mt-3 bg-dark w-75  mx-auto ">
      <div className="row">
        <img
          className="hackathon_img rounded float-left w-25 mt-2 ml-2"
          src={hackathon_image}
          alt="hackathon_image"
        />
        {hackathon_title}
      </div>
      <p className="prizes  font-weight-bold ">{prizes}</p>
      <p className="status  font-weight-bold ">{status}</p>
      <p className="participants  font-weight-bold">{participants}</p>
      <p className="days_left  font-weight-bold">{days_left}</p>
    </div>
  );
};

const CenterPanelHackathon: FunctionComponent = () => {
  return (
    <div className="card w-50 bg-secondary mx-auto">
      {HackathonsCard.map((item) => (
        <CenterPanelCard
          key={item.id}
          days_left={item.days_left}
          hackathon_title={item.hackathon_title}
          hackathon_image={item.hackathon_image}
          prizes={item.prizes}
          participants={item.participants}
          status={item.status}
        />
      ))}
    </div>
  );
};
export default CenterPanelHackathon;
