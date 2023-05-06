import React, { useState } from "react";
import barca from "../assets/img/Barcelona.svg";

const WinningTeam = () => {
  const [active, setActive] = useState("");
  return (
    <>
      <div
        className={`team-item active_toggle_item ${
          active === "host" && "active"
        }`}
        onClick={() => {
          setActive("host");
        }}
      >
        <img className="img-fluid" src={barca} alt="teamName" />
        <span className="team-name">برشلونة</span>
      </div>

      <div
        className={`team-item active_toggle_item ${
          active === "gest" && "active"
        }`}
        onClick={() => {
          setActive("gest");
        }}
      >
        <img className="img-fluid" src={barca} alt="teamName" />
        <span className="team-name">برشلونة</span>
      </div>
    </>
  );
};

export default WinningTeam;
