import React from "react";

const MatchesTabs = () => {
  return (
    <div className="tabs-list">
      <a className="tab-btn active" href="#" data-target="all-matches">
        جميع المباريات
      </a>
      <a className="tab-btn" href="#" data-target="live-matches">
        المباشر
      </a>
      <a className="tab-btn" href="#" data-target="betting-matches">
        المراهنة
      </a>
      <a className="filter-btn" href="#">
        <span className="filter-date">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z"></path>
          </svg>
        </span>
      </a>
    </div>
  );
};

export default MatchesTabs;
