import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useSwiper } from "swiper/react";

const TopMatchHead = () => {
  const swiper = useSwiper();
  
  return (
    <div className="top-matches-head swiper-head">
      <button
        className="slider-arrow prev-btn"
        type="button"
        title="Prev"
        aria-label="Prev"
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>

      <h1 className="head-title">
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
          <path d="M256,192c-35.4,0-64,28.6-64,64c0,35.4,28.6,64,64,64c35.4,0,64-28.6,64-64C320,220.6,291.4,192,256,192z M256,149.3  c23.5,0,42.7-19.1,42.7-42.7v-64C298.7,19.1,279.5,0,256,0c-23.5,0-42.7,19.1-42.7,42.7v64C213.3,130.2,232.5,149.3,256,149.3z   M256,362.7c-23.5,0-42.7,19.1-42.7,42.7v64c0,23.5,19.1,42.7,42.7,42.7c23.5,0,42.7-19.1,42.7-42.7v-64  C298.7,381.8,279.5,362.7,256,362.7z M469.3,213.3h-64c-23.5,0-42.7,19.1-42.7,42.7c0,23.5,19.1,42.7,42.7,42.7h64  c23.5,0,42.7-19.1,42.7-42.7C512,232.5,492.9,213.3,469.3,213.3z M149.3,256c0-23.5-19.1-42.7-42.7-42.7h-64  C19.1,213.3,0,232.5,0,256c0,23.5,19.1,42.7,42.7,42.7h64C130.2,298.7,149.3,279.5,149.3,256z M391.8,331.4  c-16.7-16.6-43.7-16.6-60.4,0c-16.6,16.7-16.6,43.7,0,60.4l45.3,45.3c16.6,16.6,43.7,16.6,60.3,0c16.6-16.7,16.6-43.7,0-60.3  L391.8,331.4z M120.2,180.6c16.7,16.6,43.7,16.6,60.4,0c16.6-16.7,16.6-43.7,0-60.4L135.3,75C118.7,58.3,91.6,58.3,75,75  c-16.6,16.7-16.6,43.7,0,60.3L120.2,180.6z M391.8,180.6l45.3-45.3c16.6-16.6,16.6-43.7,0-60.3c-16.7-16.6-43.7-16.6-60.3,0  l-45.3,45.3c-16.6,16.7-16.6,43.7,0,60.4C348.1,197.2,375.1,197.2,391.8,180.6z M120.2,331.4L75,376.7c-16.6,16.6-16.6,43.7,0,60.3  c16.7,16.6,43.7,16.6,60.3,0l45.3-45.3c16.6-16.7,16.6-43.7,0-60.4C163.9,314.8,136.9,314.8,120.2,331.4z" />
        </svg>
        المباريات الشائعة
      </h1>

      <button
        className="slider-arrow next-btn"
        type="button"
        title="Next"
        aria-label="Next"
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    </div>
  );
};

export default TopMatchHead;
