import React, { useState } from "react";
import DefaultImg from "../DefaultImg";

const ChoseTeamCards = ({ matchData, handleClick }) => {
  const [activeTeam, setActiveTeam] = useState("");

  return (
    <div className="bet-teams active_toggle_items">
      <div
        className={`team-item active_toggle_item ${
          activeTeam === matchData?.hostTeam.name ? "active" : ""
        }`}
        onClick={() => {
          handleClick(matchData?.hostOdd);
          setActiveTeam(matchData?.hostTeam.name);
        }}
      >
        <DefaultImg
          imgClass={"img-fluid"}
          src={matchData?.hostTeam.logo}
          alt={matchData?.hostTeam.name}
        />
        <span className="team-name">{matchData?.hostTeam.name}</span>
      </div>

      <div
        className={`team-item active_toggle_item ${
          activeTeam === matchData?.guestTeam.name ? "active" : ""
        }`}
        onClick={() => {
          handleClick(matchData?.guestOdd);
          setActiveTeam(matchData?.guestTeam.name);
        }}
      >
        <DefaultImg
          imgClass={"img-fluid"}
          src={matchData?.guestTeam.logo}
          alt={matchData?.guestTeam.name}
        />
        <span className="team-name">{matchData?.guestTeam.name}</span>
      </div>
    </div>
  );
};

export default ChoseTeamCards;
