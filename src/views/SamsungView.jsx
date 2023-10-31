import React from "react";
import ProjectHeader from "../components/ProjectHeader";
import ProjectFooter from "../components/ProjectFooter";
import project_2_info from "../assets/img/project_2_info.png";

const Samsung = () => {
  return (
    <>
      <ProjectHeader />
      <section className="project_thumbnail black">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-6">
              <div className="text-center mb-5">
                <h3 className="h3">samsung display</h3>
              </div>
            </div>
          </div>
          <div className="row gx-5">
            <div className="col-12">
              <img
                className="img-fluid rounded-3 mb-5"
                src={project_2_info}
                alt="samsung display"
              />
            </div>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-12">
              <div class="mb-5 project_info">
                <p>프로젝트 구분 : 팀 프로젝트</p>
                <p>제작기간 : 2023.05.19 ~ 2023.07.06</p>
                <p>
                  스택 : HTML5, CSS3, JQuery (Flex, Bootstrap, JQuery Library)
                </p>
                <p>
                  정보 : 기존 삼성디스플레이 홈페이지를 분석하여 리뉴얼한 2차
                  프로젝트입니다. 삼성디스플레이 제품과 혁신적인 기술에 대한
                  홍보 효과를 적극적으로 할 수 있도록 트렌디하고 동적인 효과에
                  초점을 맞추어 리뉴얼 하였습니다. 기획 단계에서 기존
                  삼성디스플레이 홈페이지를 분석하고 경쟁사 벤치마킹을 통해
                  스케치, 스토리보드를 작성하고 Figam를 통해 디자인을
                  하였습니다. 다양한 라이브러리를 활용하였고 PC, Tablet, Mobile
                  버전의 반응형 구현을 통해 이용자가 다양한 환경에서 이용 할 수
                  있도록 구현하였습니다. 팀원간의 Git, Slack 툴을 활용하여
                  컨벤션을 정해 충돌을 방지하였습니다. 기획자료와 Git,
                  홈페이지는 아래 링크를 통해 보실 수 있습니다.
                </p>
                <p>
                  담당페이지 : &nbsp;
                  <a
                    href="https://rivermountain96.github.io/last_child/"
                    target="_blank"
                    rel="noreferrer">
                    메인 홈페이지(Header, Video Section)
                  </a>{" "}
                  |&nbsp;
                  <a
                    href="https://rivermountain96.github.io/last_child/co_culture.html"
                    target="_blank"
                    rel="noreferrer">
                    Company(기업 문화)
                  </a>{" "}
                  |&nbsp;
                  <a
                    href="https://rivermountain96.github.io/last_child/OLED.html"
                    target="_blank"
                    rel="noreferrer">
                    Technology - OLED
                  </a>
                </p>
                <div class="link">
                  <a
                    href="https://rivermountain96.github.io/last_child/"
                    target="_blank"
                    rel="noreferrer">
                    site
                  </a>
                  <a
                    href="https://www.figma.com/proto/gpAOxJw5NKCk6JftONd7Ye/이강산_Project?page-id=0%3A1&type=design&node-id=101-3725&viewport=1460%2C1459%2C0.08&t=Cz8Gm6PfjGQA6tUS-1&scaling=min-zoom&mode=design"
                    target="_blank"
                    rel="noreferrer">
                    기획자료
                  </a>
                  <a
                    href="https://github.com/rivermountain96/last_child"
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

export default Samsung;
