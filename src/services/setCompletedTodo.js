const setCompletedTodo = (id) => {
  return {
    type: "SET_COMPLETED",
    payload: id
  }
}

export { setCompletedTodo };