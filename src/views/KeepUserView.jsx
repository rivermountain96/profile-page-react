import React from "react";
import ProjectHeader from "../components/ProjectHeader";
import ProjectFooter from "../components/ProjectFooter";
import project_4_info from "../assets/img/project_4_info.png";

const KeepUser = () => {
  return (
    <>
      <ProjectHeader />
      <section class="project_thumbnail black">
        <div class="container px-5">
          <div class="row gx-5 justify-content-center">
            <div class="col-lg-6">
              <div class="text-center mb-5">
                <h3 class="h3">Keepcoding(user)</h3>
              </div>
            </div>
          </div>
          <div class="row gx-5">
            <div class="col-12">
              <img
                class="img-fluid rounded-3 mb-5"
                src={project_4_info}
                alt="samsung display"
              />
            </div>
          </div>
          <div class="row gx-5 justify-content-center">
            <div class="col-lg-12">
              <div class="mb-5 project_info">
                <p>프로젝트 구분 : 팀 프로젝트</p>
                <p>제작기간 : 2023.09.09 ~ 2023.09.25</p>
                <p>
                  스택 : HTML5, CSS3, JQuery (Flex, Bootstrap, JQuery Library)
                </p>
                <p>Local: Windows, XAMPP(PHP, APACHE, MYSQL)</p>
                <p>Remote : PHP, LINUX, MYSQL</p>
                <p>
                  정보 : 3차 프로젝트(관리자 페이지)에 이어 KeepCoding 이라는
                  브랜드의 이러닝 사이트를 직접 기획부터 디자인, 구현까지 진행한
                  4차 프로젝트입니다. 코딩 강의를 판매하는 온라인 학습사이트를
                  구현하며 신규 이용자들이 많이 유입될 수있도록 "숏강의"라는
                  주력 상품이 있는 것이 특징인 사이트입니다. Bootstrap,
                  jQuery.Ui등의 라이브러리를 활용하였습니다. PHP언어를 통해
                  강좌에 등록한 것 내용들이 MySQL 내 데이터베이스에 입력되게끔
                  구현하였습니다. 팀원간의 Git, Slack 툴을 활용하여 컨벤션을
                  정해 충돌을 방지하였습니다. 기획자료와 Git, 홈페이지는 아래
                  링크를 통해 보실 수 있습니다
                </p>
                <p>
                  담당페이지 :
                  <a
                    href="http://keepcoding.dothome.co.kr/keepcoding/main/index.php"
                    target="_blank"
                    rel="noreferrer">
                    메인 홈페이지(검색, 기초강의)
                  </a>{" "}
                  |&nbsp;
                  <a
                    href="http://keepcoding.dothome.co.kr/keepcoding/main/login.php"
                    target="_blank"
                    rel="noreferrer">
                    로그인
                  </a>{" "}
                  |&nbsp;
                  <a
                    href="http://keepcoding.dothome.co.kr/keepcoding/main/members/signup.php"
                    target="_blank"
                    rel="noreferrer">
                    회원가입
                  </a>{" "}
                  |&nbsp;
                  <a
                    href="http://keepcoding.dothome.co.kr/keepcoding/main/login.php"
                    target="_blank"
                    rel="noreferrer">
                    마이페이지(로그인 후 이용가능)
                  </a>
                </p>
                <div class="link">
                  <a
                    href="http://keepcoding.dothome.co.kr/keepcoding/main/index.php"
                    target="_blank"
                    rel="noreferrer">
                    site
                  </a>
                  <a
                    href="https://www.figma.com/proto/8ofClkapVFWdg1LHXgzBId/4%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-PPT?page-id=0%3A1&type=design&node-id=0-1&viewport=717%2C607%2C0.04&t=odg6VeXBg85RWfWm-1&scaling=min-zoom&starting-point-node-id=1%3A8017&mode=design"
                    target="_blank"
                    rel="noreferrer">
                    기획자료
                  </a>
                  <a
                    href="https://github.com/rivermountain96/keepcoding"
                    target="_blank"
                    rel="noreferrer">
                    git
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProjectFooter />
    </>
  );
};

export default KeepUser;
