import React, { useEffect, useState, useRef } from "react";
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

const Skills = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const skillSectionRef = useRef(null);
  const [skills, setSkills] = useState({
    HTML: 0,
    CSS: 0,
    Javascript: 0,
    jQuery: 0,
    React: 0,
    PHP: 0,
    Nodejs: 0,
    Laravel: 0,
    MySQL: 0,
    Bootstrap: 0,
    HWP: 0,
    Excel: 0,
    PowerPoint: 0,
    Figma: 0,
    Photoshop: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const skillSection = skillSectionRef.current;

      if (skillSection) {
        const skillSectionTop = skillSection.offsetTop;
        const skillSectionHeight = skillSection.clientHeight;

        if (
          scrollTop >= skillSectionTop &&
          scrollTop <= skillSectionTop + skillSectionHeight
        ) {
          setIsScrolled(true);
          startCounting(); // Skills 섹션에 도달하면 숫자 증가 시작
        }
      }
    };

    const startCounting = () => {
      // Skills 섹션에 도달했을 때 실행되며, 숫자를 0부터 채우는 코드
      let progress = 0;
      const increment = 1; // 숫자가 증가하는 속도

      const intervalId = setInterval(() => {
        if (progress >= 90) {
          // 숫자가 최대 값(여기서는 90)에 도달하면 clearInterval로 인터벌 종료
          clearInterval(intervalId);
        } else {
          // 각 스킬의 숫자를 부드럽게 증가시킴
          setSkills((prevSkills) => ({
            HTML: Math.min(90, prevSkills.HTML + increment),
            CSS: Math.min(80, prevSkills.CSS + increment),
            Javascript: Math.min(70, prevSkills.Javascript + increment),
            jQuery: Math.min(80, prevSkills.jQuery + increment),
            React: Math.min(70, prevSkills.React + increment),
            PHP: Math.min(70, prevSkills.PHP + increment),
            Nodejs: Math.min(60, prevSkills.Nodejs + increment),
            Laravel: Math.min(50, prevSkills.Laravel + increment),
            MySQL: Math.min(70, prevSkills.MySQL + increment),
            Bootstrap: Math.min(80, prevSkills.Bootstrap + increment),
            HWP: Math.min(90, prevSkills.HWP + increment),
            Excel: Math.min(90, prevSkills.Excel + increment),
            PowerPoint: Math.min(80, prevSkills.PowerPoint + increment),
            Figma: Math.min(80, prevSkills.Figma + increment),
            Photoshop: Math.min(60, prevSkills.Photoshop + increment),
          }));
        }
      }, 80); // 숫자를 업데이트하는 간격(ms)
    };

    // 컴포넌트가 마운트될 때 이벤트 리스너를 등록
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <>
      <section className="Skills" id="skills" ref={skillSectionRef}>
        <div className="container">
          <h2 className="h2">Skills</h2>
          <div className="skill_img d-flex justify-content-around align-items-center">
            <div className="skill_HTML">
              <h3 className="skills_h3">HTML</h3>
              <img src={htmlLogo} alt="HTML" />
              <p>{Math.round(skills.HTML)}&#37;</p>
            </div>
            <div className="skill_CSS">
              <h3 className="skills_h3">CSS</h3>
              <img src={cssLogo} alt="CSS" />
              <p>{Math.round(skills.CSS)}&#37;</p>
            </div>
            <div className="skill_Javascript">
              <h3 className="skills_h3">Javascript</h3>
              <img src={javascriptLogo} alt="Javascript" />
              <p>{Math.round(skills.Javascript)}&#37;</p>
            </div>
            <div className="skill_jQuery">
              <h3 className="skills_h3">jQuery</h3>
              <img src={jqueryLogo} alt="jQuery" />
              <p>{Math.round(skills.jQuery)}&#37;</p>
            </div>
            <div className="skill_React">
              <h3 className="skills_h3">React</h3>
              <img src={reactLogo} alt="React" />
              <p>{Math.round(skills.React)}&#37;</p>
            </div>
          </div>
          <div className="skill_img d-flex justify-content-around align-items-center">
            <div className="skill_PHP">
              <h3 className="skills_h3">PHP</h3>
              <img src={phpLogo} alt="PHP" />
              <p>{Math.round(skills.PHP)}&#37;</p>
            </div>
            <div className="skill_Nodejs">
              <h3 className="skills_h3">Node.js</h3>
              <img src={nodejsLogo} alt="Node.js" />
              <p>{Math.round(skills.Nodejs)}&#37;</p>
            </div>
            <div className="skill_Laravel">
              <h3 className="skills_h3">Laravel</h3>
              <img src={laravelLogo} alt="Laravel" />
              <p>{Math.round(skills.Laravel)}&#37;</p>
            </div>
            <div className="skill_MySQL">
              <h3 className="skills_h3">MySQL</h3>
              <img src={mysqlLogo} alt="MySQL" />
              <p>{Math.round(skills.MySQL)}&#37;</p>
            </div>
            <div className="skill_Bootstrap">
              <h3 className="skills_h3">Bootstrap</h3>
              <img src={bootstrapLogo} alt="Bootstrap" />
              <p>{Math.round(skills.Bootstrap)}&#37;</p>
            </div>
          </div>
          <div className="skill_img d-flex justify-content-around align-items-center">
            <div className="skill_HWP">
              <h3 className="skills_h3">HWP</h3>
              <img src={hwpLogo} alt="Hancom_Word_Processor" />
              <p>{Math.round(skills.HWP)}&#37;</p>
            </div>
            <div className="skill_Excel">
              <h3 className="skills_h3">Excel</h3>
              <img src={excelLogo} alt="Excel" />
              <p>{Math.round(skills.Excel)}&#37;</p>
            </div>
            <div className="skill_PowerPoint">
              <h3 className="skills_h3">PowerPoint</h3>
              <img src={powerPointLogo} alt="PowerPoint" />
              <p>{Math.round(skills.PowerPoint)}&#37;</p>
            </div>
            <div className="skill_Figma">
              <h3 className="skills_h3">Figma</h3>
              <img src={figmaLogo} alt="Figma" />
              <p>{Math.round(skills.Figma)}&#37;</p>
            </div>
            <div className="skill_Photoshop">
              <h3 className="skills_h3">Photoshop</h3>
              <img src={photoshopLogo} alt="Photoshop" />
              <p>{Math.round(skills.Photoshop)}&#37;</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
