import React from "react";
import { NavLink, Route } from "react-router-dom";
import SubNavContainer from "./SubNavContainer";

const Nav = props => {
  return (
    <div>
      <NavLink>{props.name}</NavLink>
      <Route
        path={props.subNavData.path}
        render={props => (
          <SubNavContainer {...props} subNavData={props.subNavData} />
        )}
      />
    </div>
  );
};

export default Nav;
