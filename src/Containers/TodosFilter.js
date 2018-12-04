//npm import
import { connect } from 'react-redux';

//local import
import FilterTodos from '../Components/FilterTodos';
import filterTodos from '../Actions/index';

const mapDispatchToprops = (dispatch) => {
    return {
      handleFilterChange: (e) => {
          dispatch(filterTodos(e))
      }
    }
}

const mapStateToProps = (state) => {
    return {
        isFiltered: state.value
    }
}

const TodosFilter = connect(
    mapStateToProps,
    mapDispatchToprops
)(FilterTodos);

export default TodosFilter;