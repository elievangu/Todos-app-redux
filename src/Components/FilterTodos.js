//npm import
import React from 'react';

//local import

const FilterTodos = ({isFiltered, handleFilterChange}) => {
    return (
      <label>
        <input type='checkbox' 
        checked={isFiltered} 
        onChange={(e) => handleFilterChange(e)} />
        <span>Show only completed Todos</span>
      </label>
    )
}

export default FilterTodos;