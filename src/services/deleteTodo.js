const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: id
  }
}
export { deleteTodo }