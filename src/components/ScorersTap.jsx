import { useDispatch } from "react-redux";
import barca from "../assets/img/Barcelona.svg";
import { setOpenModal } from "../app/reducers/appSlice";
import DefaultImg from "./DefaultImg";
import { setPlayersData } from "../app/reducers/betSlice";

const ScorersTap = ({ betData }) => {
  const dispatch = useDispatch();

  return (
    <div className="bet-result-box">
      <p className="result-title">الهدافين</p>
      <div className="result-items active_toggle_items">
        <div
          className="team-item active_toggle_item toggle-modal-btn"
          data-bs-toggle="modal"
          data-bs-target="#ChooseScorersmodal2"
          onClick={() => {
            dispatch(setOpenModal("ChooseScorers"));
            dispatch(setPlayersData(betData.hostTeam));
          }}
        >
          <DefaultImg
            src={betData.hostTeam.logo}
            imgClass={"img-fluid"}
            alt={betData.hostTeam.name}
          />
          <span className="team-name">{betData.hostTeam.name}</span>
        </div>

        <div
          className="team-item active_toggle_item toggle-modal-btn"
          data-bs-toggle="modal"
          data-bs-target="#ChooseScorersmodal2"
          onClick={() => {
            dispatch(setOpenModal("ChooseScorers"));
            dispatch(setPlayersData(betData.guestTeam));
          }}
        >
          <DefaultImg
            src={betData.guestTeam.logo}
            imgClass={"img-fluid"}
            alt={betData.guestTeam.name}
          />
          <span className="team-name">{betData.guestTeam.name}</span>
        </div>
      </div>
    </div>
  );
};

export default ScorersTap;
