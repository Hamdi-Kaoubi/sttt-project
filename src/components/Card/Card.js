import React, { useState } from 'react'
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { Collapse } from "@chakra-ui/react";

const Card = ({e}) => {
    const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);
  return (
    <div className="projects-items">
            <h5>{e.title} </h5>
            <Collapse startingHeight={0} in={show}>
              {e.description1}
              <br/>{e.description2}
              <br/>{e.description3}
            </Collapse>
            <ReadMoreIcon  className="projects-icon"  onClick={handleToggle} />
          </div>
  )
}

export default Card