import WinningTeamCards from "../WinningTeamCards";
import BetCurrency from "../BetCurrency";
import BetInfo from "../BetInfo";
import BetBtnsActions from "../BetBtnsActions";
import { useSelector } from "react-redux";
import { useCreatePredictMutation } from "../../app/server/predictsApi";
import { useEffect, useState } from "react";
import {
  calcCoinsPointFirst,
  predictionLevels,
} from "../../data/calcFunctions";

const WinningTeam = () => {
  const { betData } = useSelector((state) => state.betModal);
  const [postWiningTeam, { error, isLoading, data, isSuccess }] =
    useCreatePredictMutation();

  const [coinCount, setCoinCount] = useState(1);
  const [winingTeamValue, setWiningTeamValue] = useState("");
  const [oddsTeamSelcte, setOddsTeamSelcte] = useState(0);
  const [pointsToWin, setPointsToWin] = useState(0);
  const [coinsToWin, setCoinsToWin] = useState(0);

  const guestOdd = betData.guestOdd;
  const hostOdd = betData.hostOdd;

  const getCoinsValue = (value) => {
    setCoinCount(value);
  };

  const getWiningTeamValue = (value, oddSelcte) => {
    setWiningTeamValue(value);
    setOddsTeamSelcte(oddSelcte);
  };

  function handleWinngTeam() {
    if (!winingTeamValue.length < 1) {
      postWiningTeam({
        type: "WINNER_TEAM",
        winningTeam: winingTeamValue,
        coins: coinCount,
        pointsToWin,
        coinsToWin,
        pointsToLose: 0,
      });
    } else {
      alert("Please select a team");
    }
  }

  useEffect(() => {
    if (isSuccess) {
      console.log(data);
    } else if (error) {
      console.log(error);
    } else if (isLoading) {
      console.log("loading");
    }
  }, [handleWinngTeam]);

  useEffect(() => {
    setPointsToWin(
      calcCoinsPointFirst(
        hostOdd,
        guestOdd,
        oddsTeamSelcte,
        coinCount,
        predictionLevels.winner
      ).pointsToWin
    );

    setCoinsToWin(
      calcCoinsPointFirst(
        hostOdd,
        guestOdd,
        oddsTeamSelcte,
        coinCount,
        predictionLevels.winner
      ).coinsToWin
    );
  }, [coinCount, oddsTeamSelcte, hostOdd, guestOdd, predictionLevels.winner]);

  return (
    <>
      <div className="bet-types-row tabs-content-area">
        <div className="tabs-contents">
          <div className={`tab-content tab1 active`}>
            <div className="bet-result-box">
              <p className="result-title">الفريق الفائز</p>
              <div className="result-items active_toggle_items only_active_item">
                <WinningTeamCards
                  betData={betData}
                  getWiningTeamValue={getWiningTeamValue}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bet-currency">
        <BetCurrency
          getCoinsValue={(value) => {
            getCoinsValue(value);
          }}
        />
      </div>

      <div className="bet-info-row ">
        <BetInfo pointsToWin={pointsToWin} coinsToWin={coinsToWin} />
      </div>

      <div className="footer-btns">
        <BetBtnsActions handleClick={handleWinngTeam} />
      </div>
    </>
  );
};

export default WinningTeam;
