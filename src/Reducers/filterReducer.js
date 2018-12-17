const filterReducer = (state = true, action) => {
    switch(action.type) {
      case 'FILTER_TODOS':
        return !state;

      default:
        return state;
    }
}

export default filterReducer;