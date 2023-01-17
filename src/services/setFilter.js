const setFilter = (filter) => {
  return {
    type: "SET_FILTER",
    payload: filter.toLowerCase()
  }
}

export { setFilter }