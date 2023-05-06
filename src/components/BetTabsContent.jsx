import { useDispatch, useSelector } from "react-redux";
import barca from "../assets/img/Barcelona.svg";
import WinningTeam from "./WinningTeam";
import { setOpenModal } from "../app/reducers/appSlice";

const BetTabsContent = () => {
  const { activeTap } = useSelector((state) => state.betTap);
  const dispatch = useDispatch();

  return (
    <div className="tabs-contents">
      <div className={`tab-content tab1 ${activeTap === "tab1" && "active"}`}>
        <div className="bet-result-box">
          <p className="result-title">الفريق الفائز</p>
          <div className="result-items active_toggle_items only_active_item">
            <WinningTeam />
          </div>
        </div>
      </div>

      <div className={`tab-content tab2 ${activeTap === "tab2" && "active"}`}>
        <div className="bet-result-box">
          <p className="result-title">نتيجة المبارات</p>
          <div className="result-items single-match-area ">
            <div className="bet-types-boxes">
              <div className="bet-box">
                <div className="bet-result">
                  <div className="team-item">
                    <img className="img-fluid" src={barca} alt="teamName" />
                    <span className="team-name">برشلونة</span>
                  </div>
                  <div className="result-wrap">
                    <div className="result-inputs">
                      <input type="tel" placeholder="-" maxLength="2" />
                      <span>-</span>
                      <input type="tel" placeholder="-" maxLength="2" />
                    </div>
                  </div>
                  <div className="team-item">
                    <img className="img-fluid" src={barca} alt="teamName" />
                    <span className="team-name">برشلونة</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        <div className="bet-result-box">
          <p className="result-title">الهدافين</p>
          <div className="result-items active_toggle_items">
            <div
              className="team-item active_toggle_item toggle-modal-btn"
              data-bs-toggle="modal"
              data-bs-target="#ChooseScorersmodal2"
              onClick={() => {
                dispatch(setOpenModal('ChooseScorers'))
              }}
            >
              <img className="img-fluid" src={barca} alt="teamName" />
              <span className="team-name">برشلونة</span>
            </div>
            <div
              className="team-item active_toggle_item toggle-modal-btn"
              data-bs-toggle="modal"
              data-bs-target="#ChooseScorersmodal2"
              onClick={() => {
                dispatch(setOpenModal('ChooseScorers'))
              }}
            >
              <img className="img-fluid" src={barca} alt="teamName" />
              <span className="team-name">برشلونة</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`tab-content tab5 ${activeTap === "tab5" && "active"}`}>
        <div className="bet-result-box">
          <p className="result-title">السباق للتهديف</p>
          <div className="result-items active_toggle_items only_active_item">
            <WinningTeam />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetTabsContent;
