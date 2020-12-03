import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import PreviewCard from "../components/PreviewCard";
import "./SearchPage.css";

function SearchPage() {
  const [typedValue, setTypedValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleTyping = (event) => {
    setTypedValue(event.target.value);
  };

  useEffect(() => {
    fetchSearch();
    console.log(searchResult);
  }, [typedValue]);

  async function fetchSearch() {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/autocomplete?number=25&query=${typedValue}&apiKey=a72d12c6d9b64afa8895a513be1ad664`
    );
    const items = await data.json();
    setSearchResult(items);
  }
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
            value={typedValue}
            onChange={handleTyping}
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
        {searchResult.map((dish) => {
          return <PreviewCard key={dish.id} id={dish.id} name={dish.title} />;
        })}
      </div>
    </div>
  );
}

export default SearchPage;
