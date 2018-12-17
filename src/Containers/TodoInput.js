//npm import
import { connect } from 'react-redux';

//local import
import InputTodo from '../Components/InputTodo';
import { addTodo, filterTodos } from '../Actions/index';

const mapStateToProps = (state) => {
  
    return {
      isFiltered: state.isFiltered
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
      handleSubmit: (e, input) => {
        e.preventDefault()
        dispatch(addTodo(input.value))
        input.value =''
      },

      onHandleFilterChange: (checked) => {
        dispatch(filterTodos(checked))
    }
    }
};

const TodoInput = connect(
    mapStateToProps,
    mapDispatchToProps
)(InputTodo);

export default TodoInput;