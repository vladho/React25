import React from "react";

const SingleFilter = ({some}) => {
  // const {size} = props;
  return (
    <label>
      <input type="checkbox" value={some} />
      <span className="checkmark">{some}</span>
    </label>
  );
};

export default SingleFilter;
