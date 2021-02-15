import React from "react";
import sizes from "../../db/sizes.json";
import SingleFilter from "../SingleFilter/SingleFilter";

import "./FilterBlock.css";

const FilterBlock = () => {
  console.log(sizes);
  return (
    <div className="filters">
      <h4 className="title">Sizes:</h4>
      <div className="available-size">
        {sizes.map((el) => <SingleFilter key={el} some={el}/>)}
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
    </div>
  );
};

export default FilterBlock;
