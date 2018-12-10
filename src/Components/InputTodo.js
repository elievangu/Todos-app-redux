//npm import
import React from 'react';

//local import

const InputTodo = ({ input, handleSubmit }) => {

    return (
        <form onSubmit={e => handleSubmit(e, input)}>
          <input
            id='input'
            type='text' 
            placeholder='Enter your new todo here...'
            ref={node => (input = node)} />
        </form>
    )
}

export default InputTodo;
