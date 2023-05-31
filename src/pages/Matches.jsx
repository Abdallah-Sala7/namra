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
import MatchCardLoading from "../components/loading/MatchCardLoading";
import { useGetGameByDateQuery } from "../app/server/searchGameApi";

const Matches = () => {
  const [allMatchesLeag, setAllMatchesLeag] = useState([]);
  const [matches, setMatches] = useState([]);

  const { openModal, matchesTab } = useSelector((state) => state.app);
  const { data: teamsData, isSuccess: teamSuccess } = useGetGameQuery();

  // const today = new Date().toISOString().slice(0, 10);
  // const {data, error} = useGetGameByDateQuery("2023-01-09");

  useEffect(() => {
    const updatedAllMatchesLeag = [];

    matches.forEach((item) => {
      const index = updatedAllMatchesLeag.findIndex(
        (league) => league.league.id === item.league.id
      );
      if (index === -1) {
        updatedAllMatchesLeag.push({
          league: item.league,
          matches: [item],
        });
      } else {
        updatedAllMatchesLeag[index].matches.push(item);
      }
    });

    setAllMatchesLeag(updatedAllMatchesLeag);
  }, [matches]);

  useEffect(() => {
    if (teamSuccess) {
      const filterData = teamsData["hydra:member"].filter((item) =>
        matchesTab === "betting-matches"
          ? item.predict === true
          : matchesTab === "live-matches"
          ? item.predict === true
          : matchesTab === "ended-matches"
          ? item.status === "FT"
          : item
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

                        {!teamSuccess ? (
                          <>
                            <MatchCardLoading />
                            <MatchCardLoading />
                            <MatchCardLoading />
                            <MatchCardLoading />
                          </>
                        ) : (
                          allMatchesLeag.map((item, index) => (
                            <div className="box-wrap" key={index}>
                              <div className="box-head">
                                <MatchesLeague
                                  leagIcon={item.league.logo}
                                  leagName={item.league.name}
                                />
                              </div>

                              <div className="box-body">
                                {item.matches.map((match, index) => (
                                  <MatchCard key={index} item={match} />
                                ))}
                              </div>
                            </div>
                          ))
                        )}
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
