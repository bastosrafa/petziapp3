import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Training from "./pages/Content/Training/index";
import BehaviorModule from "./pages/Content/Training/Behavior/index";
import StartHereModule from "./pages/Content/Training/StartHere/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/content/training" element={<Training />} />
        <Route path="/content/training/starthere" element={<StartHereModule />} />
        <Route path="/content/training/behavior" element={<BehaviorModule />} />
        <Route path="/content/training/socialization" element={<div>Socialização e Controle (Em breve)</div>} />
        <Route path="/content/training/hygiene" element={<div>Higiene e Rotina (Em breve)</div>} />
        <Route path="/content/training/badhabits" element={<div>Evitando Maus Hábitos (Em breve)</div>} />
        <Route path="/content/training/mental" element={<div>Exercícios Mentais (Em breve)</div>} />
      </Routes>
    </Router>
  );
}

export default App; 