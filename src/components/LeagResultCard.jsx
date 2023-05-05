import trophy from "../assets/img/trophy.svg";
import laLeag from "../assets/img/LaLiga.svg";

const LeagResultCard = () => {
  return (
    <div className="swiper-slide">
      <div className="leagues-title">
        <span>LaLiga</span>
        <img className="img-fluid" src={laLeag} />
      </div>

      <div className="leagues-results-box">
        <div className="box-head">
          <span className="head-item item-grow">الفريق</span>
          <span className="head-item">لعب</span>
          <span className="head-item">فارق</span>
          <span className="head-item">النقاط</span>
        </div>

        <div className="box-body">
          <ul className="results-list">
            <li className="list-item">
              <div className="item-val w-icon">
                <span>
                  <img src={trophy} alt="" />
                </span>
                ليفربول
              </div>
              <div className="item-val ">21</div>
              <div className="item-val ">13</div>
              <div className="item-val ">7</div>
            </li>

            <li className="list-item">
              <div className="item-val w-icon">
                <span>
                  <img src={trophy} alt="" />
                </span>
                ليفربول
              </div>
              <div className="item-val ">21</div>
              <div className="item-val ">13</div>
              <div className="item-val ">7</div>
            </li>

            <li className="list-item">
              <div className="item-val w-icon">
                <span>
                <span>
                  <img src={trophy} alt="" />
                </span>
                </span>
                ليفربول
              </div>
              <div className="item-val ">21</div>
              <div className="item-val ">13</div>
              <div className="item-val ">7</div>
            </li>

            <li className="list-item">
              <div className="item-val w-icon">
                <span>
                  <img src={trophy} alt="" />
                </span>
                ليفربول
              </div>
              <div className="item-val ">21</div>
              <div className="item-val ">13</div>
              <div className="item-val ">7</div>
            </li>

            <li className="list-item">
              <div className="item-val w-icon">
                <span>4</span>
                ليفربول
              </div>
              <div className="item-val ">21</div>
              <div className="item-val ">13</div>
              <div className="item-val ">7</div>
            </li>

            <li className="list-item">
              <div className="item-val w-icon">
                <span>5</span>
                ليفربول
              </div>
              <div className="item-val ">21</div>
              <div className="item-val ">13</div>
              <div className="item-val ">7</div>
            </li>
            <li className="list-item">
              <div className="item-val w-icon">
                <span>6</span>
                ليفربول
              </div>
              <div className="item-val ">21</div>
              <div className="item-val ">13</div>
              <div className="item-val ">7</div>
            </li>
            <li className="list-item">
              <div className="item-val w-icon">
                <span>7</span>
                ليفربول
              </div>
              <div className="item-val ">21</div>
              <div className="item-val ">13</div>
              <div className="item-val ">7</div>
            </li>

            <li className="list-item">
              <div className="item-val w-icon">
                <span>4</span>
                ليفربول
              </div>
              <div className="item-val ">21</div>
              <div className="item-val ">13</div>
              <div className="item-val ">7</div>
            </li>
            <li className="list-item">
              <div className="item-val w-icon">
                <span>5</span>
                ليفربول
              </div>
              <div className="item-val ">21</div>
              <div className="item-val ">13</div>
              <div className="item-val ">7</div>
            </li>
            <li className="list-item">
              <div className="item-val w-icon">
                <span>6</span>
                ليفربول
              </div>
              <div className="item-val ">21</div>
              <div className="item-val ">13</div>
              <div className="item-val ">7</div>
            </li>
            <li className="list-item">
              <div className="item-val w-icon">
                <span>7</span>
                ليفربول
              </div>
              <div className="item-val ">21</div>
              <div className="item-val ">13</div>
              <div className="item-val ">7</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeagResultCard;
