import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import nexon_pj from "../assets/img/nexon_pj.svg";
import samsung_pj from "../assets/img/samsung_pj.svg";
import keepcoding_LMS_pj from "../assets/img/keepcoding_LMS_pj.svg";
import keepcoding_pj from "../assets/img/keepcoding_pj.svg";

// Swiper 모듈 import
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";

// Swiper 모듈 초기화
SwiperCore.use([Navigation, Pagination]);

const Projects = () => {
  useEffect(() => {
    // Swiper 초기화
    const mySwiper = new Swiper(".swiper", {
      // Swiper 옵션 설정
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  return (
    <>
      <section className="Projects" id="projects">
        <div className="container">
          <h2 className="h2">Projects</h2>
          <div className="swiper">
            <ul className="swiper-wrapper">
              <li className="swiper-slide">
                <h3 className="project_name">Nexon</h3>
                <div className="project_info">
                  <h4>넥슨 리뉴얼</h4>
                  <p>프로젝트 구분 : 팀 프로젝트</p>
                  <p>제작기간 : 2023.05.19 ~ 2023.07.06</p>
                  <p>스택 : HTML5, CSS3, JAVASCRIPT</p>
                  <p>구현 페이지 : 메인 홈페이지</p>
                  <div className="link">
                    <a href="nexon.html">
                      read more
                      <span className="material-symbols-outlined">
                        arrow_right_alt
                      </span>
                    </a>
                  </div>
                </div>
                <img src={nexon_pj} alt="Nexon" />
              </li>
              <li className="swiper-slide">
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
                    <a href="samsung.html">
                      read more
                      <span className="material-symbols-outlined">
                        arrow_right_alt
                      </span>
                    </a>
                  </div>
                </div>
                <img src={samsung_pj} alt="Samsung_Display" />
              </li>
              <li className="swiper-slide">
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
                    <a href="keepcoding_admin.html">
                      read more
                      <span className="material-symbols-outlined">
                        arrow_right_alt
                      </span>
                    </a>
                  </div>
                </div>
                <img src={keepcoding_LMS_pj} alt="keepcoding_admin_page" />
              </li>
              <li className="swiper-slide">
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
                    <a href="keepcoding_user.html">
                      read more
                      <span className="material-symbols-outlined">
                        arrow_right_alt
                      </span>
                    </a>
                  </div>
                </div>
                <img src={keepcoding_pj} alt="Keepcoding_user_page" />
              </li>
            </ul>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
