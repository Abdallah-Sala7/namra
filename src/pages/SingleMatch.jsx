import React from "react";
import SingleMatchHead from "../components/SingleMatchHead";
import SingleMatchTap from "../components/SingleMatchTap";
import SingleBetTab from "../components/single_match_tabs_contint/SingleBetTab";
import { useGetGameByIdQuery } from "../app/server/gameApi";
import { useParams } from "react-router-dom";

const SingleMatch = () => {
  const param = useParams().id;
  const { data, isLoading } = useGetGameByIdQuery(param);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <SingleMatchHead  data={data}/>

      <section className="section-style single-match-bets-section end-items">
        <div className="container">
          <div className="single-match-area matches-area tabs-content-area">
            <SingleMatchTap />

            <SingleBetTab data={data} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleMatch;
