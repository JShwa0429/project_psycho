import React from "react";
import { Route } from "react-router";
import Home from "../containers/Home.jsx";
import Test from "../containers/Test.jsx";
import Result from "../containers/Result.jsx";

export default function PsychoTest() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Route exact path="/" component={Home} />
      <Route path="/test" component={Test} />
      <Route path="/result" component={Result} />
    </div>
  );
}
