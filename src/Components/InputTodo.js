//npm import
import React from 'react';

//local import

const InputTodo = ({ value, handleChange, handleSubmit }) => {
    return (
        <form onSubmit={e => handleSubmit(e)}>
          <input
            id='input'
            type='text' 
            placeholder='Enter your new todo here...' 
            value={value} 
            onChange={e => handleChange(e)}/>
        </form>
    )
}

export default InputTodo;
