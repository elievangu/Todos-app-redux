//npm import
import React from 'react';
import PropTypes from 'prop-types';

//local import

const ItemTodo = ({ text, completed, handleToggle }) => {
  return (
    <td 
      className={completed ? 'text completed' : 'text ongoing'} 
      onClick={handleToggle}>{text}</td>
  )
}

ItemTodo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired
};

export default ItemTodo;