//npm import
import { connect } from 'react-redux';

//local import
import TrashButton from '../Components/TrashButton';
import { deleteTodo } from '../Actions/index';

const mapDispatchToProps = (dispatch) => {
    return {
      onHandleDelete: (id) => {
          dispatch(deleteTodo(id))
      }
    }
};

const ButtonTrash = connect(
    null,
    mapDispatchToProps
)(TrashButton);

export default ButtonTrash;