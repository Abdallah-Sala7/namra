import React, { useEffect, useState } from "react";
import coins from "../assets/img/Coin.svg";

const BetCurrency = ({ getCoinsValue }) => {
  const [currencyValue, setCurrencyValue] = useState(1);

  const increaseCurrencyValue = () => {
    setCurrencyValue(currencyValue + 1);
  };

  const decreaseCurrencyValue = () => {
    if (currencyValue > 1) {
      setCurrencyValue(currencyValue - 1);
    }
  };

  useEffect(() => {
    getCoinsValue(currencyValue);
  }, [currencyValue]);

  return (
    <>
      <div className="points-title">
        <div className="ball-icon">
          <img className="img-fluid" src={coins} alt="coinsIMG" />
        </div>
        العملة المراهنة
      </div>

      <div className="points-counter">
        <button
          type="button"
          className="count-btn add-btn"
          onClick={increaseCurrencyValue}
        >
          +
        </button>

        <div className="counter-input-wrap">
          <input
            type="number"
            value={currencyValue}
            onChange={(e) => setCurrencyValue(e.target.value)}
            className="counter-input"
          />
          <span className="hint">الحد الأدنى</span>
        </div>

        <button
          type="button"
          className="count-btn sub-btn"
          onClick={decreaseCurrencyValue}
        >
          -
        </button>
      </div>
    </>
  );
};

export default BetCurrency;
