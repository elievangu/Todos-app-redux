//npm import
import { connect } from 'react-redux';

//local import
import FilterTodos from '../Components/FilterTodos';
import { filterTodos } from '../Actions/index';


const mapStateToProps = (state) => {
  return {
      isFiltered: state.isFiltered,
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
      onHandleFilterChange: (checked) => {
          dispatch(filterTodos(checked))
          console.log('hello')
      }
    }
}
    


const TodosFilter = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterTodos);

export default TodosFilter;