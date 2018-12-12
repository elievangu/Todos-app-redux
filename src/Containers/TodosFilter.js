//npm import
import { connect } from 'react-redux';

//local import
import FilterTodos from '../Components/FilterTodos';
import { filterTodos } from '../Actions/index';


const mapStateToProps = (state) => {
  return {
      isFiltered: state.isFiltered
  }
}
const mapDispatchToprops = (dispatch) => {
    return {
      handleFilterChange: (e) => {
          dispatch(filterTodos('true'))
      }
    }
}


const TodosFilter = connect(
    mapStateToProps,
    mapDispatchToprops
)(FilterTodos);

export default TodosFilter;