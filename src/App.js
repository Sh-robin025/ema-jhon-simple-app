import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShowError from './components/ShowError/ShowError';
import Detail from './components/Products/Detail/Detail';
import Manage from './components/Manage/Manage';
import Review from './components/productReview/Review';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/review">
            <Review/>
          </Route>
          <Route path="/product/:key">
            <Detail/>
          </Route>
          <Route path="*">
            <ShowError />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
