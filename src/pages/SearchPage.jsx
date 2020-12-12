import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import PreviewCard from "../components/PreviewCard";
import "./SearchPage.css";

function SearchPage() {
  const [typedValue, setTypedValue] = useState("");
  const [submitSearch, setSubmitSearch] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowREsult] = useState(false);
  const [likedRecepies, setLikedRecepies] = useState([]);
  const [randomRecepi, setRandomRecepi] = useState([{ id: "", name: "" }]);
  const [isShowRandomRecepie, setIsShowRandomRecepie] = useState(false);
  // const [randomRecepie, setRandomRecepi] = useState([])

  //LOCAL STROGE --> like unlike recepie
  useEffect(() => {
    randomRecepie();
    const likedRecepiesString = localStorage.getItem("likedRecepies");
    if (likedRecepiesString) {
      const likedRecepies = JSON.parse(likedRecepiesString);
      setLikedRecepies(likedRecepies);
    } else {
      localStorage.setItem("likedRecepies", "[]");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("likedRecepies", JSON.stringify(likedRecepies));
  }, [likedRecepies]);

  const handleLikeRecepies = (id) => {
    setLikedRecepies((previousLikedRecepies) => {
      return [...previousLikedRecepies, id];
    });
  };

  const handleUnlikeRecepies = (id) => {
    setLikedRecepies((previousLikedRecepies) => {
      return previousLikedRecepies.filter((recepieID) => recepieID !== id);
    });
  };
  //LOCAL STROGE --> like unlike recepie

  //user typing
  const handleTyping = (event) => {
    setTypedValue(event.target.value);
  };
  //user typing

  //submit search and fecth the data
  useEffect(() => {
    if (submitSearch) {
      fetchSearch();
    }
  }, [submitSearch]);

  useEffect(() => {
    if (searchResult.length > 0) {
      setShowREsult(true);
    }
  }, [searchResult]);

  async function fetchSearch() {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/autocomplete?number=10&query=${typedValue}&apiKey=a32be79753f4445d842d92a452b17e81`
    );
    const items = await data.json();
    setSearchResult(items);
  }
  //submit search and fecth the data

  //Random Recepi
  async function randomRecepie() {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=a32be79753f4445d842d92a452b17e81`
    );
    const dataJSON = await data.json();
    if (
      dataJSON.recipes[0].title !== undefined &&
      dataJSON.recipes[0].id !== undefined
    ) {
      setRandomRecepi({
        id: dataJSON.recipes[0].id,
        name: dataJSON.recipes[0].title,
      });
      setIsShowRandomRecepie(true);
    }
  }
  //Random Recepi

  const noFunctionalityFunction = (id) => {
    console.log(`no functionality ${id}`);
  };
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
            onClick={(e) => {
              e.preventDefault();
              setSubmitSearch(!submitSearch);
            }}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
      <div className="search-result-wrapper">
        {showResult
          ? searchResult.map((dish) => {
              return (
                <PreviewCard
                  key={dish.id}
                  id={dish.id}
                  name={dish.title}
                  isSearchPage={true}
                  onRemove={noFunctionalityFunction}
                  isLiked={likedRecepies.includes(dish.id)}
                  onLike={handleLikeRecepies}
                  onUnlike={handleUnlikeRecepies}
                />
              );
            })
          : null}
      </div>
      <div className="random-recepie-wrapper">
        <h2 className="random-recepie-wrapper-title">Recipe of the Day</h2>
        {isShowRandomRecepie ? (
          <PreviewCard
            key={randomRecepi.id}
            id={randomRecepi.id}
            name={randomRecepi.name}
            isSearchPage={true}
            onRemove={noFunctionalityFunction}
            isLiked={likedRecepies.includes(randomRecepi.id)}
            onLike={handleLikeRecepies}
            onUnlike={handleUnlikeRecepies}
          />
        ) : null}
      </div>
    </div>
  );
}

export default SearchPage;
