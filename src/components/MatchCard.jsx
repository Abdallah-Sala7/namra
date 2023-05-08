import { useDispatch } from "react-redux";

import { setOpenModal } from "../app/reducers/appSlice";

import points from "../assets/img/Points.svg";
import barca from "../assets/img/Barcelona.svg";
import { setBetData } from "../app/reducers/betSlice";
import DefaultImg from "./DefaultImg";

const MatchCard = ({ item }) => {
  const dispatch = useDispatch();

  const dateString = item.dateTimeGame;
  const date = new Date(dateString);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "UTC",
    timeZoneName: "short",
  };
  const standardTime = date.toLocaleString("ar-EG", options);

  let status = item.status;

  const handleOpenModal = () => {
    dispatch(setOpenModal("betModel"));
    dispatch(setBetData(item));
  };

  return (
    <div className="box-item">
      <div className="item-right">
        <div className="item-time">
          <p className="time">
            {standardTime.split(" ")[5] + " " + standardTime.split(" ")[6]}
          </p>
          <p className="date">
            {standardTime.split(" ")[1] + " " + standardTime.split(" ")[2]}
          </p>
        </div>
        {status === "live" ? (
          <div className="item-status live">مباشر</div>
        ) : status === "PST" ? (
          <div className="item-status today">اليوم</div>
        ) : status === "break" ? (
          <div className="item-status live-break">إستراحة الأشواط</div>
        ) : status === "FT" ? (
          <div className="item-status">منتهي</div>
        ) : status === "cancel" ? (
          <div className="item-status cancel">تم إلغاء المباراة</div>
        ) : (
          <div className="item-status date">23 سبتمبر</div>
        )}
      </div>

      <div className="item-middle">
        <div className="team-info">
          <span className="team-name">{item.hostTeam.name}</span>
          <DefaultImg
            src={item.hostTeam.logo}
            imgClass="img-fluid"
            alt="teamName"
          />
        </div>

        {status === "live" || status === "FT" || status === "break" ? (
          <div className="item-result">
            <span id="">{item.guestTeamResult}</span> :{" "}
            <span id="">{item.hostTeamResult}</span>
          </div>
        ) : (
          <div className="item-result soon">- : -</div>
        )}

        <div className="team-info">
          <DefaultImg
            src={item.guestTeam.logo}
            imgClass="img-fluid"
            alt="teamName"
          />
          <span className="team-name">{item.guestTeam.name}</span>
        </div>
      </div>

      <div className="item-left">
        {status === "live" ||
        status === "FT" ||
        status === "cancel" ||
        status === "break" ? (
          <div className="possible-points">
            <img className="item-icon img-fluid" src={points} alt="pointsIMG" />
            <span>8920 نقطة محتملة</span>
          </div>
        ) : (
          <button
            type="button"
            className="bet-matches"
            onClick={handleOpenModal}
          >
            راهن على المباريات
          </button>
        )}
      </div>
    </div>
  );
};

export default MatchCard;
