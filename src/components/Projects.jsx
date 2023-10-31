import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

// import nexon_pj from "../assets/img/nexon_pj.svg";
// import samsung_pj from "../assets/img/samsung_pj.svg";
// import keepcoding_LMS_pj from "../assets/img/keepcoding_LMS_pj.svg";
// import keepcoding_pj from "../assets/img/keepcoding_pj.svg";

const Projects = () => {
  return (
    <>
      <section className="Projects" id="projects">
        <div className="container">
          <h2 className="h2">Projects</h2>
          <Swiper
            className="swiper"
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
              pauseOnMouseLeave: true,
            }}
            slidesPerView={1}
            spaceBetween={10}
            navigation
            pagination={{ clickable: true }}
            loop={true}>
            <SwiperSlide>
              <div className="swiper-slide">
                <h3 className="project_name">Nexon</h3>
                <div className="project_info">
                  <h4>넥슨 리뉴얼</h4>
                  <p>프로젝트 구분 : 팀 프로젝트</p>
                  <p>제작기간 : 2023.05.19 ~ 2023.07.06</p>
                  <p>스택 : HTML5, CSS3, JAVASCRIPT</p>
                  <p>구현 페이지 : 메인 홈페이지</p>
                  <div className="link">
                    <Link to="/nexon">
                      read more
                      <span className="material-symbols-outlined">
                        arrow_right_alt
                      </span>
                    </Link>
                  </div>
                </div>
                <img src="/img/nexon_pj.svg" alt="Nexon" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <h3 className="project_name">Samsung Display</h3>
                <div className="project_info">
                  <h4>삼성 디스플레이 리뉴얼</h4>
                  <p>프로젝트 구분 : 팀 프로젝트</p>
                  <p>제작기간 : 2023.07.10 - 2023.08.10</p>
                  <p>
                    스택 : HTML5, CSS3, JQuery (Flex, Bootstrap, JQuery Library)
                  </p>
                  <p>구현페이지 : 메인 홈페이지, COMPANY, TECHNOLOGY, ESG</p>
                  <div className="link">
                    <Link to="/samsung">
                      read more
                      <span className="material-symbols-outlined">
                        arrow_right_alt
                      </span>
                    </Link>
                  </div>
                </div>
                <img src="/img/samsung_pj.svg" alt="Samsung_Display" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <h3 className="project_name">Keepcoding</h3>
                <div className="project_info">
                  <h4>LMS 학습사이트 관리자페이지</h4>
                  <p>프로젝트 구분 : 팀 프로젝트</p>
                  <p>제작기간 : 2023.08.11 - 2023.09.08</p>
                  <p>
                    스택 : HTML5, CSS3, JQuery (Flex, Bootstrap, JQuery Library)
                  </p>
                  <p>Local: Windows, XAMPP(PHP, APACHE, MYSQL)</p>
                  <p>Remote : PHP, LINUX, MYSQL</p>
                  <p>
                    구현페이지 : 메인 홈페이지, 관리자 로그인, 대시보드,
                    카테고리, 강좌관리, 쿠폰관리
                  </p>
                  <div className="link">
                    <Link to="/keepcoding_admin">
                      read more
                      <span className="material-symbols-outlined">
                        arrow_right_alt
                      </span>
                    </Link>
                  </div>
                </div>
                <img
                  src="/img/keepcoding_LMS_pj.svg"
                  alt="keepcoding_admin_page"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <h3 className="project_name">Keepcoding</h3>
                <div className="project_info">
                  <h4>이러닝 사이트 유저페이지</h4>
                  <p>프로젝트 구분 : 팀 프로젝트</p>
                  <p>제작기간 : 2023.09.09 - 2023.09.25</p>
                  <p>
                    스택 : HTML5, CSS3, JQuery (Flex, Bootstrap, JQuery Library)
                  </p>
                  <p>Local: Windows, XAMPP(PHP, APACHE, MYSQL)</p>
                  <p>Remote : PHP, LINUX, MYSQL</p>
                  <p>
                    구현페이지 : 메인 홈페이지, 유저 로그인, 회원가입, 강의탐색,
                    숏강의, 커뮤니티, 장바구니, 마이페이지
                  </p>
                  <div className="link">
                    <Link to="/keepcoding_user">
                      read more
                      <span className="material-symbols-outlined">
                        arrow_right_alt
                      </span>
                    </Link>
                  </div>
                </div>
                <img src="/img/keepcoding_pj.svg" alt="Keepcoding_user_page" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Projects;
