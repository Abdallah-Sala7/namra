import React, { useEffect, useState } from "react";
import WinningTeamCards from "../WinningTeamCards";
import BetCurrency from "../BetCurrency";
import BetInfo from "../BetInfo";
import BetBtnsActions from "../BetBtnsActions";
import { useSelector } from "react-redux";
import { useCreatePredictMutation } from "../../app/server/predictsApi";
import { calcCoinsPointFirst } from "../../data/calcFunctions";

const FirstScorer = () => {
  const { betData } = useSelector((state) => state.betModal);

  const [postFirstScorerTeam, { error, isLoading, data, isSuccess }] =
    useCreatePredictMutation();

  const [coinCount, setCoinCount] = useState(1);
  const [firstScorerTeamValue, setFirstScorerTeamValue] = useState("");
  const [oddsTeamSelcte, setOddsTeamSelcte] = useState(0);

  const guestOdd = betData.guestOdd;
  const hostOdd = betData.hostOdd;
  const predictionLevel = 2.6;

  const getCoinsValue = (value) => {
    setCoinCount(value);
  };

  const getFirstScorerTeamValue = (value, oddSelcte) => {
    setFirstScorerTeamValue(value);
    setOddsTeamSelcte(oddSelcte);
  };

  const pointsToWin = calcCoinsPointFirst(
    hostOdd,
    guestOdd,
    oddsTeamSelcte,
    coinCount,
    predictionLevel
  ).pointsToWin;

  const coinsToWin = calcCoinsPointFirst(
    hostOdd,
    guestOdd,
    oddsTeamSelcte,
    coinCount,
    predictionLevel
  ).coinsToWin;

  function handleFirstScorer() {
    if (!firstScorerTeamValue.length < 1) {
      postFirstScorerTeam({
        type: "FIRST_TO_SCORE",
        raceToScore: firstScorerTeamValue,
        coins: coinCount,
        pointsToWin,
        coinsToWin,
        pointsToLose: 0,
      });
    } else {
      alert("Please select first scorer team");
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
  }, [handleFirstScorer]);
  return (
    <>
      <div className="bet-types-row tabs-content-area">
        <div className="tabs-contents">
          <div className={`tab-content tab5 active`}>
            <div className="bet-result-box">
              <p className="result-title">السباق للتهديف</p>
              <div className="result-items active_toggle_items only_active_item">
                <WinningTeamCards
                  betData={betData}
                  getWiningTeamValue={getFirstScorerTeamValue}
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
        <BetBtnsActions handleClick={handleFirstScorer} />
      </div>
    </>
  );
};

export default FirstScorer;
