import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMatchesTab } from "../app/reducers/appSlice";
import DatePicker from "./DatePicker";

const MatchesTabs = () => {
  const [openPicker, setOpenPicker] = useState(false);

  const dispatch = useDispatch();
  const { matchesTab } = useSelector((state) => state.app);

  const handleOpenDatePicker = (e) => {
    setOpenPicker(!openPicker);
    e.preventDefault();
  };

  return (
    <div className="tabs-list">
      {openPicker && (
        <>
          <a className="date-range-overlay" onClick={handleOpenDatePicker}></a>
          <DatePicker />
        </>
      )}

      <div className="scroll-list-contint">
        <button
          className={`tab-btn ${matchesTab === "all-matches" ? "active" : ""}`}
          onClick={() => dispatch(setMatchesTab("all-matches"))}
        >
          جميع المباريات
        </button>

        <button
          className={`tab-btn ${
            matchesTab === "betting-matches" ? "active" : ""
          }`}
          onClick={() => dispatch(setMatchesTab("betting-matches"))}
        >
          المراهنة
        </button>

        <button
          className={`tab-btn ${matchesTab === "live-matches" ? "active" : ""}`}
          onClick={() => dispatch(setMatchesTab("live-matches"))}
        >
          مباريات مباشرة
        </button>

        <button
          className={`tab-btn ${
            matchesTab === "ended-matches" ? "active" : ""
          }`}
          onClick={() => dispatch(setMatchesTab("ended-matches"))}
        >
          مباريات منتهية
        </button>

        <a className="filter-btn" href="#" onClick={handleOpenDatePicker}>
          <span className="filter-date flatpickr-input" readOnly="readonly">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z"></path>
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
};

export default MatchesTabs;
