import React, { useState } from "react";
import "./Navigation.css";
import logo from "../../assets/New Project-2.png";
import { Link, useNavigate } from "react-router-dom";
import flag1 from "../../assets/Flag-France.webp";
import flag2 from "../../assets/britain.jpg";
import { useLanguage } from "../../LanguageContext";
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';

const Navigation = () => {
  const {language, handleLanguage} = useLanguage()
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState(true);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
    setActive("/");
  };

  const handleVisible = () => {
    setVisible( visible === true ? false : true)
  }

  return (
    <React.Fragment>
      {language === "fr" ? (
        <div className="nav">
          <img src={logo} alt="logo" onClick={handleNavigate} />
          <ul className={visible === false ? 'shown' : ''}>
            <li
              onClick={handleNavigate}
              className={active === "/" ? "active" : "nav-items"}
            >
              Accueil
            </li>
            <li>|</li>
            <li
              onClick={() => setActive("/about")}
              className={active === "/about" ? "active" : "nav-items"}
            >
              <Link to="/about">A propos</Link>
            </li>
            <li>|</li>
            <li
              onClick={() => setActive("/services")}
              className={active === "/services" ? "active" : "nav-items"}
            >
              <Link to="/services">Services</Link>
            </li>
            <li>|</li>
            <li
              onClick={() => setActive("/staff")}
              className={active === "/staff" ? "active" : "nav-items"}
            >
              <Link to="/staff">Equipe</Link>
            </li>
            <li>|</li>
            <li
              onClick={() => setActive("/contact")}
              className={active === "/contact" ? "active" : "nav-items"}
            >
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <img src={flag1} alt="france" onClick={handleLanguage} className="special"/>
          <div id="mobile">
            {visible ? <DehazeIcon onClick={handleVisible} className="visible"/> : <CloseIcon onClick={handleVisible} className="visible"/>}
          </div>
        </div>
      ) : (
        <div className="nav">
          <img src={logo} alt="logo" onClick={handleNavigate} />
          <ul className={visible === true ? 'shown' : ''}>
            <li
              onClick={handleNavigate}
              className={active === "/" ? "active" : "nav-items"}
            >
              Home
            </li>
            <li>|</li>
            <li
              onClick={() => setActive("/about")}
              className={active === "/about" ? "active" : "nav-items"}
            >
              <Link to="/about">About</Link>
            </li>
            <li>|</li>
            <li
              onClick={() => setActive("/services")}
              className={active === "/services" ? "active" : "nav-items"}
            >
              <Link to="/services">Services</Link>
            </li>
            <li>|</li>
            <li
              onClick={() => setActive("/staff")}
              className={active === "/staff" ? "active" : "nav-items"}
            >
              <Link to="/staff">Team</Link>
            </li>
            <li>|</li>
            <li
              onClick={() => setActive("/contact")}
              className={active === "/contact" ? "active" : "nav-items"}
            >
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <img src={flag2} alt="english" onClick={handleLanguage} className="special"/>
          <div id="mobile">
            {visible ? <DehazeIcon onClick={handleVisible} className="visible"/> : <CloseIcon onClick={handleVisible} className="visible"/>}
          </div>
          </div>
      )}
    </React.Fragment>
  );
};

export default Navigation;
