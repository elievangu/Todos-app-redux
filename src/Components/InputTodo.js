//npm import
import React from 'react';

//local import

const InputTodo = ({ value, handleChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
          <input
            id='input'
            type='text' 
            placeholder='Enter your new todo here...' 
            value={value} 
            onChange={handleChange}/>
        </form>
    )
}

export default InputTodo;
