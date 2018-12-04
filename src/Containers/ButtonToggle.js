//npm import
import { connect } from 'react-redux';

//local import
import ToggleButton from '../Components/ToggleButton';
import { toggleTodo } from '../Actions/index';

const mapDispatchToProps = (dispatch) => {
    return {
      handleToggle: (id) => {
          dispatch(toggleTodo(id))
      }
    }
};

const ButtonToggle = connect(
    null,
    mapDispatchToProps
)(ToggleButton);

export default ButtonToggle;