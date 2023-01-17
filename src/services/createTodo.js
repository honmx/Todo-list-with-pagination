import { getNextId } from "../helpers/getNextId";

const createTodo = (value, todos) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: getNextId(todos),
      value,
      completed: false
    }
  }
}

export { createTodo }