//npm import
import React from 'react';

//Local import
import ListItems from '../Components/ListItems';
import InputTodo from '../Components/InputTodo';
import FilterTodos from '../Components/FilterTodos';

const App = () => {
  
  return (
    <div>
      <table>
        <thead>
          <tr colSpan='3'>
            <th>Todos App</th>
          </tr>
        </thead>
        <ListItems />
      </table>
      <InputTodo />
      <FilterTodos />
    </div>
  );
}

export default App;
