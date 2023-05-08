import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import CompetitionCard from "../components/CompetitionCard";
import SwiperNav from "../components/SwiperNav";
import MatchesTabs from "../components/MatchesTabs";
import MatchCard from "../components/MatchCard";

import TopLeagues from "../components/TopLeagues";
import TopMatcheCard from "../components/TopMatcheCard";
import TopMatchHead from "../components/TopMatchHead";
import MatchesLeague from "../components/MatchesLeague";
import BetMatches from "../components/BetMatches";
import ChooseScorers from "../components/ChooseScorers";
import { useSelector } from "react-redux";
import { useGetCompetitionQuery } from "../app/server/competitionApi";
import { useGetGameQuery } from "../app/server/gameApi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const { openModal, matchesTab } = useSelector((state) => state.app);
  const { data: competition, error, isLoading } = useGetCompetitionQuery();
  const {
    data: teamsData,
    error: teamErr,
    isLoading: teamLoading,
    isSuccess,
  } = useGetGameQuery();

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
      <section className="section-style competitions-section">
        <div className="container">
          <div className="competitions-area">
            <div className="slider-container competitions-slider-container">
              <div className="competitions-slider">
                <div className="swiper-wrapper">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    modules={[Navigation]}
                    breakpoints={{
                      640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                      1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                      },
                    }}
                    className="mySwiper"
                  >
                    {isLoading ? (
                      <div>loading...</div>
                    ) : error ? (
                      <p>error ....</p>
                    ) : (
                      competition["hydra:member"].map((item, index) => (
                        <SwiperSlide key={index}>
                          <CompetitionCard item={item} />
                        </SwiperSlide>
                      ))
                    )}
                    <div className="flex-head swiper-head">
                      <div className="main-title">
                        <h1 className="title-text">جولة في المسابقات</h1>
                      </div>

                      <SwiperNav />
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-style matches-section">
        <div className="container">
          <div className="matches-area">
            <div className="row">
              <div className="col-lg-8 mb-5 mb-lg-0">
                <div className="flex-head">
                  <div className="main-title">
                    <h1 className="title-text">المباريات</h1>
                  </div>

                  <Link className="filter-btn more-btn" to="matches">
                    المزيد
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="download"
                      width="37.583"
                      height="18.333"
                      viewBox="0 0 37.583 18.333"
                    >
                      <g
                        id="Fill_920"
                        data-name="Fill 920"
                        transform="translate(0)"
                      >
                        <path
                          id="Fill_919"
                          data-name="Fill 919"
                          d="M29.754,0H17.227A1.549,1.549,0,0,0,15.66,1.527a1.549,1.549,0,0,0,1.567,1.527H29.754a1.548,1.548,0,0,0,1.565-1.527A1.548,1.548,0,0,0,29.754,0ZM6.264,0A1.548,1.548,0,0,0,4.7,1.527V13.12L2.674,11.134a1.6,1.6,0,0,0-2.214,0,1.508,1.508,0,0,0,0,2.169l4.7,4.582a1.6,1.6,0,0,0,2.214,0l4.7-4.582a1.511,1.511,0,0,0,0-2.169,1.6,1.6,0,0,0-2.214,0L7.831,13.12V1.527A1.549,1.549,0,0,0,6.264,0Zm23.49,7.636H17.227a1.528,1.528,0,1,0,0,3.056H29.754a1.528,1.528,0,1,0,0-3.056Zm6.264,7.638H17.227a1.528,1.528,0,1,0,0,3.054H36.018a1.527,1.527,0,1,0,0-3.054Z"
                          transform="translate(0)"
                        />
                      </g>
                    </svg>
                  </Link>
                </div>

                <div className="matches-tabs-area tabs-content-area">
                  <div className="scroll-list">
                    <MatchesTabs />
                  </div>

                  <div className="matches-boxes">
                    <div className="tab-content all-matches active">
                      <div className="box-wrap">
                        <div className="box-head">
                          <MatchesLeague />
                        </div>

                        <div className="box-body">
                          {teamLoading ? (
                            <p>loading...</p>
                          ) : teamErr ? (
                            <p>error...</p>
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

              <div className="col-lg-4">
                <div className="side-cols">
                  <div className="top-matches-area">
                    <div className="slider-container top-matches-container">
                      <div className="swiper top-matches-slider">
                        <div className="swiper-wrapper">
                          <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            modules={[Navigation]}
                            className="top-swiper"
                          >
                            <SwiperSlide>
                              <TopMatcheCard />
                            </SwiperSlide>
                            <SwiperSlide>
                              <TopMatcheCard />
                            </SwiperSlide>
                            <SwiperSlide>
                              <TopMatcheCard />
                            </SwiperSlide>
                            <SwiperSlide>
                              <TopMatcheCard />
                            </SwiperSlide>

                            <TopMatchHead />
                          </Swiper>
                        </div>
                      </div>
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

export default Home;
