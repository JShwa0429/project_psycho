import React from "react";
import { Route } from "react-router";
import Home from "../components/home";
import Test from "../components/test";
import Result from "../components/result";
export default function UserInput() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Route exact path="/" component={Home} />
      <Route path="/test" component={Test} />
      <Route path="/result" component={Result} />
    </div>
  );
}
