import { useSelector } from "react-redux";
import WinningTeam from "./WinningTeam";
import BetMatchResult from "./BetMatchResult";
import ScorersTap from "./ScorersTap";

const BetTabsContent = () => {
  const { activeTap, betData } = useSelector((state) => state.betModal);

  return (
    <div className="tabs-contents">
      <div className={`tab-content tab1 ${activeTap === "tab1" && "active"}`}>
        <div className="bet-result-box">
          <p className="result-title">الفريق الفائز</p>
          <div className="result-items active_toggle_items only_active_item">
            <WinningTeam  betData={betData} />
          </div>
        </div>
      </div>

      <div className={`tab-content tab2 ${activeTap === "tab2" && "active"}`}>
        <BetMatchResult betData={betData} />
      </div>

      <div className={`tab-content tab3 ${activeTap === "tab3" && "active"}`}>
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

      <div className={`tab-content tab4 ${activeTap === "tab4" && "active"}`}>
        <ScorersTap betData={betData} />
      </div>

      <div className={`tab-content tab5 ${activeTap === "tab5" && "active"}`}>
        <div className="bet-result-box">
          <p className="result-title">السباق للتهديف</p>
          <div className="result-items active_toggle_items only_active_item">
            <WinningTeam betData={betData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetTabsContent;
