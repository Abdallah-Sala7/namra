import BetCurrency from "../BetCurrency";
import BetInfo from "../BetInfo";
import BetBtnsActions from "../BetBtnsActions";
import BetMatchResult from "../BetMatchResult";

import { useSelector } from "react-redux";
import { useCreatePredictMutation } from "../../app/server/predictsApi";
import { useEffect, useState } from "react";
import {
  calcCoinsPointFirst,
  predictionLevels,
} from "../../data/calcFunctions";

const MatchResult = () => {
  const { betData } = useSelector((state) => state.betModal);
  const [postMatchResult, { error, isLoading, data, isSuccess }] =
    useCreatePredictMutation();

  const [hostTeamResult, setHostTeamResult] = useState("");
  const [guestTeamResult, setGuestTeamResult] = useState("");
  const [coinCount, setCoinCount] = useState(1);
  const [oddsTeamSelcte, setOddsTeamSelcte] = useState(0);

  const guestOdd = betData.guestOdd;
  const hostOdd = betData.hostOdd;

  const getMatchResult = (hostRes, guestRes, oddSelcte) => {
    setHostTeamResult(parseInt(hostRes));
    setGuestTeamResult(parseInt(guestRes));
    setOddsTeamSelcte(oddSelcte);
  };

  const getCoinsValue = (value) => {
    setCoinCount(value);
  };

  const pointsToWin = calcCoinsPointFirst(
    hostOdd,
    guestOdd,
    oddsTeamSelcte,
    coinCount,
    predictionLevels.matchResult
  ).pointsToWin;

  const coinsToWin = calcCoinsPointFirst(
    hostOdd,
    guestOdd,
    oddsTeamSelcte,
    coinCount,
    predictionLevels.matchResult
  ).coinsToWin;

  function handleMatchResult() {
    if (!isNaN(hostTeamResult) && !isNaN(guestTeamResult)) {
      postMatchResult({
        type: "EXACT_RESULT",
        guestTeamResult,
        hostTeamResult,
        coins: coinCount,
        pointsToWin,
        coinsToWin,
        pointsToLose: 0,
      });
    } else {
      alert("Please select a match result");
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
  }, [handleMatchResult]);
  return (
    <>
      <div className="bet-types-row tabs-content-area">
        <div className="tabs-contents">
          <div className={`tab-content tab2 active`}>
            <div className="bet-result-box">
              <p className="result-title">نتيجة المبارات</p>
              <BetMatchResult
                getMatchResult={getMatchResult}
                betData={betData}
              />
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
        <BetBtnsActions handleClick={handleMatchResult} />
      </div>
    </>
  );
};

export default MatchResult;
