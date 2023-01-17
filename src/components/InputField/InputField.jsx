import React from "react"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./InputField.module.css"
import { createTodo } from "../../services/createTodo";
import { setFilter } from "../../services/setFilter";

const InputField = (props) => {

  const filters = ["all", "completed", "uncompleted"];

  const [value, setValue] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") return;
    dispatch(createTodo(value, todos));
    setValue("");
  }

  const handleDropdownClick = () => {
    setDropdownVisible(!dropdownVisible);
  }

  return (
    <div className={s.input__container}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.form__input}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={s.form__btn} type="submit">+</button>
        <div className={s.form__dropdown} onClick={handleDropdownClick}>
          <ul className={dropdownVisible ? s.dropdown__list : s.dropdown__list_hidden}>
            {
              filters.map((filter, i) => {
                return <li onClick={(e) => dispatch(setFilter(filter))}
                  className={dropdownVisible ? s.dropdown__item : s.dropdown__item_hidden}
                  key={i}
                  >
                  {filter}
                </li>
              })
            }

            {/* <li onClick={(e) => dispatch(setFilter(e.target.textContent))}
                className={dropdownVisible ? s.dropdown__item : s.dropdown__item_hidden}>All</li>
            <li onClick={(e) => dispatch(setFilter(e.target.textContent))}
                className={dropdownVisible ? s.dropdown__item : s.dropdown__item_hidden}>Completed</li>
            <li onClick={(e) => dispatch(setFilter(e.target.textContent))}
                className={dropdownVisible ? s.dropdown__item : s.dropdown__item_hidden}>Uncompleted</li> */}
          </ul>
        </div>
      </form>
    </div>
  )
};

export default InputField;
