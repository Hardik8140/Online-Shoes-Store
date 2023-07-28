import React from "react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const Star = ({ selected, onClick }) => {
  return (
    <FaStar
      data-icon="star"
      color={selected ? "yellow" : "grey"}
      onClick={onClick}
    />
  );
};
export default Star;
