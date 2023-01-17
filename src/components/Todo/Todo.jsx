import React from "react"
import { useDispatch, useSelector } from "react-redux";
import s from "./Todo.module.css"
import { deleteTodo } from "../../services/deleteTodo";
import { setCompletedTodo } from "../../services/setCompletedTodo";

const Todo = (props) => {

  const dispatch = useDispatch();
  // const state = useSelector(state => state);
  

  return (
    <div className={`${s.todo} ${props.todo.completed ? s.todo_completed : ""}` }>
      <p className={s.todo__value}>{props.todo.value}</p>
      <button className={`${s.todo__btn} ${s.todo__btn_confirm}`}
              onClick={() => dispatch(setCompletedTodo(props.todo.id))}></button>
      <button className={`${s.todo__btn} ${s.todo__btn_delete}`}
              onClick={() => dispatch(deleteTodo(props.todo.id))}></button>
    </div>
  )
};

export default Todo;
