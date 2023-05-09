import { useState } from "react";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import laLeag from "../assets/img/LaLiga.svg";

const MatchesLeague = ({leagName = "LaLiga", leagIcon =laLeag }) => {
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
          favLeagues.includes(leagName) && "active"
        }`}
        type="button"
        title="Add to favorite"
        name="fav"
        aria-label="Add to favorite"
        onClick={() => handleFavLeag(leagName)}
      >
        <FontAwesomeIcon icon={faStar} />
      </button>
      <div className="d-flex flex-img">
        <span>{leagName}</span>
        <img className="img-fluid" src={leagIcon} alt={leagName} width={30} height={30} />
      </div>
    </div>
  );
};

export default MatchesLeague;
