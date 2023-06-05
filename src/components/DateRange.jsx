import { useDispatch, useSelector } from "react-redux";
import { setDaysTab } from "../app/reducers/appSlice";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const DateRange = () => {
  const dispatch = useDispatch();
  const { daysTab } = useSelector((state) => state.app);

  const handleDaysTab = (e, date) => {
    dispatch(setDaysTab(date.toISOString().slice(0, 10)));
    e.preventDefault();
  };

  const today = new Date();
  const nextMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate()
  );

  const getDates = (startDate, endDate) => {
    const datesArray = [];
    let currentDate = startDate;
    while (currentDate <= endDate) {
      datesArray.push(currentDate);
      currentDate = new Date(currentDate.getTime() + 86400000); // 24 hours in milliseconds
    }
    return datesArray;
  };

  const dateList = getDates(today, nextMonth).map((date) => {
    const options = { day: "2-digit", month: "long" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return (
      <SwiperSlide
        key={date.toISOString()}
        style={{
          flexShrink: 1,
        }}
      >
        <a
          className={`tab-btn ${
            daysTab === date.toISOString().slice(0, 10) ? "active" : ""
          }`}
          onClick={(e) => handleDaysTab(e, date)}
          href="#"
        >
          {formattedDate}
        </a>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      className="dateSwiper tabs-list"
      slidesPerView={"auto"}
      spaceBetween={0}
      freeMode={true}
    >
      {dateList}
    </Swiper>
  );
};

export default DateRange;
