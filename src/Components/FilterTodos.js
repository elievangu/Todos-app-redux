//npm import
import React from 'react';
import PropTypes from 'prop-types';

//local import

const FilterTodos = ({isFiltered, handleFilterChange}) => {
    return (
      <label>
        <input 
        type='checkbox' 
        checked={isFiltered} 
        onChange={handleFilterChange} />
        <span>Show only completed Todos</span>
      </label>
    )
}

FilterTodos.propTypes = {
  isFiltered: PropTypes.bool.isRequired,
  handleFilterChange: PropTypes.func.isRequired
}

export default FilterTodos;