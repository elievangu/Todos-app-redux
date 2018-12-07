//npm import
import { connect } from 'react-redux';

//local import
import InputTodo from '../Components/InputTodo';
import { addTodo } from '../Actions/index';

const mapDispatchToProps = (dispatch) => {
    return {
      handleSubmit: (e) => {
          dispatch(addTodo(e.target.value))
      }
    }
};

const mapStateToProps = (state) => {
  return {
      value: state.value
  }
};

const TodoInput = connect(
    mapStateToProps,
    mapDispatchToProps
)(InputTodo);

export default TodoInput;