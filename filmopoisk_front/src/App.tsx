import React from "react";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Initial project page</div>} />
    </Routes>
  );
};

export default App;
