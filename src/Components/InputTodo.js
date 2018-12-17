//npm import
import React from 'react';
import PropTypes from 'prop-types';
//local import
import TodosFilter from '../Containers/TodosFilter'

const InputTodo = ({ input, isFiltered, onHandleFilterChange, handleSubmit }) => {

    return (
        <form onSubmit={e => handleSubmit(e, input)}>
          <input
            id='input'
            type='text' 
            placeholder='Enter your new todo here...'
            ref={node => (input = node)} />
          <TodosFilter 
            isFiltered={isFiltered} 
            handleFilterChange={e => onHandleFilterChange(e.target.checked)} />
        </form>
    )
}

InputTodo.propTypes = {
    input: PropTypes.node.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    onHandleFilterChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default InputTodo;
