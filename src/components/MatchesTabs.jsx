import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMatchesTab } from "../app/reducers/appSlice";

const MatchesTabs = () => {
  const dispatch = useDispatch();
  const { matchesTab } = useSelector((state) => state.app);
  return (
    <div className="tabs-list">
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
        className={`tab-btn ${matchesTab === "ended-matches" ? "active" : ""}`}
        onClick={() => dispatch(setMatchesTab("ended-matches"))}
      >
        مباريات منتهية
      </button>
    </div>
  );
};

export default MatchesTabs;
