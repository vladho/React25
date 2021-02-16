import React from "react";

const SingleFilter = ({size}) => {
  // const {size} = props;
  return (
    <label>
      <input type="checkbox" value={size} />
      <span className="checkmark">{size}</span>
    </label>
  );
};

export default SingleFilter;
