import React, { useContext } from "react";
import "./About.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume_anisha from "./Resume_anisha.pdf";
const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="about" id="about">
      <div className="a-left">
        <span style={{ color: darkMode ? "white" : "" }}>Get to Know me! </span>
        <span>
          I am a driven final year computer science student with a strong
          passion for technology and a deep-rooted desire to apply my technical
          skills in a practical, real-world setting.
          <br /> <br />
          Up until my sixth semester, I have maintained a commendable CGPA of
          7.83, reflecting my dedication to my academic excellence.
          <br /> <br />I am actively seeking opportunities to apply my skills
          and knowledge in a professional environment, and I am confident that
          my technical proficiency, combined with my problem-solving mindset and
          passion for innovation, make me a valuable asset to any team or
          project.
          <br />
          <br />
          My academic background has equipped me with a solid foundation in
          computer science, including programming languages like Java as well as
          experience in data structures, algorithms and software development. I
          am also proficient in web development technologies such as HTML, CSS,
          JavaScript, and have experience with database systems like MySQL.
          <br />
          <br />I am enthusiastic about applying my technical skills to tackle
          real-world challenges and contribute to innovative solutions. Whether
          it's software development, or any other technical domain, I am eager
          to take on new challenges and continuously learn and adapt to evolving
          technologies.
          <br />
          <br />
          I am a Frontend Web Developer building the Front-end of Websites and
          Web Applications that leads to the success of the overall product.
          Check out some of my work in the Projects section.
          <br />
          <br />I am open to Job opportunities where I can contribute, learn and
          grow. If you have a good opportunity that matches my skills and
          experience then don't hesitate to contact me.
        </span>
        <a href={Resume_anisha} download>
          <button className="button a-button">Download Resume</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="a-right">
        {/* <span>Education</span> */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Graduation"}
            detail={
              "I am pursuing my bachelor's degree in Computer Science from Deenbandhu Chhotu Ram University Of Science And Technology, Murthal Sonipat (Haryana) ."
            }
          />
        </motion.div>
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Schooling"}
            detail={
              "I've done my schooling from New Krishna Public Senior Secondary School from New Delhi ."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default About;
