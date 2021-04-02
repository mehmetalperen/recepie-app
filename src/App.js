import React from "react";
import DetailPage from "./pages/DetailPage";
import FavoritePage from "./pages/FavoritePage";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

/*
Colors:
1: bfcba8
2: 5b8a72;
3: 56776c
4: 464f41

font-family: 'Anton', sans-serif;
font-family: 'Cabin', sans-serif;
font-family: 'Libre Franklin', sans-serif;

*/
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={SearchPage} />
          <Route path="/DetailPage/:id" component={DetailPage} />
          <Route path="/FavoritePage" component={FavoritePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
