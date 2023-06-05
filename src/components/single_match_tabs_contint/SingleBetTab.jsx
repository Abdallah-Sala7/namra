import React, { useEffect, useState } from "react";
import SingleBetTabBox from "./SingleBetTabBox";
import ChoseTeamCards from "./ChoseTeamCards";
import { predictionLevels } from "../../data/calcFunctions";
import SingleBetResult from "./SingleBetResult";
import SingleScorrers from "./SingleScorrers";
import { useCreatePredictMutation } from "../../app/server/predictsApi";

const SingleBetTab = ({ matchData, handleClick }) => {
  const [postPredictions, { error, isLoading, data, isSuccess }] =
    useCreatePredictMutation();

  const [cardsSelectOdd, setCardsSelectOdd] = useState({
    winner: 0,
    firstScore: 0,
    result: 0,
    firstHalf: 0,
    secondHalf: 0,
  });

  const [predictionCalc, setPredictionCalc] = useState({
    winner: {},
    firstScore: {},
    result: {},
    firstHalf: {},
    secondHalf: {},
    goalDiffrence: {},
    scorers: {},
  });

  const winnerSelect = (odd) => {
    setCardsSelectOdd({
      ...cardsSelectOdd,
      winner: odd,
    });
  };

  const firstScoreSelect = (odd) => {
    setCardsSelectOdd({
      ...cardsSelectOdd,
      firstScore: odd,
    });
  };

  const resultSelect = (odd) => {
    setCardsSelectOdd({
      ...cardsSelectOdd,
      result: odd,
    });
  };

  const firstHalfSelect = (odd) => {
    setCardsSelectOdd({
      ...cardsSelectOdd,
      firstHalf: odd,
    });
  };

  const secondHalfSelect = (odd) => {
    setCardsSelectOdd({
      ...cardsSelectOdd,
      secondHalf: odd,
    });
  };

  const winnerCalc = (val) => {
    setPredictionCalc({
      ...predictionCalc,
      winner: val,
    });
  };

  const resultCalc = (val) => {
    setPredictionCalc({
      ...predictionCalc,
      result: val,
    });
  };

  const firstHalfCalc = (val) => {
    setPredictionCalc({
      ...predictionCalc,
      firstHalf: val,
    });
  };

  const secondHalfCalc = (val) => {
    setPredictionCalc({
      ...predictionCalc,
      secondHalf: val,
    });
  };

  const goalDiffrenceCalc = (val) => {
    setPredictionCalc({
      ...predictionCalc,
      goalDiffrence: val,
    });
  };

  const scorersCalc = (val) => {
    setPredictionCalc({
      ...predictionCalc,
      scorers: val,
    });
  };

  const firstScoreCalc = (val) => {
    setPredictionCalc({
      ...predictionCalc,
      firstScore: val,
    });
  };

  const handlePrediction = (e) => {
    postPredictions({
      type: "EXACT_MATCH",
      coins: predictionCalc.result.coinCount,
      pointsToWin: predictionCalc.result.pointsToWin,
      coinsToWin: predictionCalc.result.coinsToWin,
      pointsToLose: 0,
    });

    postPredictions({
      type: "EXACT_MATCH_FIRST_HALF",
      coins: predictionCalc.firstHalf.coinCount,
      pointsToWin: predictionCalc.firstHalf.pointsToWin,
      coinsToWin: predictionCalc.firstHalf.coinsToWin,
      pointsToLose: 0,
    });

    postPredictions({
      type: "WINNER_TEAM",
      coins: predictionCalc.winner.coinCount,
      pointsToWin: predictionCalc.winner.pointsToWin,
      coinsToWin: predictionCalc.winner.coinsToWin,
      pointsToLose: 0,
    });

    postPredictions({
      type: "EXACT_MATCH_SECOND_HALF",
      coins: predictionCalc.secondHalf.coinCount,
      pointsToWin: predictionCalc.secondHalf.pointsToWin,
      coinsToWin: predictionCalc.secondHalf.coinsToWin,
      pointsToLose: 0,
    });

    postPredictions({
      type: "GOAL_DIFFERENCE",
      coins: predictionCalc.goalDiffrence.coinCount,
      pointsToWin: predictionCalc.goalDiffrence.pointsToWin,
      coinsToWin: predictionCalc.goalDiffrence.coinsToWin,
      pointsToLose: 0,
    });

    postPredictions({
      type: "SCORER",
      coins: predictionCalc.scorers.coinCount,
      pointsToWin: predictionCalc.scorers.pointsToWin,
      coinsToWin: predictionCalc.scorers.coinsToWin,
      pointsToLose: 0,
    });

    postPredictions({
      type: "FIRST_TO_SCORE",
      coins: predictionCalc.firstScore.coinCount,
      pointsToWin: predictionCalc.firstScore.pointsToWin,
      coinsToWin: predictionCalc.firstScore.coinsToWin,
      pointsToLose: 0,
    });

    handleClick();
    e.preventDefault();
  };

  useEffect(() => {
    if (isSuccess) {
      console.log(data);
    } else if (error) {
      console.log(error);
    } else if (isLoading) {
      console.log("loading");
    }
  }, [handlePrediction]);

  return (
    <div className="tab-content bet-tab active">
      <div className="flex-head">
        <div className="main-title">
          <h1 className="title-text">راهن على المباراة</h1>
        </div>
        <a
          className="action-btn single-match-btn disable"
          href="#"
          onClick={handlePrediction}
        >
          تأكيد المراهنة
        </a>
      </div>

      <div className="bet-types-boxes">
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 gx-lg-4 gx-3">
          <SingleBetTabBox
            title={"الفريق الفائز"}
            hostOdd={matchData.hostOdd}
            guestOdd={matchData.guestOdd}
            oddSelect={cardsSelectOdd.winner}
            oddDraw={matchData.drawOdd}
            predictionLevel={predictionLevels.winner}
            handleChange={winnerCalc}
          >
            <ChoseTeamCards matchData={matchData} handleClick={winnerSelect} />
          </SingleBetTabBox>

          <SingleBetTabBox
            title={" نتيجة المبارات"}
            hostOdd={matchData.hostOdd}
            guestOdd={matchData.guestOdd}
            oddSelect={cardsSelectOdd.result}
            oddDraw={matchData.drawOdd}
            predictionLevel={predictionLevels.matchResult}
            handleChange={resultCalc}
          >
            <SingleBetResult data={matchData} handleChange={resultSelect} />
          </SingleBetTabBox>

          <SingleBetTabBox
            title={"فارق الأهداف"}
            hostOdd={matchData.hostOdd}
            guestOdd={matchData.guestOdd}
            oddDraw={matchData.drawOdd}
            predictionLevel={predictionLevels.goalDiff}
            handleChange={goalDiffrenceCalc}
          >
            <div className="bet-difference">
              <input type="tel" placeholder="-" maxLength="2" />
            </div>
          </SingleBetTabBox>

          <SingleBetTabBox
            title={"الهدافين"}
            hostOdd={matchData.hostOdd}
            guestOdd={matchData.guestOdd}
            oddDraw={matchData.drawOdd}
            predictionLevel={predictionLevels.playerToScore}
            handleChange={scorersCalc}
          >
            <SingleScorrers data={matchData} />
          </SingleBetTabBox>

          <SingleBetTabBox
            title={"السباق للتهديف"}
            hostOdd={matchData.hostOdd}
            guestOdd={matchData.guestOdd}
            oddSelect={cardsSelectOdd.firstScore}
            oddDraw={matchData.drawOdd}
            predictionLevel={predictionLevels.firstScorer}
            handleChange={firstScoreCalc}
          >
            <ChoseTeamCards
              matchData={matchData}
              handleClick={firstScoreSelect}
            />
          </SingleBetTabBox>

          <SingleBetTabBox
            title={"الشوط الأول"}
            hostOdd={matchData.hostOdd}
            guestOdd={matchData.guestOdd}
            oddSelect={cardsSelectOdd.firstHalf}
            oddDraw={matchData.drawOdd}
            predictionLevel={predictionLevels.firstHalf}
            handleChange={firstHalfCalc}
          >
            <SingleBetResult data={matchData} handleChange={firstHalfSelect} />
          </SingleBetTabBox>

          <SingleBetTabBox
            title={"الشوط الثاني"}
            hostOdd={matchData.hostOdd}
            guestOdd={matchData.guestOdd}
            oddSelect={cardsSelectOdd.secondHalf}
            oddDraw={matchData.drawOdd}
            predictionLevel={predictionLevels.secondHalf}
            handleChange={secondHalfCalc}
          >
            <SingleBetResult data={matchData} handleChange={secondHalfSelect} />
          </SingleBetTabBox>
        </div>
      </div>
    </div>
  );
};

export default SingleBetTab;
