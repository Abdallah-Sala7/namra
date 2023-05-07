import React from "react";
import WinningTeamCards from "../WinningTeamCards";
import BetCurrency from "../BetCurrency";
import BetInfo from "../BetInfo";
import BetBtnsActions from "../BetBtnsActions";
import { useSelector } from "react-redux";

const FirstScorer = () => {
  const { betData } = useSelector((state) => state.betModal);

  return (
    <>
      <div className="bet-types-row tabs-content-area">
        <div className="tabs-contents">
          <div className={`tab-content tab5 active`}>
            <div className="bet-result-box">
              <p className="result-title">السباق للتهديف</p>
              <div className="result-items active_toggle_items only_active_item">
                <WinningTeamCards betData={betData} />
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

export default FirstScorer;
