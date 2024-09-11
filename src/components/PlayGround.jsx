import React, { memo } from "react";
import grass from "../assets/grass.png";
import "../App.css";

const GRID_SIZE = 10;

const PlayGround = () => {
  return (
    <div
      style={{
        position: "relative",
        width: `${GRID_SIZE * 50}px`,
        height: `${GRID_SIZE * 50}px`,
      }}
    >
      {Array.from({ length: GRID_SIZE }).map((_, row) => (
        <div className="row" key={row}>
          {Array.from({ length: GRID_SIZE }).map((_, col) => (
            <div className="cell" key={col}>
              <img src={grass} alt="Grass" className="grass" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default memo(PlayGround);
