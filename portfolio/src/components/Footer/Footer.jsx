import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>anishav.0606@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/av_0606/">
            <Insta color="white" size={"3rem"} />{" "}
          </a>
          <a href="https://www.linkedin.com/in/anisha-64496b229/">
            <LinkedIn color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/AnishaVermaa">
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
