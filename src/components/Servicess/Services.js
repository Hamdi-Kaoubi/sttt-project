import React from "react";
import canalisation1 from "../../assets/canalisation.jpg";
import canalisation2 from "../../assets/canalisation1.jpg";
import canalisation3 from "../../assets/canalisation2.jpg";
import raccordement from '../../assets/raccordement.jpg';
import tirage1 from '../../assets/tirage.jpg';
import tirage2 from '../../assets/tirage1.jpg';
import mesure from '../../assets/mesurecables.jpg';
import signalisation1 from '../../assets/signalisation.jpg';
import signalisation2 from '../../assets/signalisation1.jpg';
import "./Services.css";
import { useLanguage } from "../../LanguageContext";
import { Helmet } from "react-helmet";

const Services = () => {
  const {language} = useLanguage()
  return (
    <React.Fragment>
    <Helmet>
        <title>STTT Services</title>
        <meta name='description' content='discover the services that STTT start up offer.'/>
    </Helmet>
      {language === 'fr' ? (
        <div className="services">
      <h1>
        <span>STTT</span> est toujours à votre service
      </h1>
      <div className="service-container">
        <div className="service1">
          <div className="imagess">
            <img src={canalisation1} alt="" />
            <img src={canalisation2} alt="" />
            <img src={canalisation3} alt="" />
          </div>
          <div className="the-serv">
            <h3>
              <ins>Canalisation</ins>
            </h3>
          </div>
        </div>
        <div className="service2">
          <div className="imagess">
            <img src={raccordement} alt="" />
          </div>
          <div className="the-serv">
            <h3>
              <ins>Raccordement des cables</ins>
            </h3>
          </div>
        </div>
        <div className="service3">
          <div className="imagess">
            <img src={tirage1} alt="" />
            <img src={tirage2} alt="" />
          </div>
          <div className="the-serv">
            <h3>
              <ins>Tirage des cables</ins>
            </h3>
          </div>
        </div>
        <div className="service4">
          <div className="imagess">
            <img src={mesure} alt="" />
          </div>
          <div className="the-serv">
            <h3>
              <ins>Mesures</ins>
            </h3>
          </div>
        </div>
        <div className="service5">
          <div className="imagess">
            <img src={signalisation1} alt="" />
            <img src={signalisation2} alt="" />
          </div>
          <div className="the-serv">
            <h3>
              <ins>Signalisation</ins>
            </h3>
          </div>
        </div>
      </div>
    </div>
      ) : (
        <div className="services">
      <h1>
        <span>STTT</span> is always at your service
      </h1>
      <div className="service-container">
        <div className="service1">
          <div className="imagess">
            <img src={canalisation1} alt="" />
            <img src={canalisation2} alt="" />
            <img src={canalisation3} alt="" />
          </div>
          <div className="the-serv">
            <h3>
              <ins>Digging trenches</ins>
            </h3>
          </div>
        </div>
        <div className="service2">
          <div className="imagess">
            <img src={raccordement} alt="" />
          </div>
          <div className="the-serv">
            <h3>
              <ins>Connecting cables</ins>
            </h3>
          </div>
        </div>
        <div className="service3">
          <div className="imagess">
            <img src={tirage1} alt="" />
            <img src={tirage2} alt="" />
          </div>
          <div className="the-serv">
            <h3>
              <ins>Pulling cables</ins>
            </h3>
          </div>
        </div>
        <div className="service4">
          <div className="imagess">
            <img src={mesure} alt="" />
          </div>
          <div className="the-serv">
            <h3>
              <ins>Measurements</ins>
            </h3>
          </div>
        </div>
        <div className="service5">
          <div className="imagess">
            <img src={signalisation1} alt="" />
            <img src={signalisation2} alt="" />
          </div>
          <div className="the-serv">
            <h3>
              <ins>Signaling</ins>
            </h3>
          </div>
        </div>
      </div>
    </div>
      )}
    </React.Fragment>
  );
};

export default Services;
