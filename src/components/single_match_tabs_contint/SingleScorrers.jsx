import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import DefaultImg from "../DefaultImg";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ChooseScorerCard from "../ChooseScorerCard";
import playerImg from "../../assets/img/placeholder-m.jpg"
import defImg from "../../assets/img/club_logo.png"

const SingleScorrers = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const [playersData, setPlayersData] = useState([]);

  return (
    <>
      <div className="bet-teams active_toggle_items">
        <div
          className={`team-item active_toggle_item`}
          onClick={() => {
            setOpenModal(true)
            setPlayersData(data?.hostTeam);
          }}
        >
          <DefaultImg
            imgClass={"img-fluid"}
            src={data?.hostTeam.logo}
            alt={data?.hostTeam.name}
          />
          <span className="team-name">{data?.hostTeam.name}</span>
        </div>

        <div
          className={`team-item active_toggle_item`}
          onClick={() => {
            setOpenModal(true)
            setPlayersData(data?.guestTeam);
          }}
        >
          <DefaultImg
            imgClass={"img-fluid"}
            src={data?.guestTeam.logo}
            alt={data?.guestTeam.name}
          />
          <span className="team-name">{data?.guestTeam.name}</span>
        </div>
      </div>

      {openModal && (
        <div className="modal custom-modal bet-matches-modal choose-scorers-modal custom-scorer">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <button
                type="button"
                className="btn__close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setOpenModal(false)}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>

              <div
                className="model-over-lay"
                onClick={() => setOpenModal(false)}
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
                            scorerTeam={defImg}
                          />

                          <ChooseScorerCard
                            scorerImg={playerImg}
                            scorerName={"player 2"}
                            scorerTeam={defImg}
                          />

                          <ChooseScorerCard
                            scorerImg={playerImg}
                            scorerName={"player 3"}
                            scorerTeam={defImg}
                          />

                          <ChooseScorerCard
                            scorerImg={playerImg}
                            scorerName={"player 4"}
                            scorerTeam={defImg}
                          />

                          <ChooseScorerCard
                            scorerImg={playerImg}
                            scorerName={"player 5"}
                            scorerTeam={defImg}
                          />

                          <ChooseScorerCard
                            scorerImg={playerImg}
                            scorerName={"player 6"}
                            scorerTeam={defImg}
                          />

                          <ChooseScorerCard
                            scorerImg={playerImg}
                            scorerName={"player 7"}
                            scorerTeam={defImg}
                          />

                          <ChooseScorerCard
                            scorerImg={playerImg}
                            scorerName={"player 8"}
                            scorerTeam={defImg}
                          />

                          <ChooseScorerCard
                            scorerImg={playerImg}
                            scorerName={"player 9"}
                            scorerTeam={defImg}
                          />

                          <ChooseScorerCard
                            scorerImg={playerImg}
                            scorerName={"player 10"}
                            scorerTeam={defImg}
                          />

                          <ChooseScorerCard
                            scorerImg={playerImg}
                            scorerName={"player 11"}
                            scorerTeam={defImg}
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
                      onClick={() => setOpenModal(false)}
                    >
                      تأكيد الإختيار
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleScorrers;
