import React from "react";

const MatchCardLoading = () => {
  return (
    <div className="card-loading">
      <div className="card-loading-right">
        <span></span>
        <span></span>
      </div>

      <div className="card-loading-middle">
        <span className="card-loading-team-name"></span>
        <div className="card-loading-team-logo"></div>

        <div className="card-loading-item-result">- : -</div>

        <div className="card-loading-team-logo"></div>
        <span className="card-loading-team-name"></span>
      </div>

      <div className="card-loading-left"></div>
    </div>
  );
};

export default MatchCardLoading;
