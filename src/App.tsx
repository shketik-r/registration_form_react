import React from "react";
import { Route, Routes } from "react-router-dom";


import WrapperForm from "./components/WrapperForm/WrapperForm";



function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<WrapperForm/>} />      
      </Routes>
     
    </div>
  );
}

export default App;
