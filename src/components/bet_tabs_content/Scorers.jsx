import BetCurrency from "../BetCurrency";
import BetInfo from "../BetInfo";
import BetBtnsActions from "../BetBtnsActions";
import ScorersTap from "../ScorersTap";
import { useSelector } from "react-redux";
const Scorers = () => {
  const { betData } = useSelector((state) => state.betModal);
  return (
    <>
      <div className="bet-types-row tabs-content-area">
        <div className="tabs-contents">
          <div className={`tab-content tab4 active`}>
            <ScorersTap betData={betData} />
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

export default Scorers;
