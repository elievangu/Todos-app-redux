let newId = 3

export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: ++newId,
        text
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

export const deleteTodo = (id) => {
    return {
        type: 'TRASH_TODOS',
        id
    }
}

export const filterTodos = (isFiltered) => {
    return {
        type: 'FILTER_TODOS',
        isFiltered
    }
}