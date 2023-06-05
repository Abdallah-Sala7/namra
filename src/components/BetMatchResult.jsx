import { useEffect, useState } from "react";
import DefaultImg from "./DefaultImg";

const BetMatchResult = ({ betData, getMatchResult }) => {
  const [matchRes, setMatchRes] = useState({
    hostRes: 0,
    guestRes: 0,
  });

  const handleChanges = (hostRes, guestRes) => {
    setMatchRes({
      hostRes,
      guestRes,
    });
  };

  useEffect(() => {
    if (matchRes.hostRes > matchRes.guestRes) {
      getMatchResult(matchRes.hostRes, matchRes.guestRes, betData.hostOdd);
    } else if (matchRes.hostRes < matchRes.guestRes) {
      getMatchResult(matchRes.hostRes, matchRes.guestRes, betData.guestOdd);
    } else {
      getMatchResult(matchRes.hostRes, matchRes.guestRes, betData.drawOdd);
    }
  }, [matchRes]);

  return (
    <div className="result-items single-match-area ">
      <div className="bet-types-boxes">
        <div className="bet-box">
          <div className="bet-result">
            <div className="team-item">
              <DefaultImg
                src={betData.hostTeam.logo}
                imgClass={"img-fluid"}
                alt={betData.hostTeam.name}
              />
              <span className="team-name">{betData.hostTeam.name}</span>
            </div>

            <div className="result-wrap">
              <div className="result-inputs">
                <input
                  type="number"
                  placeholder="-"
                  maxLength="2"
                  value={matchRes.hostRes}
                  onChange={(e) =>
                    handleChanges(e.target.value, matchRes.guestRes)
                  }
                />
                <span>-</span>
                <input
                  type="number"
                  placeholder="-"
                  maxLength="2"
                  value={matchRes.guestRes}
                  onChange={(e) =>
                    handleChanges(matchRes.hostRes, e.target.value)
                  }
                />
              </div>
            </div>

            <div className="team-item">
              <DefaultImg
                src={betData.guestTeam.logo}
                imgClass={"img-fluid"}
                alt={betData.guestTeam.name}
              />
              <span className="team-name">{betData.guestTeam.name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetMatchResult;
