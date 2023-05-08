import React from "react";

const BetGoalDifference = ({ getGoalDifferenceValue }) => {
  return (
    <div className="tabs-contents">
      <div className={`tab-content tab3 active`}>
        <div className="bet-result-box">
          <p className="result-title">فارق الأهداف</p>
          <div className="result-items single-match-area ">
            <div className="bet-types-boxes">
              <div className="bet-box">
                <div className="bet-difference">
                  <input
                    type="tel"
                    placeholder="-"
                    maxLength="2"
                    onChange={(e) => getGoalDifferenceValue(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetGoalDifference;
