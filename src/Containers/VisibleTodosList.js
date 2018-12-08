//npm import
import { connect } from 'react-redux';

//local import
import { toggleTodo } from '../Actions/index';
import ListItems from '../Components/ListItems';


const getVisibleTodos = (todos, isFiltered) => {
  switch(isFiltered) {
    case true:
      return todos.filter(todo => todo.completed)

    case false:
      return todos.filter(todo => !todo.completed)

    default:
      return todos
  }
};

const mapStateToProps = (state) => {
  return {
    todos: [
      {id:1, text:'Je test', completed:false},
      {id:2, text:'Je test', completed:false}

    ]
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      onHandleToggle: (id) => {
          dispatch(toggleTodo(id))
      }
  }
};

const VisibleTodosList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItems)

export default VisibleTodosList;


