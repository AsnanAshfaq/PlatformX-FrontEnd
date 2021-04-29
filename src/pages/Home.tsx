import React, {FunctionComponent} from 'react';
import Header from '../components/Header'
import LeftPanel from '../components/LeftPanel';
import CenterPanel from '../components/CenterPanel';
import RightPanel from '../components/RightPanel';

const Home: FunctionComponent = () => {
  return (
    <div className="MainClass">
      <Header />
      <LeftPanel />
      <CenterPanel />
      <RightPanel />
    </div>
  );
};

export default Home;
