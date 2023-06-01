import React, { useEffect, useState } from "react";
import DefaultImg from "../DefaultImg";

const SingleBetResult = ({ data, handleChange }) => {
  const [hostResult, setHostResult] = useState(0);
  const [guestResult, setGuestResult] = useState(0);

  useEffect(() => {
    if (hostResult === "" || guestResult === "") {
      handleChange(data?.drawOdd);
    } else {
      if (hostResult > guestResult) {
        handleChange(data?.hostOdd);
      } else if (hostResult < guestResult) {
        handleChange(data?.guestOdd);
      } else {
        handleChange(data?.drawOdd);
      }
    }
  }, [hostResult, guestResult]);

  return (
    <div className="bet-result">
      <div className="team-item">
        <DefaultImg
          imgclassName={"img-fluid"}
          src={data?.hostTeam.logo}
          alt={data?.hostTeam.name}
        />
        <span className="team-name">{data?.hostTeam.name}</span>
      </div>

      <div className="result-wrap">
        <div className="result-inputs">
          <input
            type="tel"
            placeholder="-"
            maxLength="2"
            name="host"
            value={hostResult}
            onChange={(e) => setHostResult(e.target.value)}
          />
          <span>-</span>
          <input
            type="tel"
            placeholder="-"
            maxLength="2"
            name="guest"
            value={guestResult}
            onChange={(e) => setGuestResult(e.target.value)}
          />
        </div>
      </div>

      <div className="team-item">
        <DefaultImg
          imgclassName={"img-fluid"}
          src={data?.hostTeam.logo}
          alt={data?.hostTeam.name}
        />
        <span className="team-name">{data?.guestTeam.name}</span>
      </div>
    </div>
  );
};

export default SingleBetResult;
