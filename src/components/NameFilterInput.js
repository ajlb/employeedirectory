import React from "react";
function NameFilterInput(props) {
    return (
        <div className="text-center">
            <label htmlFor="filter-input">Filter List By Name&nbsp;</label>
            <input 
            type="text"
            value={props.filterState}
            onChange={props.onFilterChange}
            name="filterInput"
            id="filter-input" />
        </div>
    )
}
export default NameFilterInput;