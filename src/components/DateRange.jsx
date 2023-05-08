
const DateRange = () => {

  const today = new Date();
  const lastMonth = new Date(
    today.getFullYear(),
    today.getMonth() - 1,
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
    const options = { day: '2-digit', month: 'long' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return (
      <a className="tab-btn" href="#" key={date.toISOString()}>
        {formattedDate}
      </a>
    );
  });

  return <div className="tabs-list">{dateList}</div>;
};

export default DateRange;