import { useDispatch, useSelector } from "react-redux";
import { setChooseScorer } from "../app/reducers/betSlice";

const ChooseScorerCard = ({ scorerName, scorerTeam, scorerImg }) => {
  const dispatch = useDispatch();
  const { chooseScorer } = useSelector((state) => state.betModal);

  const handleChooseScorer = () => {
    dispatch(setChooseScorer(scorerName));
  };

  return (
    <div className="list-item" onClick={handleChooseScorer}>
      <div
        className={`scorer-item active_toggle_item ${
          chooseScorer === scorerName && "active"
        }`}
      >
        <div className="img-box">
          <img className="img-fluid player-img" src={scorerImg} alt="playerName" />
          <img className="img-fluid team-img" src={scorerTeam} alt="teamName" />
        </div>
        <span className="player-name">{scorerName}</span>
      </div>
    </div>
  );
};

export default ChooseScorerCard;
