import React from "react";

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

const SecondHalfResult = () => {
  const { betData } = useSelector((state) => state.betModal);
  const [postSecondHalfResult, { error, isLoading, data, isSuccess }] =
    useCreatePredictMutation();

  const [hostTeamResult, setHostTeamResult] = useState(0);
  const [guestTeamResult, setGuestTeamResult] = useState(0);
  const [coinCount, setCoinCount] = useState(1);
  const [oddsTeamSelcte, setOddsTeamSelcte] = useState(0);
  const [pointsToWin, setPointsToWin] = useState(0);
  const [coinsToWin, setCoinsToWin] = useState(0);

  const guestOdd = betData.guestOdd;
  const hostOdd = betData.hostOdd;

  const getSecondHalfResult = (hostRes, guestRes, oddSelcte) => {
    setHostTeamResult(parseInt(hostRes));
    setGuestTeamResult(parseInt(guestRes));
    setOddsTeamSelcte(oddSelcte);
  };

  const getCoinsValue = (value) => {
    setCoinCount(value);
  };

  useEffect(() => {
    setPointsToWin(
      calcCoinsPointFirst(
        hostOdd,
        guestOdd,
        oddsTeamSelcte,
        coinCount,
        predictionLevels.secondHalf
      ).pointsToWin
    );

    setCoinsToWin(
      calcCoinsPointFirst(
        hostOdd,
        guestOdd,
        oddsTeamSelcte,
        coinCount,
        predictionLevels.secondHalf
      ).coinsToWin
    );
  }, [
    hostTeamResult,
    guestTeamResult,
    coinCount,
    oddsTeamSelcte,
    hostOdd,
    guestOdd,
  ]);

  function handleSecondHalfResult() {
    if (!isNaN(hostTeamResult) && !isNaN(guestTeamResult)) {
      postSecondHalfResult({
        type: "EXACT_MATCH_SECOND_HALF",
        guestTeamResult,
        hostTeamResult,
        coins: coinCount,
        pointsToWin,
        coinsToWin,
        pointsToLose: 0,
      });
    } else {
      alert("Please select a second half result");
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
  }, [handleSecondHalfResult]);
  return (
    <>
      <div className="bet-types-row tabs-content-area">
        <div className="tabs-contents">
          <div className={`tab-content tab2 active`}>
            <div className="bet-result-box">
              <p className="result-title">نتيجة الشوط الثاني</p>

              <BetMatchResult
                getMatchResult={getSecondHalfResult}
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
        <BetBtnsActions handleClick={handleSecondHalfResult} />
      </div>
    </>
  );
};

export default SecondHalfResult;
