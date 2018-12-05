let newId = 2

export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: newId++,
        text
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

export const trashTodo = (id) => {
    return {
        type: 'TRASH_TODO',
        id
    }
}

export const filterTodos = (isFiltered) => {
    return {
        type: 'FILTER_TODOS',
        isFiltered
    }
}