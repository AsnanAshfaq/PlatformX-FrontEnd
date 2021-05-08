import React, { FunctionComponent } from "react";
// import Header from '../components/Header';
import LeftPanel from "../components/LeftPanel";
import CenterPanel from "../components/CenterPanel";
// import RightPanel from '../components/RightPanel';
import Filters from "../components/Hackathons/LeftPanel";
import CenterPanelHackathon from "../components/Hackathons/CenterPanel";
import RightPanel from "../components/Hackathons/RightPanel";
import { HackathonFilters } from "../assets/Constant/sample";
import "../style/Hackathons/CenterPanel.css";
const Home: FunctionComponent = () => {
  return (
    <div className="MainClass">
      {/* <Header />
      <LeftPanel />
      <CenterPanel />
      <RightPanel /> */}
      <div className="container-fluid">
        <div className="row">
          <Filters data={HackathonFilters} />
          <div className="column">
            <h2 className="title bg-dark w-50 mx-auto pl-auto pt-4 text-center">
              Join the world's best online and in-person hackathons and win
              several prizes
            </h2>

            <CenterPanelHackathon />
          </div>
        </div>

        <RightPanel />
      </div>
    </div>
  );
};

export default Home;
