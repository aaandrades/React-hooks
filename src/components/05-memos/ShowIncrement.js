import React from "react";
import PropTypes from "prop-types";

export const ShowIncrement = ({ increment }) => {
    console.log("Generate Again :(");
  return (
    <button className="btn btn-primary" onClick={() => increment(5)}>
      Increment
    </button>
  );
};

ShowIncrement.propTypes = {
  increment: PropTypes.func,
};
