//npm import
import { connect } from 'react-redux';

//local import
import { toggleTodo, deleteTodo } from '../Actions/index';
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
    todos: getVisibleTodos(state.todos, state.isFiltered),
    isFitered: state.isFiltered
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      
    onHandleToggle: (id) => {
      dispatch(toggleTodo(id))
    },

    onHandleDelete: (id) => {
      dispatch(deleteTodo(id))
    }
  }
};

const VisibleTodosList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItems)

export default VisibleTodosList;


