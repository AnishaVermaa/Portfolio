import React from "react";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import p1 from "../../img/p1.png";
import p2 from "../../img/p2.png";
import p3 from "../../img/p3.png";
import p4 from "../../img/p4.png";
import p5 from "../../img/p5.png";

const Projects = () => {
  return (
    <div className="project" id="project">
      <span>Projects</span>

      <Swiper
        spaceBetween={400}
        slidesPerView={2}
        grabCursor={true}
        className="project-slider"
      >
        <SwiperSlide>
          <img src={p4} alt="Project1" />
          <a
            className="links"
            href="https://lovely-cucurucho-1dd32a.netlify.app/"
          >
            Click to see
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={p5} alt="Project2" />
          <a
            className="links"
            href="https://sprightly-twilight-6186c4.netlify.app/"
          >
            Click to see
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={p2} alt="Project3" />
          <a
            className="links"
            href="https://relaxed-cheesecake-48a604.netlify.app/"
          >
            Click to see
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={p1} alt="Project4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p3} alt="Project5" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
