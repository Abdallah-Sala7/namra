import { useDispatch } from "react-redux";
import barca from "../assets/img/Barcelona.svg";
import { setOpenModal } from "../app/reducers/appSlice";

const ScorersTap = ({betData}) => {
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
          }}
        >
          <img className="img-fluid" src={barca} alt="teamName" />
          <span className="team-name">{betData.hostTeam.name}</span>
        </div>
        <div
          className="team-item active_toggle_item toggle-modal-btn"
          data-bs-toggle="modal"
          data-bs-target="#ChooseScorersmodal2"
          onClick={() => {
            dispatch(setOpenModal("ChooseScorers"));
          }}
        >
          <img className="img-fluid" src={barca} alt="teamName" />
          <span className="team-name">{betData.guestTeam.name}</span>
        </div>
      </div>
    </div>
  );
};

export default ScorersTap;
