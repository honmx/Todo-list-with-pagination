const initialState = {
  todos: [],
  filter: "all",
  currentPage: 1
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    case "SET_PAGE":
      return {
        ...state,
        currentPage: action.payload
      }
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload
      }
    case "SET_COMPLETED":
      return {
        ...state,
        todos: state.todos.map(todo => {
          return todo.id === action.payload ?
            {...todo, completed: !todo.completed} : todo
        })
      }
    default:
      return state;
  }
}

export { todoReducer }