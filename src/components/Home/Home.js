import React from "react";
import "./Home.css";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import image1 from "../../assets/76825.jpg";
import image2 from "../../assets/12356.png";
import image3 from "../../assets/young-man-engineer-making-program-analyses.jpg";
import image4 from "../../assets/miniature-engineer-worker-plug-lan-cable-computer.jpg";
import { useLanguage } from "../../LanguageContext";
import HomeContent from "../HomeContent/HomeContent";

const Home = () => {
  const textVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.7,
        type: "tween" 
      }
    }
  }
  const { language } = useLanguage();

  return (
    <React.Fragment>
      {language === "fr" ? (
        <div className="home">
          <div className="swpr-cnt">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              loop={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="swiper-item">
                  <img src={image2} alt="" />
                  <motion.h1
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    Sociéte Tasnime des Techniques de
                    <span style={{ color: "var(--smooth-white)" }}>
                      Télécommunication ...
                    </span>
                  </motion.h1>
                  <motion.p
                    style={{
                      color: "#000",
                    }}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    7 jours / 7jours Sur tout le territoire de la République
                    Tunisienne
                  </motion.p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-item">
                  <img src={image1} alt="" />
                  <h1>
                    Soutenons toujours la technologie <span>de demain</span>
                  </h1>
                  <p style={{ color: "white" }}>
                    7 jours / 7jours Sur tout le territoire de la République
                    Tunisienne
                  </p>
                  <a href="http://www.freepik.com" style={{ display: "none" }}>
                    Designed by kjpargeter / Freepik
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-item">
                  <img src={image3} alt="" />
                  <h1 style={{ color: "white" }}>
                    Sociéte Tasnime des Techniques de{" "}
                    <span style={{ color: "white" }}>
                      Télécommunication ...
                    </span>
                  </h1>
                  <p style={{ color: "white" }}>
                    7 jours / 7jours Sur tout le territoire de la République
                    Tunisienne
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-item">
                  <img src={image4} alt="" />
                  <h1>
                    Sociéte Tasnime des Techniques de{" "}
                    <span style={{ color: "white" }}>
                      Télécommunication ...
                    </span>
                  </h1>
                  <p style={{ color: "white" }}>
                    7 jours / 7jours Sur tout le territoire de la République
                    Tunisienne
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <HomeContent />
        </div>
      ) : (
        <div className="home">
          <div className="swpr-cnt">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              loop={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="swiper-item">
                  <img src={image2} alt="" />
                  <motion.h1
                  variants={textVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    Tasnime Society of Telecommunication{" "}
                    <span style={{ color: "var(--smooth-white)" }}>
                      Technics ...
                    </span>
                  </motion.h1>
                  <motion.p
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    style={{
                      color: "#000",
                    }}
                  >
                    7days / 7days Throughout the territory of the Tunisian
                    Republic
                  </motion.p>
                  <a href="http://www.freepik.com" style={{ display: "none" }}>
                    Designed by rawpixel.com / Freepik
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-item">
                  <img src={image1} alt="" />
                  <h1>
                    Always Supporting the Technology <span>of Tomorrow</span>
                  </h1>
                  <p style={{ color: "white" }}>
                    7 jours / 7jours Sur tout le territoire de la République
                    Tunisienne
                  </p>
                  <a href="http://www.freepik.com" style={{ display: "none" }}>
                    Designed by kjpargeter / Freepik
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-item">
                  <img src={image3} alt="" />
                  <h1 style={{ color: "white" }}>
                    Sociéte Tasnime des Techniques de{" "}
                    <span style={{ color: "white" }}>
                      Télécommunication ...
                    </span>
                  </h1>
                  <p style={{ color: "white" }}>
                    7 jours / 7jours Sur tout le territoire de la République
                    Tunisienne
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-item">
                  <img src={image4} alt="" />
                  <h1>
                    Sociéte Tasnime des Techniques de{" "}
                    <span style={{ color: "white" }}>
                      Télécommunication ...
                    </span>
                  </h1>
                  <p style={{ color: "white" }}>
                    7 jours / 7jours Sur tout le territoire de la République
                    Tunisienne
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <HomeContent />
        </div>
      )}
    </React.Fragment>
  );
};

export default Home;
