import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSwiper } from "swiper/react";

const SwiperNav = () => {
  const swiper = useSwiper();

  return (
    <div className="slider-arrows slider-arrows-s2">
      <button 
        className={`slider-arrow prev-btn`}
        onClick={() => swiper.slidePrev()}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>

      <button 
        className={`slider-arrow next-btn`}
        onClick={() => swiper.slideNext()}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
    </div>
  )
}

export default SwiperNav