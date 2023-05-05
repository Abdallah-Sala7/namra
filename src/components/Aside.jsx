import React, { useState } from "react";
import barcelonaLogo from "../assets/img/Barcelona.svg";
import pointsImg from "../assets/img/Points.svg";
import coinImg from "../assets/img/Coin.svg";
import avatarPerson from "../assets/img/avatar-person.svg";

const Aside = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [moreNav, setMoreNav] = useState(false);
  const [moreTeam, setMoreTeam] = useState(false);

  return (
    <aside className="main-sidebar  panel-responsive-item">
      <div className="scroll-sidebar">
        <div className="sidebar-head">
          <a className="head-btn settings-btn" href="#">
            <i className="fa-sharp fa-solid fa-gear"></i>
          </a>
          <img
            className="img-fluid main-logo"
            src="img/logonamra10.png"
            alt="Namra"
          />
          <a className="head-btn notify-btn" href="#">
            <i className="fa-solid fa-bell"></i>
            <span className="counter">6</span>
          </a>
        </div>

        <div className="user-area">
          {isLogin ? (
            <div className="account-wrap">
              <div className="user-img">
                <img className="img-fluid" src={avatarPerson} alt="userName" />
              </div>

              <div className="user-info">
                <h4 className="user-name">سعد اليوسفي</h4>
                <p className="user-level">
                  <span id="">محترف</span>-<span id="">مستوى 20</span>
                </p>
              </div>

              <div className="level-bar">
                <span className="level-no start-no">20</span>
                <div className="bar-percentage">
                  <span className="bar" style={{ width: "70%" }}></span>
                </div>
                <span className="level-no end-no">21</span>
              </div>

              <div className="user-statistics">
                <div className="statistics-item coins-wrap">
                  <img
                    className="item-icon img-fluid"
                    src={coinImg}
                    alt="coinsIMG"
                  />
                  <p className="item-no coins-no">
                    <span id="">20302</span>
                    عملة
                  </p>
                </div>

                <div className="separator"></div>

                <div className="statistics-item points-wrap">
                  <img
                    className="item-icon img-fluid"
                    src={pointsImg}
                    alt="pointsIMG"
                  />
                  <p className="item-no points-no">
                    <span id="">120032</span>
                    نقطة
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="login-wrap d-none pt-4">
              <button
                className="login-btn sign-in-btn"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#signInmodal"
              >
                تسجيل الدخول
              </button>

              <div className="separator">
                <span>أو</span>
              </div>

              <button
                className="login-btn sign-out-btn"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#signUpmodal"
              >
                تسجيل الحساب
              </button>
            </div>
          )}
        </div>

        <div className="slidebar-nav">
          <ul className={`slidebar-links more-list ${moreNav ? "active" : ""}`}>
            <li className="list-item">
              <a className="item-link active" href="index.html">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 49.02 63.02"
                >
                  <defs></defs>
                  <title>2</title>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <g id="Symbols">
                        <g id="Icons_Home" data-name="Icons/Home">
                          <g id="Home">
                            <path
                              id="path-1"
                              d="M24.51,0,0,25.21V59.87A3,3,0,0,0,2.88,63H17.3V47.26a2.92,2.92,0,0,1,2.88-3.15h8.65a3.09,3.09,0,0,1,2.89,3.15V63H46.13A3,3,0,0,0,49,59.87V25.21Z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <span>الصفحة الرئيسية</span>
              </a>
            </li>
            <li className="list-item">
              <a className="item-link " href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z" />
                </svg>
                <span>الإعدادات</span>
              </a>
            </li>

            <li className="list-item">
              <a className="item-link caht-link" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M208 0C322.9 0 416 78.8 416 176C416 273.2 322.9 352 208 352C189.3 352 171.2 349.7 153.9 345.8C123.3 364.8 79.13 384 24.95 384C14.97 384 5.93 378.1 2.018 368.9C-1.896 359.7-.0074 349.1 6.739 341.9C7.26 341.5 29.38 317.4 45.73 285.9C17.18 255.8 0 217.6 0 176C0 78.8 93.13 0 208 0zM164.6 298.1C179.2 302.3 193.8 304 208 304C296.2 304 368 246.6 368 176C368 105.4 296.2 48 208 48C119.8 48 48 105.4 48 176C48 211.2 65.71 237.2 80.57 252.9L104.1 277.8L88.31 308.1C84.74 314.1 80.73 321.9 76.55 328.5C94.26 323.4 111.7 315.5 128.7 304.1L145.4 294.6L164.6 298.1zM441.6 128.2C552 132.4 640 209.5 640 304C640 345.6 622.8 383.8 594.3 413.9C610.6 445.4 632.7 469.5 633.3 469.9C640 477.1 641.9 487.7 637.1 496.9C634.1 506.1 625 512 615 512C560.9 512 516.7 492.8 486.1 473.8C468.8 477.7 450.7 480 432 480C350 480 279.1 439.8 245.2 381.5C262.5 379.2 279.1 375.3 294.9 369.9C322.9 407.1 373.9 432 432 432C446.2 432 460.8 430.3 475.4 426.1L494.6 422.6L511.3 432.1C528.3 443.5 545.7 451.4 563.5 456.5C559.3 449.9 555.3 442.1 551.7 436.1L535.9 405.8L559.4 380.9C574.3 365.3 592 339.2 592 304C592 237.7 528.7 183.1 447.1 176.6L448 176C448 159.5 445.8 143.5 441.6 128.2H441.6z" />
                </svg>
                <span>المراسلة</span>
                <div className="counter">6</div>
              </a>
            </li>

            <li className="list-item">
              <a className="item-link" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z" />
                </svg>
                <span>تاريخ النتائج</span>
              </a>
            </li>

            <li className="list-item">
              <a className="item-link" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 13a3.954 3.954 0 0 0 .142 1H9.858A3.954 3.954 0 0 0 10 13zm-3.5-4h3a2.486 2.486 0 0 1 1.945.949 3.992 3.992 0 0 1 .839-.547A3.485 3.485 0 0 0 13.5 8h-3a3.485 3.485 0 0 0-2.784 1.402 3.992 3.992 0 0 1 .84.547A2.486 2.486 0 0 1 10.5 9zM9 4a3 3 0 1 1 3 3 3.003 3.003 0 0 1-3-3zm1 0a2 2 0 1 0 2-2 2.002 2.002 0 0 0-2 2zM4.5 17h3a3.504 3.504 0 0 1 3.5 3.5V23H1v-2.5A3.504 3.504 0 0 1 4.5 17zm0 1A2.503 2.503 0 0 0 2 20.5V22h8v-1.5A2.503 2.503 0 0 0 7.5 18zM6 16a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3zm0-1a2 2 0 1 0-2-2 2.002 2.002 0 0 0 2 2zm17 5.5V23H13v-2.5a3.504 3.504 0 0 1 3.5-3.5h3a3.504 3.504 0 0 1 3.5 3.5zm-1 0a2.503 2.503 0 0 0-2.5-2.5h-3a2.503 2.503 0 0 0-2.5 2.5V22h8zM21 13a3 3 0 1 1-3-3 3.003 3.003 0 0 1 3 3zm-1 0a2 2 0 1 0-2 2 2.002 2.002 0 0 0 2-2z"></path>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                </svg>
                <span>المتصدرين</span>
              </a>
            </li>

            <li className="list-item">
              <a className="item-link" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z" />
                </svg>
                <span>الجوائز</span>
              </a>
            </li>

            <li className="list-item">
              <a className="item-link" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="#000000"
                  height="800px"
                  width="800px"
                  version="1.1"
                  id="Layer_1"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path d="M500.364,244.364h-11.636v-58.182c0-6.982-4.655-11.636-11.636-11.636h-11.636v-58.182    c0-6.982-4.655-11.636-11.636-11.636h-11.636V46.545c0-6.982-4.655-11.636-11.636-11.636H104.727    c-6.982,0-11.636,4.655-11.636,11.636v58.182c0,6.982,4.655,11.636,11.636,11.636s11.636-4.655,11.636-11.636V58.182h302.545    v46.545H232.727c-6.982,0-11.636,4.655-11.636,11.636S225.745,128,232.727,128h209.455v46.545H337.455    c-6.982,0-11.636,4.655-11.636,11.636s4.655,11.636,11.636,11.636h104.727h11.636h11.636v46.545h-93.091    c-6.982,0-11.636,4.655-11.636,11.636s4.655,11.636,11.636,11.636h116.364v46.545H384c-6.982,0-11.636,4.655-11.636,11.636    s4.655,11.636,11.636,11.636h34.909V384h-58.182c-6.982,0-11.636,4.655-11.636,11.636c0,6.982,4.655,11.636,11.636,11.636h104.727    v46.545H302.545c-6.982,0-11.636,4.655-11.636,11.636c0,6.982,4.655,11.636,11.636,11.636h174.545    c6.982,0,11.636-4.655,11.636-11.636v-69.818c0-6.982-4.655-11.636-11.636-11.636h-34.909v-46.545h58.182    c6.982,0,11.636-4.655,11.636-11.636V256C512,249.018,507.345,244.364,500.364,244.364z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M174.545,128C77.964,128,0,205.964,0,302.545s77.964,174.545,174.545,174.545s174.545-77.964,174.545-174.545    S271.127,128,174.545,128z M174.545,453.818c-83.782,0-151.273-67.491-151.273-151.273s67.491-151.273,151.273-151.273    s151.273,67.491,151.273,151.273S258.327,453.818,174.545,453.818z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M174.545,174.545c-70.982,0-128,57.018-128,128s57.018,128,128,128s128-57.018,128-128S245.527,174.545,174.545,174.545z     M174.545,407.273c-58.182,0-104.727-46.545-104.727-104.727s46.545-104.727,104.727-104.727s104.727,46.545,104.727,104.727    S232.727,407.273,174.545,407.273z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M197.818,325.818h-11.636v-58.182c0-6.982-4.655-11.636-11.636-11.636h-23.273c-6.982,0-11.636,4.655-11.636,11.636    s4.655,11.636,11.636,11.636h11.636v46.545h-11.636c-6.982,0-11.636,4.655-11.636,11.636c0,6.982,4.655,11.636,11.636,11.636    h46.545c6.982,0,11.636-4.655,11.636-11.636C209.455,330.473,204.8,325.818,197.818,325.818z" />
                    </g>
                  </g>
                </svg>
                <span>إدارة العملات</span>
              </a>
            </li>

            <li className="list-item">
              <a className="item-link" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM256 336c-18 0-32 14-32 32s13.1 32 32 32c17.1 0 32-14 32-32S273.1 336 256 336zM289.1 128h-51.1C199 128 168 159 168 198c0 13 11 24 24 24s24-11 24-24C216 186 225.1 176 237.1 176h51.1C301.1 176 312 186 312 198c0 8-4 14.1-11 18.1L244 251C236 256 232 264 232 272V288c0 13 11 24 24 24S280 301 280 288V286l45.1-28c21-13 34-36 34-60C360 159 329 128 289.1 128z" />
                </svg>
                <span>مساعدة</span>
              </a>
            </li>
          </ul>

          <div className="more-wrap">
            <button
              type="button"
              className="more-btn"
              onClick={() => setMoreNav(!moreNav)}
            >
              {moreNav ? " عرض أقل " : " عرض الباقي (4)"}
            </button>
          </div>
        </div>

        <div className="favorite-teams">
          <div className="list-head more-list">
            <h5 className="list-title">الفرق المفضلة</h5>
            <a className="list-more" href="#">
              أضف
            </a>
          </div>

          <ul className={`teams-list more-list ${moreTeam ? "active" : ""}`}>
            <li className="list-item">
              <a href="match-page.html" className="team-item">
                <img
                  className="team-img img-fluid"
                  src={barcelonaLogo}
                  alt="teamName"
                />
                <span className="team-name">برشلونة</span>
              </a>
            </li>

            <li className="list-item">
              <a href="match-page.html" className="team-item">
                <img
                  className="team-img img-fluid"
                  src={barcelonaLogo}
                  alt="teamName"
                />
                <span className="team-name">برشلونة</span>
              </a>
            </li>

            <li className="list-item">
              <a href="match-page.html" className="team-item">
                <img
                  className="team-img img-fluid"
                  src={barcelonaLogo}
                  alt="teamName"
                />
                <span className="team-name">برشلونة</span>
              </a>
            </li>

            <li className="list-item">
              <a href="match-page.html" className="team-item">
                <img
                  className="team-img img-fluid"
                  src={barcelonaLogo}
                  alt="teamName"
                />
                <span className="team-name">برشلونة</span>
              </a>
            </li>
          </ul>

          <div className="more-wrap">
            <button
              type="button"
              className="more-btn"
              onClick={() => setMoreTeam(!moreTeam)}
            >
              {moreTeam ? " عرض أقل " : " عرض الباقي (3)"}
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
