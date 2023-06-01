import React, { useState } from "react";
import SingleBetTabBox from "./SingleBetTabBox";
import ChoseTeamCards from "./ChoseTeamCards";
import { predictionLevels } from "../../data/calcFunctions";
import SingleBetResult from "./SingleBetResult";
import ChooseScorers from "../ChooseScorers";
import DefaultImg from "../DefaultImg";
import SingleScorrers from "./SingleScorrers";

const SingleBetTab = ({ data }) => {
  const [winnerSelectOdd, setWinnerSelectOdd] = useState(0);
  const [firstScoreOdd, setFirstScoreOdd] = useState(0);
  const [resultSelectOdd, setResultSelectOdd] = useState(0);
  const [firstHalfOdd, setFirstHalfOdd] = useState(0);
  const [secondHalfOdd, setSecondHalfOdd] = useState(0);


  const winnerSelect = (odd) => {
    setWinnerSelectOdd(odd);
  };

  const firstScoreSelect = (odd) => {
    setFirstScoreOdd(odd);
  };

  const resultSelect = (odd) => {
    setResultSelectOdd(odd);
  };

  const firstHalfSelect = (odd) => {
    setFirstHalfOdd(odd);
  };

  const secondHalfSelect = (odd) => {
    setSecondHalfOdd(odd);
  };

  return (
    <div className="tab-content bet-tab active">
      <div className="flex-head">
        <div className="main-title">
          <h1 className="title-text">راهن على المباراة</h1>
        </div>
        <a
          className="action-btn single-match-btn disable"
          href="bet-current.html"
        >
          تأكيد المراهنة
        </a>
      </div>

      <div className="bet-types-boxes">
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 gx-lg-4 gx-3">
          <SingleBetTabBox
            title={"الفريق الفائز"}
            hostOdd={data?.hostOdd}
            guestOdd={data?.guestOdd}
            oddSelect={winnerSelectOdd}
            oddDraw={data?.drawOdd}
            predictionLevel={predictionLevels.winner}
          >
            <ChoseTeamCards matchData={data} handleClick={winnerSelect} />
          </SingleBetTabBox>

          <SingleBetTabBox
            title={" نتيجة المبارات"}
            hostOdd={data?.hostOdd}
            guestOdd={data?.guestOdd}
            oddSelect={resultSelectOdd}
            oddDraw={data?.drawOdd}
            predictionLevel={predictionLevels.matchResult}
          >
            <SingleBetResult data={data} handleChange={resultSelect} />
          </SingleBetTabBox>

          <SingleBetTabBox
            title={"فارق الأهداف"}
            hostOdd={data?.hostOdd}
            guestOdd={data?.guestOdd}
            oddDraw={data?.drawOdd}
            predictionLevel={predictionLevels.goalDiff}
          >
            <div className="bet-difference">
              <input type="tel" placeholder="-" maxLength="2" />
            </div>
          </SingleBetTabBox>

          <SingleBetTabBox
            title={"الهدافين"}
            hostOdd={data?.hostOdd}
            guestOdd={data?.guestOdd}
            oddDraw={data?.drawOdd}
            predictionLevel={predictionLevels.playerToScore}
          >
            <SingleScorrers data={data} />
          </SingleBetTabBox>

          <SingleBetTabBox
            title={"السباق للتهديف"}
            hostOdd={data?.hostOdd}
            guestOdd={data?.guestOdd}
            oddSelect={firstScoreOdd}
            oddDraw={data?.drawOdd}
            predictionLevel={predictionLevels.firstScorer}
          >
            <ChoseTeamCards matchData={data} handleClick={firstScoreSelect} />
          </SingleBetTabBox>

          <SingleBetTabBox
            title={"الشوط الأول"}
            hostOdd={data?.hostOdd}
            guestOdd={data?.guestOdd}
            oddSelect={firstHalfOdd}
            oddDraw={data?.drawOdd}
            predictionLevel={predictionLevels.firstHalf}
          >
            <SingleBetResult data={data} handleChange={firstHalfSelect} />
          </SingleBetTabBox>

          <SingleBetTabBox
            title={"الشوط الثاني"}
            hostOdd={data?.hostOdd}
            guestOdd={data?.guestOdd}
            oddSelect={secondHalfOdd}
            oddDraw={data?.drawOdd}
            predictionLevel={predictionLevels.secondHalf}
          >
            <SingleBetResult data={data} handleChange={secondHalfSelect} />
          </SingleBetTabBox>
        </div>
      </div>
    </div>
  );
};

export default SingleBetTab;
