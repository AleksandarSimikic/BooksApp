export const deleteBook = (id) => {
  return {
    type: 'DELETE_BOOK',
    shouldConfirm: true,
    id
  }
}

export const addBook = (book) => {
  return {
    type: 'ADD_BOOK',
    book
  }
}

export const updateBook = (book) => {
  return {
    type: "UPDATE_BOOK",
    shouldConfirm: true,
    book
  }
}
