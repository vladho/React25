import React from "react";
import sizes from "../../db/sizes.json";
import SingleFilter from "../SingleFilter/SingleFilter";

import "./FilterBlock.css";

const FilterBlock = (props) => {
  console.log(props);
  return (
    <div className="filters">
      <h4 className="title">Sizes:</h4>
      <div className="available-size">
        {sizes.map((el) => <SingleFilter key={el} size={el}/>)}
        {/* <label>
          <input type="checkbox" value="XS" />
          <span className="checkmark">
            XS
          </span></label
        >
        <label>
          <input type="checkbox" value="S" />
          <span className="checkmark">
            S
          </span></label
        >
        <label>
          <input type="checkbox" value="M" />
          <span className="checkmark">
            M
          </span></label
        > */}
      </div>
      {props.children}
    </div>
  );
};

export default FilterBlock;
