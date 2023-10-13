import React, { useState } from "react";
import "./Up.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Up = () => {
  const [up, setUp] = useState(false);

  const handleAppear = () => {
    if (window.scrollY >= 100) {
      setUp(true);
    } else {
      setUp(false);
    }
  };
  window.addEventListener("scroll", handleAppear);

  const toTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={up ? "up-cntnr" : ""} onClick={toTop}>
      <ArrowUpwardIcon />
    </div>
  );
};

export default Up;
