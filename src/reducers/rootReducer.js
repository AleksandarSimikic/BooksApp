import update from 'react-addons-update'
const initState = {
    books: [
        {
            "userId": 1,
            "id": 1,
            "title": "How to play Bristleback like a pro",
            "author": "Aleksandar Simikic"
          },
          {
            "userId": 1,
            "id": 2,
            "title": "How to play Obsidian like a pro",
            "author": "Aleksandar Simikic"
          },
          {
            "userId": 5,
            "id": 3,
            "title": "How to play Weaver like a pro",
            "author": "Luka Damjanac"
          },
          {
            "userId": 5,
            "id": 4,
            "title": "How to play Axe like a pro",
            "author": "Luka Damjanac"
          },
          {
            "userId": 2,
            "id": 5,
            "title": "How to play Guitar like a pro",
            "author": "Acko Spasic"
          },
          {
            "userId": 2,
            "id": 6,
            "title": "How to play Basketball like a pro",
            "author": "Acko Spasic"
          },
          {
            "userId": 2,
            "id": 7,
            "title": "How to kick some ass like a pro",
            "author": "Acko Spasic"
          },
          {
            "userId": 4,
            "id": 8,
            "title": "How to drink Vinjak like a pro",
            "author": "Stefan Glisic"
          },
          {
            "userId": 3,
            "id": 9,
            "title": "How to shoot people from 2 miles like a pro",
            "author": "Vukasin Bojic"
          },
          {
            "userId": 3,
            "id": 10,
            "title": "How to say Hohoho like a pro",
            "author": "Vukasin Bojic"
          }
    ]
}


const rootReducer = (state = initState, action) => {
  switch(action.type){
    case "DELETE_BOOK":
      let newBooks = state.books.filter(book => {
        return action.id !== book.id
      })
      return{
        ...state,
        books: newBooks
      };
    case "ADD_BOOK":
      let newBook = [action.book.book];
      let newState = update(state.books, {$push: newBook})
      return{
        ...state,
        books: newState
      };
    case "UPDATE_BOOK":
      let updatedBook = action.book.book // azurirana knjiga iz akcije update_book
      console.log(updatedBook)
      let newUpBooks = state.books.map(book => { // koristimo map funkciju da mijenjamo element niza
        /*if(book.id === updatedBook.id){
          book = updatedBook;
        }
        return book;*/ //simple return
        return book.id === updatedBook.id ? updatedBook : book //ako je uslov ispunjen, mijenjamo knjigu sa odgovarajucim id-jem sa azuriranom knjigom.
      })
      console.log(newUpBooks)
      return{
        ...state,
        books: newUpBooks
      }
    default:
      return state;
      
  }
}

export default rootReducer