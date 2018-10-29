export const deleteBook = (id) => {
    return{
        type: 'DELETE_BOOK',
        id
    }
}

export const addBook = () =>{
    return{
        type: 'ADD_BOOK'
    }
}