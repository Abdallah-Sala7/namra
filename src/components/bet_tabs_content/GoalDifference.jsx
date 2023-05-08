import React, { useEffect, useState } from "react";
import BetCurrency from "../BetCurrency";
import BetInfo from "../BetInfo";
import BetBtnsActions from "../BetBtnsActions";
import { useCreatePredictMutation } from "../../app/server/predictsApi";
import { useSelector } from "react-redux";
import BetGoalDifference from "../BetGoalDifference";

const GoalDifference = () => {
  const { betData } = useSelector((state) => state.betModal);
  const [postGoalDifference, { error, isLoading, data, isSuccess }] =
    useCreatePredictMutation();

  const [coinCount, setCoinCount] = useState(1);
  const [goalDifferenceValue, setGoalDifferenceValue] = useState(0);

  const guestOdd = betData.guestOdd;
  const hostOdd = betData.hostOdd;
  const oddsDraw = betData.drawOdd;
  const predictionLevel = 2.2;

  const getCoinsValue = (value) => {
    setCoinCount(value);
  };

  const getGoalDifferenceValue = (value) => {
    setGoalDifferenceValue(parseInt(value));
  };

  const pointsToWin = Math.round(
    ((1 / (hostOdd * guestOdd)) * oddsDraw * coinCount) / predictionLevel
  );
  const coinsToWin = Math.round(
    ((1 / (hostOdd * guestOdd)) * oddsDraw) / coinCount + predictionLevel
  );

  function handleGoalDifference() {
    if (!isNaN(goalDifferenceValue)) {
      postGoalDifference({
        type: "GOAL_DIFFERENCE",
        coins: coinCount,
        pointsToWin,
        coinsToWin,
        goalDifference: goalDifferenceValue,
        pointsToLose: 0,
        
      });
    } else {
      alert("Please chose goal difference");
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
  }, [handleGoalDifference]);

  return (
    <>
      <div className="bet-types-row tabs-content-area">
        <BetGoalDifference getGoalDifferenceValue={getGoalDifferenceValue} />
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
        <BetBtnsActions handleClick={handleGoalDifference} />
      </div>
    </>
  );
};

export default GoalDifference;
