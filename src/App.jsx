import React from "react";
import "./App.css";
import PlayGround from "./components/PlayGround";
import Pikachu from "./components/Pikachu";

function App() {
  return (
    <div className="playgroundContainer">
      <h1>Pikachu Playground</h1>
      <div style={{ position: "relative" }}>
        <PlayGround />
        <Pikachu />
      </div>
    </div>
  );
}

export default App;
