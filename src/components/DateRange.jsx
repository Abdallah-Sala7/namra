import { useDispatch, useSelector } from "react-redux";
import { setDaysTab } from "../app/reducers/appSlice";

const DateRange = () => {
  const dispatch = useDispatch();
  const { daysTab } = useSelector((state) => state.app);

  const handleDaysTab = (e, date) => {
    dispatch(setDaysTab(date.getDate()));
    e.preventDefault();
  };

  const today = new Date();
  const lastMonth = new Date(
    today.getFullYear(),
    today.getMonth(),
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

  const dateList = getDates(lastMonth, today).map((date) => {
    const options = { day: "2-digit", month: "long" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return (
      <a
        className={`tab-btn ${daysTab === date.getDate() ? "active" : ""}`}
        onClick={(e) => handleDaysTab(e, date)}
        href="#"
        key={date.toISOString()}
      >
        {formattedDate}
      </a>
    );
  });

  return <div className="tabs-list">{dateList}</div>;
};

export default DateRange;
