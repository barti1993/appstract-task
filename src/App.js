import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./containers/Users/Users";
import AddUser from "./components/User/UserControls/AddUser";
import EditUser from "./components/User/UserControls/EditUser";
import Header from "./containers/Layout/Header";
import PageNotFound from "./components/pages/404";

import { Provider } from "react-redux";
import store from "./store/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Users} />
              <Route exact path="/user/add" component={AddUser} />
              <Route exact path="/user/edit/:id" component={EditUser} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
