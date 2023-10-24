import React from "react";
import github_icon from "../assets/img/github-mark.svg";
import github_hover_icon from "../assets/img/github-mark-white.svg";

const Contact = () => {
  return (
    <>
      <section className="Contact black" id="contact">
        <div className="container">
          <h2 className="h2">Contact</h2>
          <p>아직 많이 부족하지만 저의 포트폴리오를 봐주셔서 감사합니다.</p>
          <p>저에게 궁금한 점이 있으시면 언제든지 연락 주시기 바랍니다.</p>
          <p>연락 주시면 3일 이내 회신드리겠습니다. 감사합니다!</p>
          <div className="sendmail">
            <a href="mailto:dlrkdtks7@gmail.com">Send Email</a>
          </div>
        </div>
        <div className="final_info">
          <a
            href="https://github.com/rivermountain96"
            className="git_img_container"
            target="_blank"
            rel="noreferrer">
            <img
              src={github_icon}
              alt="github_original_icon"
              className="original-img"
            />
            <img
              src={github_hover_icon}
              alt="github_hover_icon"
              className="hover-img"
            />
          </a>
          <p>Frontend Developer Lee Kang San</p>
          <p>E-mail : dlrkdtks7@gmail.com</p>
          <p>Phone : 010 5142 0368</p>
          <p>
            Portfolio : <a href="https://github.com/rivermountain96">Link</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
