let nextTodoId = 0
export const addToDo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}


export const removeToDo = (id) => {
	nextTodoId--;
  return {
    type: 'REMOVE_TODO',
    id
  }
}


export const toggleToDo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

