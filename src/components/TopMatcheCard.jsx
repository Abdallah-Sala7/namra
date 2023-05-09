import laLeag from "../assets/img/LaLiga.svg";
import barca from "../assets/img/Barcelona.svg";
import pointsIcon from "../assets/img/Points.svg";

const TopMatcheCard = () => {
  return (
    <div className="swiper-slide">
      <div className="top-matches-box">
        <div className="box-head">
          <div className="team-info">
            <img className="img-fluid" src={barca} alt="teamName" />
            <span className="team-name">برشلونة</span>
          </div>
          <div className="match-info">
            <img className="img-fluid" src={laLeag} alt="leag name" width={30} height={30} />
            <span className="date">اليوم</span>
            <span className="time">12:00</span>
          </div>
          <div className="team-info">
            <img className="img-fluid" src={barca} alt="teamName" />
            <span className="team-name">برشلونة</span>
          </div>
        </div>

        <div className="box-body">
          <div className="possible-points">
            <div className="ball-icon">
              <img className=" img-fluid" src={pointsIcon} alt="pointsIMG" />
            </div>
            <p className="points-val">8920 نقطة محتملة</p>
          </div>
        </div>
        
        <div className="box-footer">
          <button
            type="button"
            className="bet-matches"
            data-bs-toggle="modal"
            data-bs-target="#betMatchesmodal"
          >
            راهن على المباريات
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopMatcheCard;
