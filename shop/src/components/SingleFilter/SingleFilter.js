import React from "react";
import PropTypes from 'prop-types';



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


SingleFilter.propTypes = {
  size: PropTypes.string,
};