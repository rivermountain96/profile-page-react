import React from "react";
import ProjectHeader from "../components/ProjectHeader";
import ProjectFooter from "../components/ProjectFooter";
import project_1_info from "../assets/img/project_1_info.png";

const NexonView = () => {
  return (
    <>
      <ProjectHeader />
      <section className="project_thumbnail black">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-6">
              <div className="text-center mb-5">
                <h3 className="h3">nexon</h3>
              </div>
            </div>
          </div>
          <div className="row gx-5">
            <div className="col-12">
              <img
                className="img-fluid rounded-3 mb-5"
                src={project_1_info}
                alt="nexon"
              />
            </div>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-12">
              <div className="mb-5 project_info">
                <p>프로젝트 구분 : 팀 프로젝트</p>
                <p>제작기간 : 2023.05.19 ~ 2023.07.06</p>
                <p>스택 : HTML5, CSS3, JAVASCRIPT</p>
                <p>
                  정보 : 기존 넥슨 홈페이지를 분석하여 리뉴얼한 1차
                  프로젝트입니다. 남녀노소 다양한 연령층이 웹 접근성에 구애받지
                  않고 즐거운 게임을 즐길 수 있도록, 추천게임 및 신규게임에 대한
                  홍보에 초점을 맞추어 리뉴얼 하였습니다. 기획, 디자인 과정에서
                  텍스트 위계와 레이아웃의 크기 조정을 통해 남녀노소 다양한
                  계층의 방문자가 한 눈에 깔끔한 UX/UI가 들어오도록 설계하였고,
                  구현시에는 라이브러리를 활용하지 않고 바닐라 스크립트를 통해
                  구현하였습니다. 팀원간의 Git, Slack 툴을 활용하여 컨벤션을
                  정해 충돌을 방지하였습니다. 기획자료와 Git, 홈페이지는 아래
                  링크를 통해 보실 수 있습니다.
                </p>
                <p>
                  담당페이지 : &nbsp;
                  <a
                    href="https://hazel305.github.io/nexon-renewal-webpage/"
                    target="_blank"
                    rel="noreferrer">
                    메인 홈페이지(추천게임, 신규게임)
                  </a>
                </p>
                <div className="link">
                  <a
                    href="https://hazel305.github.io/nexon-renewal-webpage/"
                    target="_blank"
                    rel="noreferrer">
                    site
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1Uub1xNuxzbA9VuidmXRFubMXJ3rNO5a-/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer">
                    기획자료
                  </a>
                  <a
                    href="https://github.com/rivermountain96/nexon-renewal-webpage"
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

export default NexonView;
