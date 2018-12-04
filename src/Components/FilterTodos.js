//npm import
import React from 'react';

//local import

const FilterTodos = ({isFiltered, handleFilterChange}) => {
    return (
      <label>
        <input type='checkbox' 
        checked={isFiltered} 
        onChange={handleFilterChange}/>
        <span>Show only completed Todos</span>
      </label>
    )
}

export default FilterTodos;