import React from "react";
import ProjectHeader from "../components/ProjectHeader";
import ProjectFooter from "../components/ProjectFooter";
import project_3_info from "../assets/img/project_3_info.png";

const KeepAdmin = () => {
  return (
    <>
      <ProjectHeader />
      <section class="project_thumbnail black">
        <div class="container px-5">
          <div class="row gx-5 justify-content-center">
            <div class="col-lg-6">
              <div class="text-center mb-5">
                <h3 class="h3">Keepcoding(admin)</h3>
              </div>
            </div>
          </div>
          <div class="row gx-5">
            <div class="col-12">
              <img
                class="img-fluid rounded-3 mb-5"
                src={project_3_info}
                alt="samsung display"
              />
            </div>
          </div>
          <div class="row gx-5 justify-content-center">
            <div class="col-lg-12">
              <div class="mb-5 project_info">
                <p>프로젝트 구분 : 팀 프로젝트</p>
                <p>제작기간 : 2023.08.10 ~ 2023.09.08</p>
                <p>
                  스택 : HTML5, CSS3, JQuery (Flex, Bootstrap, JQuery Library)
                </p>
                <p>Local: Windows, XAMPP(PHP, APACHE, MYSQL)</p>
                <p>Remote : PHP, LINUX, MYSQL</p>
                <p>
                  정보 : KeepCoding 이라는 브랜드의 LMS 학습사이트를 직접
                  기획부터 디자인, 구현까지 진행한 3차 프로젝트입니다. 관리자
                  입장에서 총 매출, 판매 강좌, 직전달 대비 수익율, 완강률,
                  수강생 만족도 등을 쉽게 관리할 수 있도록 적절한 레이아웃과
                  차트를 활용하여 구성하였습니다. 관리자 페이지인만큼 관리자
                  계정으로 로그인하여야 들어갈 수 있으며 Bootstrap,
                  jQuery.Ui등의 라이브러리를 활용하였습니다. PHP언어를 통해
                  강좌에 등록한 것 내용들이 MySQL 내 데이터베이스에 입력되게끔
                  구현하였습니다. 팀원간의 Git, Slack 툴을 활용하여 컨벤션을
                  정해 충돌을 방지하였습니다. 기획자료와 Git, 홈페이지는 아래
                  링크를 통해 보실 수 있습니다.
                </p>
                <p>
                  담당페이지 :
                  <a
                    href="http://keepcoding.dothome.co.kr/keepcoding/admin/login.php"
                    target="_blank"
                    rel="noreferrer">
                    강좌 리스트
                  </a>{" "}
                  |&nbsp;
                  <a
                    href="http://keepcoding.dothome.co.kr/keepcoding/admin/product/product_up.php"
                    target="_blank"
                    rel="noreferrer">
                    강좌 등록
                  </a>{" "}
                  |&nbsp;
                  <a
                    href="http://keepcoding.dothome.co.kr/keepcoding/admin/qna/qna_list.php"
                    target="_blank"
                    rel="noreferrer">
                    Q&A 게시판
                  </a>
                </p>
                <div class="link">
                  <a
                    href="http://keepcoding.dothome.co.kr/keepcoding/admin/login.php"
                    target="_blank"
                    rel="noreferrer">
                    site
                  </a>
                  <a
                    href="https://www.figma.com/proto/DiAUEI8K7SlK6J047H5I0o/3%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-PPT?page-id=0%3A1&type=design&node-id=1-6640&viewport=704%2C471%2C0.03&t=Y69ZTPWbgpnw2qOO-1&scaling=min-zoom&mode=design"
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

export default KeepAdmin;
