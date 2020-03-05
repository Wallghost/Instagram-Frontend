import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./Pages/Login/Login";
import Main from "./Pages/Main/Main";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/main" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
