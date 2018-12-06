//npm import

//local import

const getVisibleTodos = (todos, isFiltered) => {
    switch(isFiltered) {
        case true:
        return todos.filter(todo => todo.completed)

      case false:
        return todos.filter(todo => !todo.completed)

      default:
        return todos
    }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.isFiltered)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      onHandleToggle: (id) => {
          dispatch()
      }
  }
}
