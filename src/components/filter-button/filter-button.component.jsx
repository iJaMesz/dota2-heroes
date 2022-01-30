import React from "react";

import "./filter-button.styles.css";

export const FilterButton = ({ name, filterClick, active }) => (
  <button onClick={filterClick}>{name}</button>
);
