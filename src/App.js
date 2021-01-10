import React from 'react';
import DetailPage from "./pages/DetailPage"
import FavoritePage from './pages/FavoritePage'
import SearchPage from './pages/SearchPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';


/*
Main Colors:
yellow --> ffd31d
red --> ec0101


secondary colors:
yellow --> f6cd61
red --> cd0a0a


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
          <Route path="/" exact component={SearchPage}/>
          <Route path="/DetailPage/:id" component={DetailPage}/>
          <Route path="/FavoritePage" component={FavoritePage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
