import React from "react";
import SingleMatchHead from "../components/SingleMatchHead";
import SingleMatchTap from "../components/SingleMatchTap";
import SingleBetTab from "../components/single_match_tabs_contint/SingleBetTab";

const SingleMatch = () => {
  return (
    <div>
      <SingleMatchHead />

      <section className="section-style single-match-bets-section end-items">
        <div className="container">
          <div className="single-match-area matches-area tabs-content-area">
            <SingleMatchTap />

            <SingleBetTab />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleMatch;
