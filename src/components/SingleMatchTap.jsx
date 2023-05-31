import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSingleMatchTab } from "../app/reducers/appSlice";

const SingleMatchTap = () => {
  const dispatch = useDispatch();
  const { singleMatchTab } = useSelector((state) => state.app);

  const handleTab = (e, tabName) => {
    e.preventDefault();
    dispatch(setSingleMatchTab(tabName));
  };

  return (
    <div className="matches-tabs-area">
      <div className="scroll-list">
        <div className="tabs-list">
          <a
            className={`tab-btn ${singleMatchTab === "bet-tab" ? "active" : ""}`}
            href="#"
            onClick={(e) => handleTab(e, "bet-tab")}
            data-target="bet-tab"
          >
            الرهان
          </a>

          <a
            className={`tab-btn ${
              singleMatchTab === "summary-tab" ? "active" : ""
            }`}
            href="#"
            onClick={(e) => handleTab(e, "summary-tab")}
            data-target="summary-tab"
          >
            الملخص
          </a>

          <a
            className={`
              tab-btn ${singleMatchTab === "statistics-tab" ? "active" : ""}`}
            href="#"
            onClick={(e) => handleTab(e, "statistics-tab")}
            data-target="statistics-tab"
          >
            الإحصائيات
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleMatchTap;
