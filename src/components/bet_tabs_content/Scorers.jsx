import BetCurrency from "../BetCurrency";
import BetInfo from "../BetInfo";
import BetBtnsActions from "../BetBtnsActions";
import ScorersTap from "../ScorersTap";
import { useSelector } from "react-redux";
import { useCreatePredictMutation } from "../../app/server/predictsApi";
import { useEffect, useState } from "react";
import { calcCoinsPointSecond } from "../../data/calcFunctions";
const Scorers = () => {
  const { betData, chooseScorer } = useSelector((state) => state.betModal);
  const [postScorers, { error, isLoading, data, isSuccess }] =
    useCreatePredictMutation();

  const [coinCount, setCoinCount] = useState(1);

  const guestOdd = betData.guestOdd;
  const hostOdd = betData.hostOdd;
  const oddsDraw = betData.drawOdd;
  const predictionLevel = 2;

  const getCoinsValue = (value) => {
    setCoinCount(value);
  };

  const pointsToWin = calcCoinsPointSecond(
    hostOdd,
    guestOdd,
    oddsDraw,
    coinCount,
    predictionLevel
  ).pointsToWin;

  const coinsToWin = calcCoinsPointSecond(
    hostOdd,
    guestOdd,
    oddsDraw,
    coinCount,
    predictionLevel
  ).coinsToWin;

  function handleScorers() {
    if (chooseScorer.length > 0) {
      postScorers({
        type: "SCORER",
        coins: coinCount,
        pointsToWin,
        coinsToWin,
        firstScorer: chooseScorer,
        pointsToLose: 0,
      });
    } else {
      alert("Please chose player scorer first");
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
  }, [handleScorers]);
  return (
    <>
      <div className="bet-types-row tabs-content-area">
        <div className="tabs-contents">
          <div className={`tab-content tab4 active`}>
            <ScorersTap betData={betData} />
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
        <BetBtnsActions handleClick={handleScorers} />
      </div>
    </>
  );
};

export default Scorers;
