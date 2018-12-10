const initialState = [
    {id:1, text:'Apprendre ReactJS', completed:false},
    {id:2, text:'Apprendre Angular', completed:false},
    {id:3, text:'Apprendre NodeJS', completed:false}
]

const todos = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
          return [
              ...state, {
                  id: action.id,
                  text: action.text,
                  completed: false
              }
          ]

        case 'TOGGLE_TODO':
          return state.map(todo => 
            todo.id === action.id ? {...todo, completed:!todo.completed} : todo  
          )
        
        case 'TRASH_TODO':
          return state.filter(todo => 
              todo.text !== action.id
          )
        
        default:
          return state
    }
}

export default todos;