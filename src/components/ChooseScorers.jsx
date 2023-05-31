import React from "react";
import barca from "../assets/img/Barcelona.svg";
import ChooseScorerCard from "./ChooseScorerCard";
import playerImg from "../assets/img/placeholder-m.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { setOpenModal } from "../app/reducers/appSlice";
import { useDispatch, useSelector } from "react-redux";
import DefaultImg from "./DefaultImg";

const ChooseScorers = () => {
  const dispatch = useDispatch();

  const { playersData } = useSelector((state) => state.betModal);

  console.log(playersData);

  return (
    <div className="modal custom-modal bet-matches-modal choose-scorers-modal custom-scorer">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <button
            type="button"
            className="btn__close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => dispatch(setOpenModal(false))}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>

          <div
            className="model-over-lay"
            onClick={() => dispatch(setOpenModal(false))}
          ></div>

          <div className="modal-body">
            <div className="bet-matches-area">
              <div className="area-head">
                <h2 className="head-title">إختر الهدافين</h2>
                <p className="head-text">
                  يمكنك إختيار الهدافين على حسب الفريق
                </p>
              </div>

              <div className="choose-scorers-area">
                <div className="team-item">
                  <DefaultImg
                    src={playersData?.logo}
                    imgClass={"img-fluid"}
                    alt={playersData?.name}
                  />

                  <span className="team-name">{playersData?.name}</span>
                </div>

                <div className="scorers-list scroll-list active_toggle_items">
                  {playersData.players.length > 0 ? (
                    playersData.players.map((player) => (
                      <ChooseScorerCard
                        scorerImg={playerImg}
                        scorerName={player.name}
                        scorerTeam={playersData.name}
                      />
                    ))
                  ) : (
                    <>
                      <ChooseScorerCard
                        scorerImg={playerImg}
                        scorerName={"player 1"}
                        scorerTeam={barca}
                      />

                      <ChooseScorerCard
                        scorerImg={playerImg}
                        scorerName={"player 2"}
                        scorerTeam={barca}
                      />

                      <ChooseScorerCard
                        scorerImg={playerImg}
                        scorerName={"player 3"}
                        scorerTeam={barca}
                      />

                      <ChooseScorerCard
                        scorerImg={playerImg}
                        scorerName={"player 4"}
                        scorerTeam={barca}
                      />

                      <ChooseScorerCard
                        scorerImg={playerImg}
                        scorerName={"player 5"}
                        scorerTeam={barca}
                      />

                      <ChooseScorerCard
                        scorerImg={playerImg}
                        scorerName={"player 6"}
                        scorerTeam={barca}
                      />

                      <ChooseScorerCard
                        scorerImg={playerImg}
                        scorerName={"player 7"}
                        scorerTeam={barca}
                      />

                      <ChooseScorerCard
                        scorerImg={playerImg}
                        scorerName={"player 8"}
                        scorerTeam={barca}
                      />

                      <ChooseScorerCard
                        scorerImg={playerImg}
                        scorerName={"player 9"}
                        scorerTeam={barca}
                      />

                      <ChooseScorerCard
                        scorerImg={playerImg}
                        scorerName={"player 10"}
                        scorerTeam={barca}
                      />

                      <ChooseScorerCard
                        scorerImg={playerImg}
                        scorerName={"player 11"}
                        scorerTeam={barca}
                      />
                    </>
                  )}
                </div>
              </div>

              <div className="footer-btns">
                <button
                  type="button"
                  className="footer-btn toggle-modal-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#betMatchesmodal"
                  onClick={() => dispatch(setOpenModal("betModel"))}
                >
                  تأكيد الإختيار
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseScorers;
