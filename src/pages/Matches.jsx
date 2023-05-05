import MatchCard from "../components/MatchCard";
import TopLeagues from "../components/TopLeagues";
import MatchesLeague from "../components/MatchesLeague";
import MatchesTabs from "../components/MatchesTabs";
import LeagResultCard from "../components/LeagResultCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Matches = () => {
  return (
    <section className="section-style matches-section">
      <div className="container">
        <div className="matches-area">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="matches-tabs-area tabs-content-area">
                <div className="scroll-list">
                  <MatchesTabs />
                </div>

                <div className="matches-boxes">
                  <div className="tab-content all-matches active">
                    <div className="inside-tabs-area tabs-content-area">
                      <div className="scroll-list draggable-list">
                        <div className="tabs-list">
                          <a className="tab-btn active" href="#" data-target="">
                            اليوم
                          </a>
                          <a className="tab-btn" href="#" data-target="">
                            أبريل 16
                          </a>
                          <a className="tab-btn" href="#" data-target="">
                            أبريل 17
                          </a>
                          <a className="tab-btn" href="#" data-target="">
                            أبريل 19
                          </a>
                          <a className="tab-btn" href="#" data-target="">
                            أبريل 19
                          </a>
                          <a className="tab-btn" href="#" data-target="">
                            أبريل 20
                          </a>
                          <a className="tab-btn" href="#" data-target="">
                            أبريل 21
                          </a>
                          <a className="tab-btn" href="#" data-target="">
                            أبريل 17
                          </a>
                          <a className="tab-btn" href="#" data-target="">
                            أبريل 19
                          </a>
                          <a className="tab-btn" href="#" data-target="">
                            أبريل 19
                          </a>
                          <a className="tab-btn" href="#" data-target="">
                            أبريل 20
                          </a>
                          <a className="tab-btn" href="#" data-target="">
                            أبريل 21
                          </a>
                        </div>
                      </div>

                      <div className="box-wrap">
                        <div className="box-head">
                          <MatchesLeague />
                        </div>

                        <div className="box-body">
                          <MatchCard />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="side-cols">
                <div className="leagues-results-area">
                  <div className="slider-container leagues-results-container">
                    <div className="swiper leagues-results-slider">
                      <div className="swiper-wrapper">
                        <LeagResultCard />
                      </div>
                    </div>

                    <button className="slider-arrow prev-btn" type="button">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                    <button className="slider-arrow next-btn" type="button">
                      <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                  </div>
                </div>

                <div className="top-leagues-area">
                  <TopLeagues />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Matches;
