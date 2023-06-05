import React, { useState } from "react";
import SingleMatchHead from "../components/SingleMatchHead";
import SingleMatchTap from "../components/SingleMatchTap";
import SingleBetTab from "../components/single_match_tabs_contint/SingleBetTab";
import { useGetGameByIdQuery } from "../app/server/gameApi";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import SingleMatchSummary from "../components/SingleMatchSummary";
import CurruntBets from "../components/CurruntBets";
import SingleMatchLoading from "../components/loading/SingleMatchLoading";
import SingleMatchStatistics from "../components/SingleMatchStatistics";

const SingleMatch = () => {
  const param = useParams().id;
  const { data, isLoading } = useGetGameByIdQuery(param);
  const [isPredicted, setIsPredicted] = useState(false);

  const { singleMatchTab } = useSelector((state) => state.app);

  const handlePredicted = () => {
    setIsPredicted(true);
  };

  if (isLoading) return <SingleMatchLoading />;
  return (
    <div>
      <SingleMatchHead data={data} />

      {isPredicted ? (
        <CurruntBets />
      ) : (
        <section className="section-style single-match-bets-section end-items">
          <div className="container">
            <div className="single-match-area matches-area tabs-content-area">
              <SingleMatchTap />

              {singleMatchTab === "bet-tab" ? (
                <SingleBetTab matchData={data} handleClick={handlePredicted} />
              ) : singleMatchTab === "summary-tab" ? (
                <SingleMatchSummary data={data} />
              ) : singleMatchTab === "statistics-tab" ? (
                <SingleMatchStatistics matchData={data} />
              ) : (
                <SingleBetTab data={data} />
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default SingleMatch;
