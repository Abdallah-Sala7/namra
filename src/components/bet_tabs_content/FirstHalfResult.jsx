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

const FirstHalfResult = () => {
  const { betData } = useSelector((state) => state.betModal);
  const [postFirstHalfResult, { error, isLoading, data, isSuccess }] =
    useCreatePredictMutation();

  const [hostTeamResult, setHostTeamResult] = useState("");
  const [guestTeamResult, setGuestTeamResult] = useState("");
  const [coinCount, setCoinCount] = useState(1);
  const [oddsTeamSelcte, setOddsTeamSelcte] = useState(0);

  const guestOdd = betData.guestOdd;
  const hostOdd = betData.hostOdd;

  const getFirstHalfResult = (hostRes, guestRes, oddSelcte) => {
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
    predictionLevels.firstHalf
  ).pointsToWin;

  const coinsToWin = calcCoinsPointFirst(
    hostOdd,
    guestOdd,
    oddsTeamSelcte,
    coinCount,
    predictionLevels.firstHalf
  ).coinsToWin;

  function handleFirstHalfResult() {
    if (!isNaN(hostTeamResult) && !isNaN(guestTeamResult)) {
      postFirstHalfResult({
        type: "EXACT_MATCH_FIRST_HALF",
        guestTeamResult,
        hostTeamResult,
        coins: coinCount,
        pointsToWin,
        coinsToWin,
        pointsToLose: 0,
      });
    } else {
      alert("Please select a first half result");
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
  }, [handleFirstHalfResult]);
  return (
    <>
      <div className="bet-types-row tabs-content-area">
        <div className="tabs-contents">
          <div className={`tab-content tab2 active`}>
            <div className="bet-result-box">
              <p className="result-title">نتيجة الشوط الأول</p>

              <BetMatchResult
                getMatchResult={getFirstHalfResult}
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
        <BetBtnsActions handleClick={handleFirstHalfResult} />
      </div>
    </>
  );
};

export default FirstHalfResult;
