//npm import
import React from 'react';

//local import

const FilterTodos = ({checked, isFiltered, handleFilterChange}) => {
    return (
      <label>
        <input 
        type='checkbox' 
        checked={isFiltered} 
        onChange={(e) => handleFilterChange(e, checked)} />
        <span>Show only completed Todos</span>
      </label>
    )
}

export default FilterTodos;