import React from "react";
import SubNav from "./SubNav";

const SubNavContainer = props => {
  return (
    <div>
      {props.subNavData.map(sub => (
        <SubNav key={sub.name} subNav={sub} />
      ))}
    </div>
  );
};

export default SubNavContainer;
