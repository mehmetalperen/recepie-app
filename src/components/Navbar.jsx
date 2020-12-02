import React, { useState } from "react";
import "./Navbar.css";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";

/*
Main Colors:
yellow --> ffd31d
red --> ec0101

secondary colors:
yellow --> f6cd61
red --> cd0a0a

*/

function Navbar() {
  return (
    <div className="Navbar">
      <div className="homeBtn-box">
        <h1 className="title">
          <HomeIcon fontSize="large" style={{ color: "#ffd31d" }} />
          Hungry!¡!¡
        </h1>
      </div>
      <div className="heartBtn-box">
        <IconButton aria-label="delete">
          <FavoriteIcon fontSize="large" style={{ color: "#ffd31d" }} />
        </IconButton>
      </div>
    </div>
  );
}

export default Navbar;
