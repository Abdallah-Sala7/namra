import React from "react";
import DefaultLeag from "../assets/img/def_leag.png";
import DefaultImg from "./DefaultImg";

const SingleMatchHead = ({ data }) => {
  const date = new Date(data.dateTimeGame);
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

  const englishTime = date.toLocaleString("en-US", options);
  const standardTime = date.toLocaleString("ar-EG", options);

  console.log(data.round.split(" ")[3]);
  return (
    <section className="section-style single-match-section">
      <div className="container">
        <div className="single-match-area">
          <div className="single-match-box">
            <div className="box-head">
              <button
                type="button"
                className="favorite-btn active_toggle_item ms-3"
              >
                <i className="fa-solid fa-star"></i>
              </button>

              <div className="head-league d-flex">
                <div className="league-flex">
                  <img
                    className="img-fluid"
                    src={`https://quiet-falls-97256.herokuapp.com/${data?.league?.logo}`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = DefaultLeag;
                    }}
                    alt={data?.league?.name}
                    width={20}
                    height={20}
                  />
                  <span className="league-name">{data?.league?.name}</span>
                </div>
              </div>

              <div className="head-info">
                <span className="info-item date">
                  {englishTime.split(" ")[2]} {standardTime.split(" ")[2]} (
                  {standardTime.split(" ")[0].split("،")[0]})
                </span>

                <span className="info-item time">
                  {englishTime.split(" ")[5] + englishTime.split(" ")[6]}
                </span>
              </div>
            </div>

            <div className="box-body">
              <div className="item-middle">
                <div className="team-info">
                  <DefaultImg
                    src={data?.hostTeam?.logo}
                    alt={data?.hostTeam?.name}
                    imgClass={"img-fluid"}
                  />

                  <span className="team-name">{data?.hostTeam?.name}</span>
                </div>
                <div className="item-result">
                  <div className="match-result">
                    <span id="">{data.hostTeamResult}</span>-
                    <span id="">{data.guestTeamResult}</span>
                  </div>
                </div>
                <div className="team-info">
                  <DefaultImg
                    src={data?.guestTeam?.logo}
                    alt={data?.guestTeam?.name}
                    imgClass={"img-fluid"}
                  />
                  <span className="team-name">{data?.guestTeam?.name}</span>
                </div>
              </div>
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

            <div className="box-footer">
              <div className="footer-info">
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
                  <path
                    d="M256,192c-35.4,0-64,28.6-64,64c0,35.4,28.6,64,64,64c35.4,0,64-28.6,64-64C320,220.6,291.4,192,256,192z M256,149.3  c23.5,0,42.7-19.1,42.7-42.7v-64C298.7,19.1,279.5,0,256,0c-23.5,0-42.7,19.1-42.7,42.7v64C213.3,130.2,232.5,149.3,256,149.3z   M256,362.7c-23.5,0-42.7,19.1-42.7,42.7v64c0,23.5,19.1,42.7,42.7,42.7c23.5,0,42.7-19.1,42.7-42.7v-64  C298.7,381.8,279.5,362.7,256,362.7z M469.3,213.3h-64c-23.5,0-42.7,19.1-42.7,42.7c0,23.5,19.1,42.7,42.7,42.7h64  c23.5,0,42.7-19.1,42.7-42.7C512,232.5,492.9,213.3,469.3,213.3z M149.3,256c0-23.5-19.1-42.7-42.7-42.7h-64  C19.1,213.3,0,232.5,0,256c0,23.5,19.1,42.7,42.7,42.7h64C130.2,298.7,149.3,279.5,149.3,256z M391.8,331.4  c-16.7-16.6-43.7-16.6-60.4,0c-16.6,16.7-16.6,43.7,0,60.4l45.3,45.3c16.6,16.6,43.7,16.6,60.3,0c16.6-16.7,16.6-43.7,0-60.3  L391.8,331.4z M120.2,180.6c16.7,16.6,43.7,16.6,60.4,0c16.6-16.7,16.6-43.7,0-60.4L135.3,75C118.7,58.3,91.6,58.3,75,75  c-16.6,16.7-16.6,43.7,0,60.3L120.2,180.6z M391.8,180.6l45.3-45.3c16.6-16.6,16.6-43.7,0-60.3c-16.7-16.6-43.7-16.6-60.3,0  l-45.3,45.3c-16.6,16.7-16.6,43.7,0,60.4C348.1,197.2,375.1,197.2,391.8,180.6z M120.2,331.4L75,376.7c-16.6,16.6-16.6,43.7,0,60.3  c16.7,16.6,43.7,16.6,60.3,0l45.3-45.3c16.6-16.7,16.6-43.7,0-60.4C163.9,314.8,136.9,314.8,120.2,331.4z"
                    fill="#05a8ce"
                  ></path>
                </svg>
                <p className="info-text">
                  الملعب:
                  <span>{data.stadium.name}</span>
                </p>
              </div>
              <div className="footer-info">
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
                  <path
                    d="M256,192c-35.4,0-64,28.6-64,64c0,35.4,28.6,64,64,64c35.4,0,64-28.6,64-64C320,220.6,291.4,192,256,192z M256,149.3  c23.5,0,42.7-19.1,42.7-42.7v-64C298.7,19.1,279.5,0,256,0c-23.5,0-42.7,19.1-42.7,42.7v64C213.3,130.2,232.5,149.3,256,149.3z   M256,362.7c-23.5,0-42.7,19.1-42.7,42.7v64c0,23.5,19.1,42.7,42.7,42.7c23.5,0,42.7-19.1,42.7-42.7v-64  C298.7,381.8,279.5,362.7,256,362.7z M469.3,213.3h-64c-23.5,0-42.7,19.1-42.7,42.7c0,23.5,19.1,42.7,42.7,42.7h64  c23.5,0,42.7-19.1,42.7-42.7C512,232.5,492.9,213.3,469.3,213.3z M149.3,256c0-23.5-19.1-42.7-42.7-42.7h-64  C19.1,213.3,0,232.5,0,256c0,23.5,19.1,42.7,42.7,42.7h64C130.2,298.7,149.3,279.5,149.3,256z M391.8,331.4  c-16.7-16.6-43.7-16.6-60.4,0c-16.6,16.7-16.6,43.7,0,60.4l45.3,45.3c16.6,16.6,43.7,16.6,60.3,0c16.6-16.7,16.6-43.7,0-60.3  L391.8,331.4z M120.2,180.6c16.7,16.6,43.7,16.6,60.4,0c16.6-16.7,16.6-43.7,0-60.4L135.3,75C118.7,58.3,91.6,58.3,75,75  c-16.6,16.7-16.6,43.7,0,60.3L120.2,180.6z M391.8,180.6l45.3-45.3c16.6-16.6,16.6-43.7,0-60.3c-16.7-16.6-43.7-16.6-60.3,0  l-45.3,45.3c-16.6,16.7-16.6,43.7,0,60.4C348.1,197.2,375.1,197.2,391.8,180.6z M120.2,331.4L75,376.7c-16.6,16.6-16.6,43.7,0,60.3  c16.7,16.6,43.7,16.6,60.3,0l45.3-45.3c16.6-16.7,16.6-43.7,0-60.4C163.9,314.8,136.9,314.8,120.2,331.4z"
                    fill="#05a8ce"
                  ></path>
                </svg>
                <p className="info-text">
                  الجولة
                  <span>{data.round.split(" ")[3]}</span>
                </p>
              </div>
              <div className="footer-info">
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
                  <path
                    d="M256,192c-35.4,0-64,28.6-64,64c0,35.4,28.6,64,64,64c35.4,0,64-28.6,64-64C320,220.6,291.4,192,256,192z M256,149.3  c23.5,0,42.7-19.1,42.7-42.7v-64C298.7,19.1,279.5,0,256,0c-23.5,0-42.7,19.1-42.7,42.7v64C213.3,130.2,232.5,149.3,256,149.3z   M256,362.7c-23.5,0-42.7,19.1-42.7,42.7v64c0,23.5,19.1,42.7,42.7,42.7c23.5,0,42.7-19.1,42.7-42.7v-64  C298.7,381.8,279.5,362.7,256,362.7z M469.3,213.3h-64c-23.5,0-42.7,19.1-42.7,42.7c0,23.5,19.1,42.7,42.7,42.7h64  c23.5,0,42.7-19.1,42.7-42.7C512,232.5,492.9,213.3,469.3,213.3z M149.3,256c0-23.5-19.1-42.7-42.7-42.7h-64  C19.1,213.3,0,232.5,0,256c0,23.5,19.1,42.7,42.7,42.7h64C130.2,298.7,149.3,279.5,149.3,256z M391.8,331.4  c-16.7-16.6-43.7-16.6-60.4,0c-16.6,16.7-16.6,43.7,0,60.4l45.3,45.3c16.6,16.6,43.7,16.6,60.3,0c16.6-16.7,16.6-43.7,0-60.3  L391.8,331.4z M120.2,180.6c16.7,16.6,43.7,16.6,60.4,0c16.6-16.7,16.6-43.7,0-60.4L135.3,75C118.7,58.3,91.6,58.3,75,75  c-16.6,16.7-16.6,43.7,0,60.3L120.2,180.6z M391.8,180.6l45.3-45.3c16.6-16.6,16.6-43.7,0-60.3c-16.7-16.6-43.7-16.6-60.3,0  l-45.3,45.3c-16.6,16.7-16.6,43.7,0,60.4C348.1,197.2,375.1,197.2,391.8,180.6z M120.2,331.4L75,376.7c-16.6,16.6-16.6,43.7,0,60.3  c16.7,16.6,43.7,16.6,60.3,0l45.3-45.3c16.6-16.7,16.6-43.7,0-60.4C163.9,314.8,136.9,314.8,120.2,331.4z"
                    fill="#05a8ce"
                  ></path>
                </svg>
                <p className="info-text">
                  الحكم:
                  <span>منزونا إيبيس</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleMatchHead;
