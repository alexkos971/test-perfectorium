import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import './index.scss';

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";


const App = () => {
  const [full, setFull] = useState(true);

  return (
      <div className="app">
      <Redirect to="/deposits"/>
      
        <Sidebar full={full} setFull={setFull}/>

        <Main full={full}/>
      </div>
  );
}

export default App;
