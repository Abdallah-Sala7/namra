import React, { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import premierLeague from "../assets/img/Premier-League.svg";
import laLiga from "../assets/img/LaLiga.svg";

const SearchBar = () => {
  const [activeLeag, setActiveLeag] = useState([]);

  const toggleActive = (leag) => {
    if (activeLeag.includes(leag)) {
      setActiveLeag(activeLeag.filter((item) => item !== leag));
    } else {
      setActiveLeag([...activeLeag, leag]);
    }
  };

  return (
    <div className="section-style search-section">
      <div className="container">
        <div className="search-area">
          <div className="form-group">
            <input
              type="search"
              className="form-control input-focus"
              placeholder="البحث حسب فريق، دوري أو مسابقة"
            />
            <button type="submit" className="icon" title="Search" aria-label="Search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>

            {/* <ul className="search-dropdown scroll">
              <li className="list-item heading">
                <h6>الأندية</h6>
              </li>
              <li className="list-item menu-item">
                <a className="item-link" href="#">
                  <span className="logo">
                    <img
                      className="img-fluid"
                      src="img/Barcelona.svg"
                      alt="name"
                    />
                  </span>
                  <span className="ac-name">برشلونة</span>
                </a>
              </li>
              <li className="list-item menu-item">
                <a className="item-link" href="#">
                  <span className="logo">
                    <img
                      className="img-fluid"
                      src="img/Barcelona.svg"
                      alt="name"
                    />
                  </span>
                  <span className="ac-name">برشلونة</span>
                </a>
              </li>

              <li className="list-item heading">
                <h6>الدوريات</h6>
              </li>
              <li className="list-item menu-item">
                <a className="item-link" href="#">
                  <span className="logo">
                    <img
                      className="img-fluid"
                      src="img/LaLiga.svg"
                      alt="name"
                    />
                  </span>
                  <span className="ac-name">LaLiga</span>
                </a>
              </li>
              <li className="list-item menu-item">
                <a className="item-link" href="#">
                  <span className="logo">
                    <img
                      className="img-fluid"
                      src="img/LaLiga.svg"
                      alt="name"
                    />
                  </span>
                  <span className="ac-name">LaLiga</span>
                </a>
              </li>

              <li className="list-item heading">
                <h6>المسابقات</h6>
              </li>
              <li className="list-item menu-item">
                <a className="item-link" href="#">
                  <span className="logo">
                    <img
                      className="img-fluid"
                      src="img/LaLiga.svg"
                      alt="name"
                    />
                  </span>
                  <span className="ac-name">مسابقة لاليغا</span>
                </a>
              </li>
              <li className="list-item menu-item">
                <a className="item-link" href="#">
                  <span className="logo">
                    <img
                      className="img-fluid"
                      src="img/LaLiga.svg"
                      alt="name"
                    />
                  </span>
                  <span className="ac-name">مسابقة لاليغا</span>
                </a>
              </li>
              <li className="list-item menu-item">
                <a className="item-link" href="#">
                  <span className="logo">
                    <img
                      className="img-fluid"
                      src="img/LaLiga.svg"
                      alt="name"
                    />
                  </span>
                  <span className="ac-name">مسابقة لاليغا</span>
                </a>
              </li>
            </ul> */}
          </div>

          <div className="leagues-wrap">
            <button
              type="button"
              name="premierLeague"
              className={`league-item ${activeLeag.includes('premierLeague') && "active"}`}
              onClick={() => toggleActive("premierLeague")}
            >
              <img src={premierLeague} alt="leagueName" width={20} height={20} />
            </button>

            <button
              type="button"
              name="laLiga"
              className={`league-item ${activeLeag.includes('laLiga') && "active"}`}
              onClick={() => toggleActive("laLiga")}
            >
              <img src={laLiga} alt="leagueName" width={20} height={20} />
            </button>

            <button
              type="button"
              name="liga1"
              className={`league-item ${activeLeag.includes('liga1') && "active"}`}
              onClick={() => toggleActive("liga1")}
            >
              <img src={premierLeague} alt="leagueName" width={20} height={20} />
            </button>

            <button
              type="button"
              name="liga2"
              className={`league-item ${activeLeag.includes('liga2') && "active"}`}
              onClick={() => toggleActive("liga2")}
            >
              <img src={laLiga} alt="leagueName" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
