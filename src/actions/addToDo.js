let nextTodoId = 0
const addToDo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}
export default addToDo;