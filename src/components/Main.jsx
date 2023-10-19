import React, { useEffect } from "react";
import htmlLogo from "../assets/img/html_logo.svg";
import cssLogo from "../assets/img/css_logo.svg";
import javascriptLogo from "../assets/img/Javascript.svg";
import jqueryLogo from "../assets/img/jQuery.svg";
import reactLogo from "../assets/img/React.svg";
import phpLogo from "../assets/img/PHP.svg";
import nodejsLogo from "../assets/img/node.js.svg";
import laravelLogo from "../assets/img/laravel.svg";
import mysqlLogo from "../assets/img/MySQL.svg";
import bootstrapLogo from "../assets/img/Bootstrap.svg";
import hwpLogo from "../assets/img/HWP.svg";
import excelLogo from "../assets/img/Excel.svg";
import powerPointLogo from "../assets/img/PowerPoint.svg";
import figmaLogo from "../assets/img/figma.svg";
import photoshopLogo from "../assets/img/Photoshop.svg";
import $ from "jquery"; // jQuery 사용
import Waypoint from "waypoints";

const Main = () => {
  useEffect(() => {
    // About_info_1 요소에 대한 Waypoint 초기화
    new Waypoint({
      element: document.querySelector(".About_info_1"),
      handler: function (direction) {
        if (direction === "down") {
          // 사용자가 아래로 스크롤했을 때, About_info_1 요소에 대한 CSS를 적용합니다
          $(".About_info_1").css({
            transform: "translateX(0%)",
            opacity: 1,
          });
        } else {
          // 사용자가 위로 스크롤했을 때, About_info_1 요소를 숨기기 위한 CSS를 적용합니다
          $(".About_info_1").css({
            transform: "translateX(100%)",
            opacity: 0,
          });
        }
      },
      offset: "100%", // 요소가 뷰포트 내에서 100%에 도달했을 때 트리거
    });

    // myImg3 요소에 대한 Waypoint 초기화
    new Waypoint({
      element: document.querySelector(".myImg3"),
      handler: function (direction) {
        if (direction === "down") {
          // 사용자가 아래로 스크롤했을 때, myImg3 요소에 대한 CSS를 적용합니다
          $(".myImg3").css({
            transform: "translateX(0%)",
            opacity: 1,
          });
        } else {
          // 사용자가 위로 스크롤했을 때, myImg3 요소를 숨기기 위한 CSS를 적용합니다
          $(".myImg3").css({
            transform: "translateX(100%)",
            opacity: 0,
          });
        }
      },
      offset: "100%", // 요소가 뷰포트 내에서 100%에 도달했을 때 트리거
    });
  }, []);

  return (
    <>
      <section className="About" id="about">
        <div className="container d-flex justify-content-around">
          <div className="About_info_1">profile_img1</div>
          <div className="About_info_2">
            <h2 className="h2">About Me</h2>
            <div className="h4_info">
              <h4>교류하고 배우는 즐거움을 아는 개발자</h4>
              <h4>이강산입니다.</h4>
            </div>
            <div className="p_info">
              <p>시작은 미약할지 몰라도 끝은 창대하게,</p>
              <p>포기하지 않는 태도와 끝없는 열정으로,</p>
              <p>매사에 감사하며 늘 긍정적인 자세로,</p>
              <p>항상 최선을 다하며 노력하는 사람이 되겠습니다.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="Adventage">
        <div className="container myadvantage">
          <div className="Adventage_myadvantage">
            <h3 className="myImg_h3">내가 바라본 나만의 장점</h3>
            <div className="myImg row">
              <div className="myImg1 col-md-4">
                <div className="myImg_info2">장점1</div>
                <h5>사랑받기전에 먼저 사랑을 줄수 있는 사람</h5>
                <p>
                  사람들과 소통하고 교류하는 것을 좋아하며 개인보다는 팀, 혹은
                  단체의 목표를 우선시합니다.
                </p>
              </div>
              <div className="myImg2 col-md-4">
                <div className="myImg_info3">장점2</div>
                <h5>발표 및 진행 경력 다수 보유</h5>
                <p>
                  다수의 사람 앞에서 행사를 진행하거나 주어진 정보를 전달하는
                  발표 능력이 우수합니다.
                </p>
              </div>
              <div className="myImg3 col-md-4">
                <div className="myImg_info4">장점3</div>
                <h5>긍정적인 태도가 가진 힘을 아는 사람</h5>
                <p>
                  해야할 일이라면 부정적인 태도보다는 늘 웃으며 즐겁게해야
                  능률이 오른다는 마음가짐을 가지고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Mainhistory">
        <div className="container">
          <div className="history row">
            <div className="history_title">
              <h3>자격증</h3>
              <h3>&amp;</h3>
              <h3>주요이력</h3>
            </div>
            <div className="history_content">
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <th scope="row">2023.11</th>
                    <td>KDT 프론트엔드 SW개발자 양성 과정 수료</td>
                  </tr>
                  <tr>
                    <th scope="row">2023.04</th>
                    <td>웹구조 언어 & 웹스타일링 언어 기초 과정 수료</td>
                  </tr>
                  <tr>
                    <th scope="row">2022.01</th>
                    <td>컴퓨터 활용능력 2급</td>
                  </tr>
                  <tr>
                    <th scope="row">2021.12</th>
                    <td>사회복지사 1급</td>
                  </tr>
                  <tr>
                    <th scope="row">2016.09</th>
                    <td>운전면허증 1종 보통</td>
                  </tr>
                  <tr>
                    <th scope="row">2009.01</th>
                    <td>ITQ 한글(정보기술자격) A등급</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="Skills" id="skills">
        <div className="container">
          <h2 className="h2">Skills</h2>
          <div className="skill_img d-flex justify-content-around align-items-center">
            <div className="skill_HTML">
              <h3 className="skills_h3">HTML</h3>
              <img src={htmlLogo} alt="HTML" />
              <p>90&#37;</p>
            </div>
            <div className="skill_CSS">
              <h3 className="skills_h3">CSS</h3>
              <img src={cssLogo} alt="CSS" />
              <p>80&#37;</p>
            </div>
            <div className="skill_Javascript">
              <h3 className="skills_h3">Javascript</h3>
              <img src={javascriptLogo} alt="Javascript" />
              <p>70&#37;</p>
            </div>
            <div className="skill_jQuery">
              <h3 className="skills_h3">jQuery</h3>
              <img src={jqueryLogo} alt="jQuery" />
              <p>80&#37;</p>
            </div>
            <div className="skill_React">
              <h3 className="skills_h3">React</h3>
              <img src={reactLogo} alt="React" />
              <p>70&#37;</p>
            </div>
          </div>
          <div className="skill_img d-flex justify-content-around align-items-center">
            <div className="skill_PHP">
              <h3 className="skills_h3">PHP</h3>
              <img src={phpLogo} alt="PHP" />
              <p>70&#37;</p>
            </div>
            <div className="skill_Nodejs">
              <h3 className="skills_h3">Node.js</h3>
              <img src={nodejsLogo} alt="Node.js" />
              <p>60&#37;</p>
            </div>
            <div className="skill_Laravel">
              <h3 className="skills_h3">Laravel</h3>
              <img src={laravelLogo} alt="Laravel" />
              <p>50&#37;</p>
            </div>
            <div className="skill_MySQL">
              <h3 className="skills_h3">MySQL</h3>
              <img src={mysqlLogo} alt="MySQL" />
              <p>70&#37;</p>
            </div>
            <div className="skill_Bootstrap">
              <h3 className="skills_h3">Bootstrap</h3>
              <img src={bootstrapLogo} alt="Bootstrap" />
              <p>80&#37;</p>
            </div>
          </div>
          <div className="skill_img d-flex justify-content-around align-items-center">
            <div className="skill_HWP">
              <h3 className="skills_h3">HWP</h3>
              <img src={hwpLogo} alt="Hancom_Word_Processor" />
              <p>90&#37;</p>
            </div>
            <div className="skill_Excel">
              <h3 className="skills_h3">Excel</h3>
              <img src={excelLogo} alt="Excel" />
              <p>90&#37;</p>
            </div>
            <div className="skill_PowerPoint">
              <h3 className="skills_h3">PowerPoint</h3>
              <img src={powerPointLogo} alt="PowerPoint" />
              <p>80&#37;</p>
            </div>
            <div className="skill_Figma">
              <h3 className="skills_h3">Figma</h3>
              <img src={figmaLogo} alt="Figma" />
              <p>80&#37;</p>
            </div>
            <div className="skill_Photoshop">
              <h3 className="skills_h3">Photoshop</h3>
              <img src={photoshopLogo} alt="Photoshop" />
              <p>60&#37;</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
