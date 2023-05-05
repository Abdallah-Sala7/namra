import points from "../assets/img/Points.svg";
import barca from "../assets/img/Barcelona.svg";

const MatchCard = ({status}) => {
  return (
    <div className="box-item">
      <div className="item-right">
        <div className="item-time">
          <p className="time">18:00</p>
          <p className="date">27 ينيو</p>
        </div>
        {
          status === "live" ? (
            <div className="item-status live">مباشر</div>
          ) : (
            <div className="item-status today">اليوم</div>
          )
        }
      </div>

      <div className="item-middle">
        <div className="team-info">
          <span className="team-name">برشلونة</span>
          <img className="img-fluid" src={barca} alt="teamName" />
        </div>
        <div className="item-result">
          <span id="">2</span>:<span id="">3</span>
        </div>
        <div className="team-info">
          <img className="img-fluid" src={barca} alt="teamName" />
          <span className="team-name">برشلونة</span>
        </div>
      </div>

      <div className="item-left">
        <div className="possible-points">
          <img className="item-icon img-fluid" src={points} alt="pointsIMG" />
          <span>8920 نقطة محتملة</span>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
