import * as React from "react";
import { hot } from "react-hot-loader";
const reactLogo = require("./../assets/img/react_logo.svg");
import "./../assets/scss/App.scss";
import Tree from "./Tree";

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return <Tree></Tree>;
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
