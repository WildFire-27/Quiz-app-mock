import React from "react";

import "./QuestionFilter.css";

const QuestionFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    console.log("Filtered year Clicked");

    console.log(event.target.value);

    props.onFilterChange(event.target.value);
  };

  return (
    <div className="filter-box">
      <div className="filter">
        <label>Filter Category</label>

        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option>select</option>

          <option value="Reactjs">Reactjs </option>

          <option value="JavaScript">JavaScript</option>

          <option value="HTML">HTML</option>

          <option value="CSS">CSS</option>
        </select>
      </div>
    </div>
  );
};

export default QuestionFilter;
