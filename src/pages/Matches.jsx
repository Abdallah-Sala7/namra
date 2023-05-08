import MatchCard from "../components/MatchCard";
import TopLeagues from "../components/TopLeagues";
import MatchesLeague from "../components/MatchesLeague";
import MatchesTabs from "../components/MatchesTabs";
import LeagResultCard from "../components/LeagResultCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import LeagSwipNav from "../components/LeagSwipNav";
import { useGetGameQuery } from "../app/server/gameApi";
import { useSelector } from "react-redux";
import BetMatches from "../components/BetMatches";
import ChooseScorers from "../components/ChooseScorers";
import { useEffect, useState } from "react";
import DateRange from "../components/DateRange";

const Matches = () => {
  const { openModal, matchesTab } = useSelector((state) => state.app);
  const { data: teamsData, isLoading, isError, isSuccess } = useGetGameQuery();

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      const filterData = teamsData["hydra:member"].filter((item) =>
        matchesTab === "all-matches" ? item : item.predict === true
      );
      setMatches(filterData);
    }
  }, [matchesTab, teamsData]);

  return (
    <>
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
                          <DateRange />
                        </div>

                        <div className="box-wrap">
                          <div className="box-head">
                            <MatchesLeague />
                          </div>

                          <div className="box-body">
                            {isError ? (
                              <div>error .....</div>
                            ) : isLoading ? (
                              <div>loading ....</div>
                            ) : (
                              matches.map((item, index) => (
                                <MatchCard key={index} item={item} />
                              ))
                            )}
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
                      <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        modules={[Navigation]}
                        className="leag-swiper"
                      >
                        <SwiperSlide>
                          <LeagResultCard />
                        </SwiperSlide>

                        <SwiperSlide>
                          <LeagResultCard />
                        </SwiperSlide>

                        <SwiperSlide>
                          <LeagResultCard />
                        </SwiperSlide>

                        <LeagSwipNav />
                      </Swiper>
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

      {openModal && (
        <section className="bet">
          {openModal === "betModel" ? <BetMatches /> : <ChooseScorers />}
        </section>
      )}
    </>
  );
};

export default Matches;
