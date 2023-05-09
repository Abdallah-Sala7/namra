import premierLeag from "../assets/img/Premier-League.svg";
import laLeag from "../assets/img/LaLiga.svg";

const TopLeagues = () => {
  return (
    <div className="top-leagues-box">
      <div className="box-head">
        <h1 className="head-title">أفضل الدوريات</h1>
      </div>

      <div className="box-body">
        <ul className="leagues-list">
          <li className="list-item">
            <a className="item-link" href="#">
              <img className="img-fluid" src={premierLeag} alt="leagueName" />
              <span className="league-name">بريميير ليغ</span>
            </a>
          </li>

          <li className="list-item">
            <a className="item-link" href="#">
              <img className="img-fluid" src={laLeag} alt="leagueName" />
              <span className="league-name">الدوري الأروبي</span>
            </a>
          </li>

          <li className="list-item">
            <a className="item-link" href="#">
              <img className="img-fluid" src={premierLeag} alt="leagueName" />
              <span className="league-name">بريميير ليغ</span>
            </a>
          </li>

          <li className="list-item">
            <a className="item-link" href="#">
              <img className="img-fluid" src={laLeag} alt="leagueName" />
              <span className="league-name">الدوري الأروبي</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopLeagues;
