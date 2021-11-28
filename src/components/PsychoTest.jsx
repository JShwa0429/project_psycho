import React from "react";
import { Route, Switch } from "react-router";
import Home from "../containers/Home.jsx";
import Test from "../containers/Test.jsx";
import Result from "../containers/Result.jsx";

export default function PsychoTest() {
  return (
    <Switch>
      <>
        <Route exact path="/" component={Home} />
        <Route path="/test" component={Test} />
        <Route path="/result" component={Result} />
      </>
    </Switch>
  );
}
