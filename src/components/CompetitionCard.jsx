import category from "../assets/images/category.svg"
import currency from "../assets/images/currency.svg"
import point from "../assets/images/point.svg"


const CompetitionCard = ({leagImg}) => {
  return (
    <div className="swiper-slide">
      <article className="widget__item-card widget-1">
        <div className="widget__item-image">
          <img src={leagImg} alt="" />
        </div>

        <div className="widget__item-content d-flex flex-column p-2 p-lg-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="col-6">
              <h5 className="text-white font-bold">مسابقة برمييرليغ</h5>
            </div>
            
            <div className="col-4 text-center">
              <picture>
                {" "}
                <img src={category} alt="" />
              </picture>
              <h6 className="text-white">دوري</h6>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-end mt-auto">
            <div className="col-auto">
              <h5 className="text-white font-bold mb-1">مكافأة</h5>
              <div className="widget__item-reward">
                <div className="d-flex align-items-center">
                  <div className="icon col-auto ms-1">
                    <picture>
                      <img src={currency} alt="" />
                    </picture>
                  </div>
                  <div className="col-auto">
                    <h5 className="text-white font-size-12">02034</h5>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="icon col-auto ms-1">
                    <picture>
                      <img src={point} alt="" />
                    </picture>
                  </div>
                  <div className="col-auto">
                    <h5 className="text-white font-size-12">32311</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <a className="font-bold btn btn-outline-white" href="">
                اكتششف
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CompetitionCard;
