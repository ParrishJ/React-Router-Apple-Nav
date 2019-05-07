import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import { topNavData, subNavData } from "./Data";

import NavContainer from "./Components/NavContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      topNavData: topNavData,
      subNavData: subNavData
    };
  }

  render() {
    return (
      <div className="App">
        <Route
          path="/"
          render={props => (
            <NavContainer
              {...props}
              topNavData={this.state.topNavData}
              subNavData={this.state.subNavData}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
