import React, { FunctionComponent } from "react";
import Header from "./components/Header";
import Left from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

const App: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Left />
    </>
  );
};

export default App;
