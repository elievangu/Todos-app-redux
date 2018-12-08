//npm import
import React from 'react';

//Local import
import VisibleTodosList from '../Containers/VisibleTodosList';
import TodoInput from '../Containers/TodoInput';
import TodosFilter from '../Containers/TodosFilter';

const App = () => {
  
  return (
    <div>
      <table>
        <thead>
          <tr colSpan='3'>
            <th>Todos App</th>
          </tr>
        </thead>
        <VisibleTodosList />
      </table>
      <div>
        <TodoInput />
        <TodosFilter />
      </div>
    </div>
  );
}

export default App;
