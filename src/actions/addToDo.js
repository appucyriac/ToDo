let nextTodoId = 0
export const addToDo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}
