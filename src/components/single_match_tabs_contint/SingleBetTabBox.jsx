import React, { useEffect, useState } from "react";
import coinsBlack from "../../assets/img/coin-3-black.webp";
import {
  calcCoinsPointFirst,
  calcCoinsPointSecond,
} from "../../data/calcFunctions";

const SingleBetTabBox = ({
  children,
  title,
  oddSelect,
  hostOdd,
  guestOdd,
  oddDraw,
  predictionLevel,
}) => {
  const [coinCount, setCoinCount] = useState(1);
  const [pointsToWin, setPointsToWin] = useState(0);
  const [coinsToWin, setCoinsToWin] = useState(0);

  useEffect(() => {
    if (oddSelect) {
      setCoinsToWin(
        calcCoinsPointFirst(
          hostOdd,
          guestOdd,
          oddSelect,
          coinCount,
          predictionLevel
        ).coinsToWin
      );

      setPointsToWin(
        calcCoinsPointFirst(
          hostOdd,
          guestOdd,
          oddSelect,
          coinCount,
          predictionLevel
        ).pointsToWin
      );
    } else {
      setCoinsToWin(
        calcCoinsPointSecond(
          hostOdd,
          guestOdd,
          oddDraw,
          coinCount,
          predictionLevel
        ).coinsToWin
      );

      setPointsToWin(
        calcCoinsPointSecond(
          hostOdd,
          guestOdd,
          oddDraw,
          coinCount,
          predictionLevel
        ).pointsToWin
      );
    }
  }, [oddSelect, hostOdd, guestOdd, predictionLevel, coinCount]);

  return (
    <div className="box-wrap">
      <div className="bet-box">
        <h4 className="box-title">{title}</h4>

        {children}

        <div className="bet-points">
          <p className="note-text">الحد الأدنى للعملة المراهنة</p>
          <div className="points-counter">
            <button
              type="button"
              className="count-btn add-btn"
              onClick={() => {
                setCoinCount(coinCount + 1);
              }}
            >
              +
            </button>
            <div className="counter-input-wrap">
              <div className="counter-icon">
                <img
                  className="item-icon img-fluid"
                  src={coinsBlack}
                  alt="coinsIMG"
                />
              </div>
              <input
                className="counter-input"
                type="tel"
                min="1"
                value={coinCount}
                onChange={(e) => setCoinCount(e.target.value)}
                placeholder="5"
              />
            </div>
            <button
              type="button"
              className="count-btn sub-btn"
              onClick={() => {
                if (coinCount > 1) {
                  setCoinCount(coinCount - 1);
                }
              }}
            >
              -
            </button>
          </div>
        </div>

        <div className="bet-info">
          <div className="info-item">
            <div className="item-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                height="800px"
                width="800px"
                version="1.1"
                id="Layer_1"
                viewBox="0 0 512 512"
                enableBackground="new 0 0 512 512"
                xmlSpace="preserve"
              >
                <path d="M256,192c-35.4,0-64,28.6-64,64c0,35.4,28.6,64,64,64c35.4,0,64-28.6,64-64C320,220.6,291.4,192,256,192z M256,149.3  c23.5,0,42.7-19.1,42.7-42.7v-64C298.7,19.1,279.5,0,256,0c-23.5,0-42.7,19.1-42.7,42.7v64C213.3,130.2,232.5,149.3,256,149.3z   M256,362.7c-23.5,0-42.7,19.1-42.7,42.7v64c0,23.5,19.1,42.7,42.7,42.7c23.5,0,42.7-19.1,42.7-42.7v-64  C298.7,381.8,279.5,362.7,256,362.7z M469.3,213.3h-64c-23.5,0-42.7,19.1-42.7,42.7c0,23.5,19.1,42.7,42.7,42.7h64  c23.5,0,42.7-19.1,42.7-42.7C512,232.5,492.9,213.3,469.3,213.3z M149.3,256c0-23.5-19.1-42.7-42.7-42.7h-64  C19.1,213.3,0,232.5,0,256c0,23.5,19.1,42.7,42.7,42.7h64C130.2,298.7,149.3,279.5,149.3,256z M391.8,331.4  c-16.7-16.6-43.7-16.6-60.4,0c-16.6,16.7-16.6,43.7,0,60.4l45.3,45.3c16.6,16.6,43.7,16.6,60.3,0c16.6-16.7,16.6-43.7,0-60.3  L391.8,331.4z M120.2,180.6c16.7,16.6,43.7,16.6,60.4,0c16.6-16.7,16.6-43.7,0-60.4L135.3,75C118.7,58.3,91.6,58.3,75,75  c-16.6,16.7-16.6,43.7,0,60.3L120.2,180.6z M391.8,180.6l45.3-45.3c16.6-16.6,16.6-43.7,0-60.3c-16.7-16.6-43.7-16.6-60.3,0  l-45.3,45.3c-16.6,16.7-16.6,43.7,0,60.4C348.1,197.2,375.1,197.2,391.8,180.6z M120.2,331.4L75,376.7c-16.6,16.6-16.6,43.7,0,60.3  c16.7,16.6,43.7,16.6,60.3,0l45.3-45.3c16.6-16.7,16.6-43.7,0-60.4C163.9,314.8,136.9,314.8,120.2,331.4z"></path>
              </svg>
              الربح المحتمل
            </div>
            <p className="item-val">{coinsToWin} عملة</p>
          </div>

          <div className="info-item">
            <div className="item-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                height="800px"
                width="800px"
                version="1.1"
                id="Layer_1"
                viewBox="0 0 512 512"
                enableBackground="new 0 0 512 512"
                xmlSpace="preserve"
              >
                <path d="M256,192c-35.4,0-64,28.6-64,64c0,35.4,28.6,64,64,64c35.4,0,64-28.6,64-64C320,220.6,291.4,192,256,192z M256,149.3  c23.5,0,42.7-19.1,42.7-42.7v-64C298.7,19.1,279.5,0,256,0c-23.5,0-42.7,19.1-42.7,42.7v64C213.3,130.2,232.5,149.3,256,149.3z   M256,362.7c-23.5,0-42.7,19.1-42.7,42.7v64c0,23.5,19.1,42.7,42.7,42.7c23.5,0,42.7-19.1,42.7-42.7v-64  C298.7,381.8,279.5,362.7,256,362.7z M469.3,213.3h-64c-23.5,0-42.7,19.1-42.7,42.7c0,23.5,19.1,42.7,42.7,42.7h64  c23.5,0,42.7-19.1,42.7-42.7C512,232.5,492.9,213.3,469.3,213.3z M149.3,256c0-23.5-19.1-42.7-42.7-42.7h-64  C19.1,213.3,0,232.5,0,256c0,23.5,19.1,42.7,42.7,42.7h64C130.2,298.7,149.3,279.5,149.3,256z M391.8,331.4  c-16.7-16.6-43.7-16.6-60.4,0c-16.6,16.7-16.6,43.7,0,60.4l45.3,45.3c16.6,16.6,43.7,16.6,60.3,0c16.6-16.7,16.6-43.7,0-60.3  L391.8,331.4z M120.2,180.6c16.7,16.6,43.7,16.6,60.4,0c16.6-16.7,16.6-43.7,0-60.4L135.3,75C118.7,58.3,91.6,58.3,75,75  c-16.6,16.7-16.6,43.7,0,60.3L120.2,180.6z M391.8,180.6l45.3-45.3c16.6-16.6,16.6-43.7,0-60.3c-16.7-16.6-43.7-16.6-60.3,0  l-45.3,45.3c-16.6,16.7-16.6,43.7,0,60.4C348.1,197.2,375.1,197.2,391.8,180.6z M120.2,331.4L75,376.7c-16.6,16.6-16.6,43.7,0,60.3  c16.7,16.6,43.7,16.6,60.3,0l45.3-45.3c16.6-16.7,16.6-43.7,0-60.4C163.9,314.8,136.9,314.8,120.2,331.4z"></path>
              </svg>
              النقاط المحتملة
            </div>
            <p className="item-val">{pointsToWin} عملة</p>
          </div>

          <div className="info-item">
            <div className="item-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                height="800px"
                width="800px"
                version="1.1"
                id="Layer_1"
                viewBox="0 0 512 512"
                enableBackground="new 0 0 512 512"
                xmlSpace="preserve"
              >
                <path d="M256,192c-35.4,0-64,28.6-64,64c0,35.4,28.6,64,64,64c35.4,0,64-28.6,64-64C320,220.6,291.4,192,256,192z M256,149.3  c23.5,0,42.7-19.1,42.7-42.7v-64C298.7,19.1,279.5,0,256,0c-23.5,0-42.7,19.1-42.7,42.7v64C213.3,130.2,232.5,149.3,256,149.3z   M256,362.7c-23.5,0-42.7,19.1-42.7,42.7v64c0,23.5,19.1,42.7,42.7,42.7c23.5,0,42.7-19.1,42.7-42.7v-64  C298.7,381.8,279.5,362.7,256,362.7z M469.3,213.3h-64c-23.5,0-42.7,19.1-42.7,42.7c0,23.5,19.1,42.7,42.7,42.7h64  c23.5,0,42.7-19.1,42.7-42.7C512,232.5,492.9,213.3,469.3,213.3z M149.3,256c0-23.5-19.1-42.7-42.7-42.7h-64  C19.1,213.3,0,232.5,0,256c0,23.5,19.1,42.7,42.7,42.7h64C130.2,298.7,149.3,279.5,149.3,256z M391.8,331.4  c-16.7-16.6-43.7-16.6-60.4,0c-16.6,16.7-16.6,43.7,0,60.4l45.3,45.3c16.6,16.6,43.7,16.6,60.3,0c16.6-16.7,16.6-43.7,0-60.3  L391.8,331.4z M120.2,180.6c16.7,16.6,43.7,16.6,60.4,0c16.6-16.7,16.6-43.7,0-60.4L135.3,75C118.7,58.3,91.6,58.3,75,75  c-16.6,16.7-16.6,43.7,0,60.3L120.2,180.6z M391.8,180.6l45.3-45.3c16.6-16.6,16.6-43.7,0-60.3c-16.7-16.6-43.7-16.6-60.3,0  l-45.3,45.3c-16.6,16.7-16.6,43.7,0,60.4C348.1,197.2,375.1,197.2,391.8,180.6z M120.2,331.4L75,376.7c-16.6,16.6-16.6,43.7,0,60.3  c16.7,16.6,43.7,16.6,60.3,0l45.3-45.3c16.6-16.7,16.6-43.7,0-60.4C163.9,314.8,136.9,314.8,120.2,331.4z"></path>
              </svg>
              الخسائر المحتملة
            </div>
            <p className="item-val">8400 عملة</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBetTabBox;
