import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useSwiper } from "swiper/react";
const LeagSwipNav = () => {
  const swiper = useSwiper();
  return (
    <>
      <button
        className="slider-arrow prev-btn leag-swip-arrow"
        type="button"
        title="Previous"
        name="prev"
        aria-label="Previous"
        onClick={() => swiper.slidePrev()}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
      <button
        className="slider-arrow next-btn leag-swip-arrow"
        type="button"
        title="Next"
        name="next"
        aria-label="Next"
        onClick={() => swiper.slideNext()}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    </>
  );
};

export default LeagSwipNav;
