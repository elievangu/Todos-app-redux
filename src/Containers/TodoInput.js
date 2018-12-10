//npm import
import { connect } from 'react-redux';

//local import
import InputTodo from '../Components/InputTodo';
import { addTodo } from '../Actions/index';

const mapDispatchToProps = (dispatch) => {
    
    return {
      handleSubmit: (e, input) => {
          e.preventDefault()
          dispatch(addTodo(input.value))
      }
    }
};



const TodoInput = connect(
    null,
    mapDispatchToProps
)(InputTodo);

export default TodoInput;