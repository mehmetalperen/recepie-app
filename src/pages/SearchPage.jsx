import React from "react";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="SearchPage">
      <div className="search-box-container">
        <Paper
          component="form"
          style={{
            backgroundColor: "white",
            borderRadius: "30px",
            boxShadow:
              "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
            borderStyle: "solid",
            borderWidth: "2px",
            borderColor: "#f6cd61",
            padding: "10px 20px",
          }}
        >
          <InputBase
            placeholder="Delicious Recepies..."
            style={{ color: "#ec0101", width: "fit-content" }}
          />
          <IconButton
            type="submit"
            aria-label="search"
            style={{
              color: "#ffd31d",
              marginLeft: "10px",
            }}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
      <div className="search-result-wrapper">
        <div>
          <h1>result</h1>
        </div>
        <div>
          <h1>result</h1>
        </div>
        <div>
          <h1>result</h1>
        </div>
        <div>
          <h1>result</h1>
        </div>
        <div>
          <h1>result</h1>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
