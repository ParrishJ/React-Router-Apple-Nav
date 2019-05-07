import React from "react";
import "../Components/NavContainer.css";
import Nav from "./Nav";

const NavContainer = props => {
  return (
    <div /* className="navContainer" */>
      {console.log(props.topNavData)}
      {props.topNavData.map(anchor => (
        <Nav key={anchor} name={anchor} subNavData={props.subNavData} />
      ))}
    </div>
  );
};

export default NavContainer;
