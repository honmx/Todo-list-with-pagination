import React from "react"
import s from "./App.module.css";
import InputField from "./components/InputField/InputField";
import Window from "./components/Window/Window";
import Pagination from "./components/Pagination/Pagination";
import { useSelector } from "react-redux";

const App = (props) => {

  const state = useSelector(state => state.todo);

  const filteredTodos = state.todos.filter(todo => {
    if (state.filter === "all") return todo;
    if (state.filter === "completed") return todo.completed
    return !todo.completed;
  })

  return (
    <div className={s.root__container}>
      <div className={s.app__container}>
        <InputField />
        <Window todos={filteredTodos}/>
        <Pagination todos={filteredTodos}
                    currentPage={state.currentPage}/>
      </div>
    </div>
  )
};

export default App;
