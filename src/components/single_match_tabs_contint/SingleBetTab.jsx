import React, { useState } from "react";
import SingleBetTabBox from "./SingleBetTabBox";
import { useGetGameByIdQuery } from "../../app/server/gameApi";
import { useParams } from "react-router-dom";
import ChoseTeamCards from "./ChoseTeamCards";
import DefaultImg from "../DefaultImg";
import { calcCoinsPointFirst } from "../../data/calcFunctions";

const SingleBetTab = () => {
  const param = useParams().id;
  const [winnerSelectOdd, setWinnerSelectOdd] = useState(0);
  const [firstScoreOdd, setFirstScoreOdd] = useState(0);

  const { data, isLoading } = useGetGameByIdQuery(param);

  const winnerSelect = (odd) => {
    setWinnerSelectOdd(odd);
  };

  const firstScoreSelect = (odd) => {
    setFirstScoreOdd(odd);
  };

  const winnerPredictionLevel = 3;

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
            predictionLevel={winnerPredictionLevel}
          >
            <ChoseTeamCards matchData={data} handleClick={winnerSelect} />
          </SingleBetTabBox>

          <SingleBetTabBox title={" نتيجة المبارات"}>
            <div className="bet-result">
              <div className="team-item">
                <DefaultImg
                  imgclassName={"img-fluid"}
                  src={data?.hostTeam.logo}
                  alt={data?.hostTeam.name}
                />
                <span className="team-name">{data?.hostTeam.name}</span>
              </div>

              <div className="result-wrap">
                <div className="result-inputs">
                  <input type="tel" placeholder="-" maxLength="2" />
                  <span>-</span>
                  <input type="tel" placeholder="-" maxLength="2" />
                </div>
              </div>

              <div className="team-item">
                <DefaultImg
                  imgclassName={"img-fluid"}
                  src={data?.hostTeam.logo}
                  alt={data?.hostTeam.name}
                />
                <span className="team-name">{data?.guestTeam.name}</span>
              </div>
            </div>
          </SingleBetTabBox>

          <SingleBetTabBox title={"فارق الأهداف"}>
            <div className="bet-difference">
              <input type="tel" placeholder="-" maxLength="2" />
            </div>
          </SingleBetTabBox>

          <SingleBetTabBox title={"الهدافين"}>
            <ChoseTeamCards matchData={data} />
          </SingleBetTabBox>

          <SingleBetTabBox title={"السباق للتهديف"}>
            <ChoseTeamCards matchData={data} handleClick={firstScoreSelect} />
          </SingleBetTabBox>

          <SingleBetTabBox title={"نتيجة الأشواط"}>
            <div className="bet-runs active_toggle_items only_active_item">
              <div
                className="runs-item active_toggle_item"
                data-bs-toggle="modal"
                data-bs-target="#runsScoremodal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="800px"
                  height="800px"
                  viewBox="0 0 100 100"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--gis"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path d="M42 0a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3v5.295C23.364 15.785 6.5 34.209 6.5 56.5C6.5 80.483 26.017 100 50 100s43.5-19.517 43.5-43.5a43.22 43.22 0 0 0-6.72-23.182l4.238-3.431l1.888 2.332a2 2 0 0 0 2.813.297l3.11-2.518a2 2 0 0 0 .294-2.812L89.055 14.75a2 2 0 0 0-2.813-.297l-3.11 2.518a2 2 0 0 0-.294 2.812l1.889 2.332l-4.22 3.414C73.77 18.891 64.883 14.435 55 13.297V8h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H42zm8 20c20.2 0 36.5 16.3 36.5 36.5S70.2 93 50 93S13.5 76.7 13.5 56.5S29.8 20 50 20zm.002 7.443L50 56.5l23.234 17.447a29.056 29.056 0 0 0 2.758-30.433a29.056 29.056 0 0 0-25.99-16.07z" />
                </svg>
                <span className="run-order">الشوط الأول</span>
              </div>
              <div
                className="runs-item active_toggle_item"
                data-bs-toggle="modal"
                data-bs-target="#runsScoremodal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="800px"
                  height="800px"
                  viewBox="0 0 100 100"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--gis"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path d="M42 0a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3v5.295C23.364 15.785 6.5 34.209 6.5 56.5C6.5 80.483 26.017 100 50 100s43.5-19.517 43.5-43.5a43.22 43.22 0 0 0-6.72-23.182l4.238-3.431l1.888 2.332a2 2 0 0 0 2.813.297l3.11-2.518a2 2 0 0 0 .294-2.812L89.055 14.75a2 2 0 0 0-2.813-.297l-3.11 2.518a2 2 0 0 0-.294 2.812l1.889 2.332l-4.22 3.414C73.77 18.891 64.883 14.435 55 13.297V8h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H42zm8 20c20.2 0 36.5 16.3 36.5 36.5S70.2 93 50 93S13.5 76.7 13.5 56.5S29.8 20 50 20zm.002 7.443L50 56.5l23.234 17.447a29.056 29.056 0 0 0 2.758-30.433a29.056 29.056 0 0 0-25.99-16.07z" />
                </svg>
                <span className="run-order">الشوط الثاني</span>
              </div>
            </div>
          </SingleBetTabBox>
        </div>
      </div>
    </div>
  );
};

export default SingleBetTab;
