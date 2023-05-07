import React from "react";
import BetCurrency from "../BetCurrency";
import BetInfo from "../BetInfo";
import BetBtnsActions from "../BetBtnsActions";

const GoalDifference = () => {
  return (
    <>
      <div className="bet-types-row tabs-content-area">
        <div className="tabs-contents">
          <div className={`tab-content tab3 active`}>
            <div className="bet-result-box">
              <p className="result-title">فارق الأهداف</p>
              <div className="result-items single-match-area ">
                <div className="bet-types-boxes">
                  <div className="bet-box">
                    <div className="bet-difference">
                      <input type="tel" placeholder="-" maxLength="2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bet-currency">
        <BetCurrency />
      </div>

      <div className="bet-info-row ">
        <BetInfo />
      </div>

      <div className="footer-btns">
        <BetBtnsActions />
      </div>
    </>
  );
};

export default GoalDifference;
