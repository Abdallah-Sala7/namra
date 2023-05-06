import React from "react";
import coins from "../assets/img/Coin.svg";

const BetCurrency = () => {
  return (
    <>
      <div className="points-title">
        <div className="ball-icon">
          <img className="img-fluid" src={coins} alt="coinsIMG" />
        </div>
        العملة المراهنة
      </div>
      
      <div className="points-counter">
        <button type="button" className="count-btn add-btn">
          +
        </button>

        <div className="counter-input-wrap">
          <input
            className="counter-input"
            type="tel"
            readOnly=""
            min="1"
            defaultValue="888"
          />
          <span className="hint">الحد الأدنى</span>
        </div>

        <button type="button" className="count-btn sub-btn">
          -
        </button>
      </div>
    </>
  );
};

export default BetCurrency;
