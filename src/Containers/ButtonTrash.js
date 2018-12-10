//npm import
import { connect } from 'react-redux';

//local import
import TrashButton from '../Components/TrashButton';
import { trashTodo } from '../Actions/index';

const mapDispatchToProps = (dispatch) => {
    return {
        onHandleTrash: (id) => {
          dispatch(trashTodo(id))
        }
    }
}

const ButtonTrash = connect(
    null,
    mapDispatchToProps
)(TrashButton);

export default ButtonTrash;