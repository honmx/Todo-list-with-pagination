import React from "react"
import { useDispatch, useSelector } from "react-redux";
import s from "./Pagination.module.css"
import { setPage } from "../../services/setPage";

const Pagination = (props) => {

  const dispatch = useDispatch();

  const pages = props.todos.filter((todo, i) => {
    return i % 5 === 0;
  });

  // debugger;
  // if (props.currentPage > pages.length && pages.length !== 0) dispatch(setPage(1));

  const handleClick = (e) => {
    dispatch(setPage(Number(e.target.textContent)));
  }

  return (
    <div className={s.pagination}>
      {
        pages.length > 1 &&
        pages.map((page, i) => {
          return <button className={s.pagination__btn} key={i} onClick={handleClick}>{i + 1}</button>
        })
      }
    </div>
  )
};

export default Pagination;
