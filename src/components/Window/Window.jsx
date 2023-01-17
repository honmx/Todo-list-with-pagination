import React from "react"
import { useDispatch, useSelector } from "react-redux";
import s from "./Window.module.css"
import Todo from "../Todo/Todo";

const Window = (props) => {

  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.todo.currentPage);

  return (
    <div className={s.todo__container}>
      {
        props.todos.slice((currentPage - 1) * 5, currentPage * 5)
             .map(todo => {
               return <Todo key={todo.id} todo={todo} />
        })
      }
    </div>
  )
};

export default Window;
