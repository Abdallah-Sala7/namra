import React, { useState } from "react";
import DefaultImg from "./DefaultImg";

const WinningTeamCards = ({ betData, getWiningTeamValue }) => {
  const [active, setActive] = useState("");

  const handleSelectTeam = (teamName, odd) => {
    setActive(teamName);
    getWiningTeamValue(teamName, odd);
  };

  return (
    <>
      <div
        className={`team-item active_toggle_item ${
          active === betData.hostTeam.name && "active"
        }`}
        onClick={() => {
          handleSelectTeam(betData.hostTeam.name, betData.hostOdd);
        }}
      >
        <DefaultImg
          src={betData.hostTeam.logo}
          imgClass={"img-fluid"}
          alt="teamName"
        />
        <span className="team-name">{betData.hostTeam.name}</span>
      </div>

      <div
        className={`team-item active_toggle_item ${
          active === betData.guestTeam.name && "active"
        }`}
        onClick={() => {
          handleSelectTeam(betData.guestTeam.name, betData.guestOdd);
        }}
      >
        <DefaultImg
          src={betData.guestTeam.logo}
          imgClass={"img-fluid"}
          alt="teamName"
        />
        <span className="team-name">{betData.guestTeam.name}</span>
      </div>
    </>
  );
};

export default WinningTeamCards;
