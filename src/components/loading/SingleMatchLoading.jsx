import React from "react";

const SingleMatchLoading = () => {
  return (
    <section className="section-style single-match-section">
      <div className="container">
        <div className="single-match-area">
          <div className="single-match-box">
            <div className="box-head">
              <span className="bet-head-loading"></span>
              <span className="bet-head-loading"></span>
              <span className="bet-head-loading"></span>
            </div>

            <div className="box-body">
              <div className="item-middle">
                <div className="team-info">
                  <div className="team-img-loading"></div>

                  <span className="team-name-loading"></span>
                </div>

                <div className="item-result">
                  
                </div>

                <div className="team-info">
                  <div className="team-img-loading"></div>

                  <span className="team-name-loading"></span>
                </div>
              </div>

              <div className="bet-wrap">
                <div className="bet-col">
                  <span className="bet-info-loading"></span>
                  <span className="bet-info-loading"></span>
                  <span className="bet-info-loading"></span>
                </div>

                <div className="bet-info">
                  <p className="info-title">الترتيب</p>
                  <p className="info-title">نسبة الفوز</p>
                  <p className="info-title">تاريخ المواجاهات</p>
                </div>

                <div className="bet-col">
                  <span className="bet-info-loading"></span>
                  <span className="bet-info-loading"></span>
                  <span className="bet-info-loading"></span>
                </div>
              </div>
            </div>

            <div className="box-footer">
              <span className="footer-loading"></span>

              <span className="footer-loading"></span>

              <span className="footer-loading"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleMatchLoading;
