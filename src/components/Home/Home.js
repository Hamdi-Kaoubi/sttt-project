import React from "react";
import "./Home.css";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import image1 from "../../assets/12356.png";
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
        delay: 0.2,
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
                  <img src={image1} alt="" />
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
                      color: "var(--smooth-white)",
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
                    Soutenons toujours la technologie <span style={{ color: "var(--smooth-white)" }}>de demain</span>
                  </h1>
                  <p style={{ color: "white" }}>
                    7 jours / 7jours Sur tout le territoire de la République
                    Tunisienne
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-item">
                  <img src={image1} alt="" />
                  <h1>
                    Sociéte Tasnime des Techniques de{" "}
                    <span style={{ color: "var(--smooth-white)" }}>
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
                  <img src={image1} alt="" />
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
          <HomeContent textVariants={textVariants}/>
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
                  <img src={image1} alt="" />
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
                      color: "var(--smooth-white)",
                    }}
                  >
                    7days / 7days Throughout the territory of the Tunisian
                    Republic
                  </motion.p>
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
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-item">
                  <img src={image1} alt="" />
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
                  <img src={image1} alt="" />
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
          <HomeContent textVariants={textVariants}/>
        </div>
      )}
    </React.Fragment>
  );
};

export default Home;
