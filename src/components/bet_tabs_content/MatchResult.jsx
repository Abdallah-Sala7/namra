import BetCurrency from "../BetCurrency";
import BetInfo from "../BetInfo";
import BetBtnsActions from "../BetBtnsActions";
import BetMatchResult from "../BetMatchResult";

import { useSelector } from "react-redux";

const MatchResult = () => {
  const { betData } = useSelector((state) => state.betModal);

  return (
    <>
      <div className="bet-types-row tabs-content-area">
        <div className="tabs-contents">
          <div className={`tab-content tab2 active`}>
            <BetMatchResult betData={betData} />
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

export default MatchResult;
