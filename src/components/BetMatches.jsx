import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import barca from "../assets/img/Barcelona.svg";
import BetTap from "./BetTap";
import { useDispatch, useSelector } from "react-redux";
import { setOpenModal } from "../app/reducers/appSlice";
import WinningTeam from "./bet_tabs_content/WinningTeam";
import MatchResult from "./bet_tabs_content/MatchResult";
import GoalDifference from "./bet_tabs_content/GoalDifference";
import Scorers from "./bet_tabs_content/Scorers";
import FirstScorer from "./bet_tabs_content/FirstScorer";

const BetMatches = () => {
  const dispatch = useDispatch();
  const { betData , activeTap} = useSelector((state) => state.betModal);

  return (
    <div className="bet-matches-modal custom-bet-modal custom-modal">
      <div
        className="model-over-lay"
        onClick={() => dispatch(setOpenModal(false))}
      ></div>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <button
            type="button"
            className="btn__close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => dispatch(setOpenModal(false))}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <div className="modal-body">
            <div className="bet-matches-area">
              <div className="area-head">
                <h2 className="head-title">راهن على المبارات</h2>
                <p className="head-text">
                  يمكنك المراهنة بطريقة سريعة على الفئة التي تريد أو المراهنة
                  بتفاصيل أكثر للفوز بنقاط أكثر
                </p>
              </div>

              <div className="bet-row">
                <div
                  className="row gx-5 gx-sm-4"
                  style={{ justifyContent: "center" }}
                >
                  <div className="row-col col-auto order-1 order-sm-1 mb-4 mb-sm-0">
                    <div className="team-item">
                      <img className="img-fluid" src={barca} alt="teamName" />
                      <span className="team-name">{betData.hostTeam.name}</span>
                    </div>
                  </div>

                  <div className="row-col col order-3  order-sm-2  ">
                    <div className="bet-wrap">
                      <div className="bet-col">
                        <p className="order-no">2</p>
                        <p className="win-per greater">87%</p>
                        <div className="history-items">
                          <div className="history-item lose">
                            <span className="history-type">خ</span>
                            <span className="history-val">33</span>
                          </div>
                          <div className="history-item draw">
                            <span className="history-type">ت</span>
                            <span className="history-val">24</span>
                          </div>
                          <div className="history-item win">
                            <span className="history-type">ف</span>
                            <span className="history-val">65</span>
                          </div>
                        </div>
                      </div>

                      <div className="bet-info">
                        <p className="info-title">الترتيب</p>
                        <p className="info-title">نسبة الفوز</p>
                        <p className="info-title">تاريخ المواجاهات</p>
                      </div>

                      <div className="bet-col">
                        <p className="order-no greater">1</p>
                        <p className="win-per">77%</p>
                        <div className="history-items">
                          <div className="history-item lose">
                            <span className="history-type">خ</span>
                            <span className="history-val">33</span>
                          </div>
                          <div className="history-item draw">
                            <span className="history-type">ت</span>
                            <span className="history-val">24</span>
                          </div>
                          <div className="history-item win">
                            <span className="history-type">ف</span>
                            <span className="history-val">65</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row-col col-auto order-2 order-sm-3 mb-4 mb-sm-0">
                    <div className="team-item">
                      <img className="img-fluid" src={barca} alt="teamName" />
                      <span className="team-name">
                        {betData.guestTeam.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bet-types-row tabs-content-area pb-0">
                <h2 className="area-title">الفئة المراهنة إليها</h2>
                <BetTap />
              </div>
              {
                activeTap === "tab1" ? <WinningTeam /> :
                activeTap === "tab2" ? <MatchResult /> :
                activeTap === "tab3" ? <GoalDifference /> :
                activeTap === "tab4" ? <Scorers /> :
                activeTap === "tab5" ? <FirstScorer /> : null
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetMatches;
