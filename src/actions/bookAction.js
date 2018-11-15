export const deleteBook = (id) => {
    return{
        type: 'DELETE_BOOK',
        shouldConfirm: true,
        id
    }
}

export const addBook = (book) =>{
    return{
        type: 'ADD_BOOK',
        book
    }
}
