import { useState } from "react";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import laLeag from "../assets/img/LaLiga.svg";

const MatchesLeague = () => {
  const [favLeagues, setFavLeagues] = useState([]);

  const handleFavLeag = (leag) => {
    if (!favLeagues.includes(leag)) {
      setFavLeagues([...favLeagues, leag]);
    } else {
      setFavLeagues(favLeagues.filter((l) => l !== leag));
    }
  };
  return (
    <div className="matches-league">
      <button
        className={`star-icon active_toggle_item ${
          favLeagues.includes("LaLiga") && "active"
        }`}
        type="button"
        onClick={() => handleFavLeag("LaLiga")}
      >
        <FontAwesomeIcon icon={faStar} />
      </button>
      <div className="d-flex flex-img">
        <span>LaLiga</span>
        <img className="img-fluid" src={laLeag} />
      </div>
    </div>
  );
};

export default MatchesLeague;
