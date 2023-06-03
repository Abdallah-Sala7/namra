import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const SingleMatchSummary = ({ data }) => {
  const [hostSummary, setHostSummary] = useState([]);
  const [guestSummary, setGuestSummary] = useState([]);

  useEffect(() => {
    const hostTeamId = data.hostTeam.id;

    data.gameSubstitutes.forEach((element) => {
      if (element.team.split("/")[3] === hostTeamId) {
        setHostSummary((prev) => [...prev, element]);
      } else {
        setGuestSummary((prev) => [...prev, element]);
      }
    });

    data.gameGoals.forEach((element) => {
      if (element.team.split("/")[3] === hostTeamId) {
        setHostSummary((prev) => [...prev, element]);
      } else {
        setGuestSummary((prev) => [...prev, element]);
      }
    });

    data.gameCards.forEach((element) => {
      if (element.team.split("/")[3] === hostTeamId) {
        setHostSummary((prev) => [...prev, element]);
      } else {
        setGuestSummary((prev) => [...prev, element]);
      }
    });
    
  }, [data]);

  return (
    <section className="tab-content summary-tab active">
      <div className="summary-box">
        <h3 className="box-title">
          ملخص المباراة
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            version="1.1"
          >
            <title>ic_fluent_live_24_regular</title>
            <desc>Created with Sketch.</desc>
            <g
              id="🔍-Product-Icons"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="ic_fluent_live_24_regular"
                fill="#e1233d"
                fillRule="nonzero"
              >
                <path
                  d="M5.98959236,4.92893219 C6.28248558,5.22182541 6.28248558,5.69669914 5.98959236,5.98959236 C2.67013588,9.30904884 2.67013588,14.6909512 5.98959236,18.0104076 C6.28248558,18.3033009 6.28248558,18.7781746 5.98959236,19.0710678 C5.69669914,19.363961 5.22182541,19.363961 4.92893219,19.0710678 C1.02368927,15.1658249 1.02368927,8.83417511 4.92893219,4.92893219 C5.22182541,4.63603897 5.69669914,4.63603897 5.98959236,4.92893219 Z M19.0710678,4.92893219 C22.9763107,8.83417511 22.9763107,15.1658249 19.0710678,19.0710678 C18.7781746,19.363961 18.3033009,19.363961 18.0104076,19.0710678 C17.7175144,18.7781746 17.7175144,18.3033009 18.0104076,18.0104076 C21.3298641,14.6909512 21.3298641,9.30904884 18.0104076,5.98959236 C17.7175144,5.69669914 17.7175144,5.22182541 18.0104076,4.92893219 C18.3033009,4.63603897 18.7781746,4.63603897 19.0710678,4.92893219 Z M8.81801948,7.75735931 C9.1109127,8.05025253 9.1109127,8.52512627 8.81801948,8.81801948 C7.06066017,10.5753788 7.06066017,13.4246212 8.81801948,15.1819805 C9.1109127,15.4748737 9.1109127,15.9497475 8.81801948,16.2426407 C8.52512627,16.5355339 8.05025253,16.5355339 7.75735931,16.2426407 C5.41421356,13.8994949 5.41421356,10.1005051 7.75735931,7.75735931 C8.05025253,7.46446609 8.52512627,7.46446609 8.81801948,7.75735931 Z M16.2426407,7.75735931 C18.5857864,10.1005051 18.5857864,13.8994949 16.2426407,16.2426407 C15.9497475,16.5355339 15.4748737,16.5355339 15.1819805,16.2426407 C14.8890873,15.9497475 14.8890873,15.4748737 15.1819805,15.1819805 C16.9393398,13.4246212 16.9393398,10.5753788 15.1819805,8.81801948 C14.8890873,8.52512627 14.8890873,8.05025253 15.1819805,7.75735931 C15.4748737,7.46446609 15.9497475,7.46446609 16.2426407,7.75735931 Z M12,10.5 C12.8284271,10.5 13.5,11.1715729 13.5,12 C13.5,12.8284271 12.8284271,13.5 12,13.5 C11.1715729,13.5 10.5,12.8284271 10.5,12 C10.5,11.1715729 11.1715729,10.5 12,10.5 Z"
                  id="🎨-Color"
                ></path>
              </g>
            </g>
          </svg>
        </h3>

        <div className="match_feed row m-0">
          <ul className="teamfeed hometeam col-6">
            {[...hostSummary].sort((a, b) => a.minute - b.minute).map((item, idx) =>
              item["@type"] === "GameCards" ? (
                <li className="item item_card" key={idx}>
                  <span className="minute floater">{item.minute}</span>
                  {item.type === "Yellow Card" ? (
                    <span className="icon floater yellowcard"></span>
                  ) : (
                    <span className="icon floater redcard"></span>
                  )}

                  <span className="details">{item.name}</span>
                </li>
              ) : item["@type"] === "GameSubstitutes" ? (
                <li className="item substitution" key={idx}>
                  <span className="minute floater">{item.minute}'</span>
                  <span className="details player_in right">↑ {item.name}</span>
                  <br />
                  <span className="details player_out">
                    ↓ {item.secondName}
                  </span>
                </li>
              ) : item["@type"] === "GameGoals" ? (
                <li className="item goals" key={idx}>
                  <span className="minute floater">{item.minute}'</span>
                  <span className="icon floater goal">
                    <FontAwesomeIcon icon={faFutbol} />
                  </span>
                  <span className="details">{item.name}</span>
                  {item.status !== "Normal Goal" && (
                    <span className="extra">ضربة جزاء</span>
                  )}
                </li>
              ) : null
            )}
          </ul>
          <ul className="teamfeed awayteam col-6 ml-auto">
            {[...guestSummary].sort((a, b) => a.minute - b.minute).map((item, idx) =>
              item["@type"] === "GameCards" ? (
                <li className="item item_card" key={idx}>
                  <span className="minute floater">{item.minute}</span>
                  {item.type === "Yellow Card" ? (
                    <span className="icon floater yellowcard"></span>
                  ) : (
                    <span className="icon floater redcard"></span>
                  )}

                  <span className="details">{item.name}</span>
                </li>
              ) : item["@type"] === "GameSubstitutes" ? (
                <li className="item substitution" key={idx}>
                  <span className="minute floater">{item.minute}'</span>
                  <span className="details player_in right">↑ {item.name}</span>
                  <br />
                  <span className="details player_out">
                    ↓ {item.secondName}
                  </span>
                </li>
              ) : item["@type"] === "GameGoals" ? (
                <li className="item goals" key={idx}>
                  <span className="minute floater">{item.minute}'</span>
                  <span className="icon floater goal">
                    <FontAwesomeIcon icon={faFutbol} />
                  </span>
                  <span className="details">{item.name}</span>
                  {item.status !== "Normal Goal" && (
                    <span className="extra">ضربة جزاء</span>
                  )}
                </li>
              ) : null
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SingleMatchSummary;
