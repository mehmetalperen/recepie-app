import React, { useState } from "react";
import "./Navbar.css";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

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
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="title">
            <HomeIcon fontSize="large" style={{ color: "#ffd31d" }} />
            Hungry!¡!¡
          </h1>
        </Link>
      </div>
      <div className="heartBtn-box">
        <Link to="/FavoritePage" style={{ textDecoration: "none" }}>
          <IconButton aria-label="delete">
            <FavoriteIcon fontSize="large" style={{ color: "#ffd31d" }} />
          </IconButton>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
