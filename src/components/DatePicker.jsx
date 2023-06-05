import { DateRange } from "react-date-range";
import { useDispatch, useSelector } from "react-redux";
import { setSelectionDateRange } from "../app/reducers/appSlice";

const DatePicker = () => {
  const dispatch = useDispatch();

  const { selectionDateRange } = useSelector((state) => state.app);

  const handleDateChange = (item) => {
    dispatch(
      setSelectionDateRange({
        start: item.selection.startDate.toJSON(),
        end: item.selection.endDate.toJSON(),
      })
    );
  };

  return (
    <div className="date-range-wrapper">
      <DateRange
        editableDateInputs={true}
        onChange={(item) => handleDateChange(item)}
        moveRangeOnFirstSelection={false}
        showDateDisplay={false}
        style={{
          direction: "ltr",
        }}
        ranges={[
          {
            startDate: new Date(selectionDateRange.start),
            endDate: new Date(selectionDateRange.end),
            key: "selection",
          },
        ]}
      />
    </div>
  );
};

export default DatePicker;
