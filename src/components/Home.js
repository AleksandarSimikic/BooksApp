import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends Component {
    render(){
        console.log(this.props.books)
        const { books } = this.props
        const bookList = books.length ? (
        books.map(book => {
        return (
          <div className="book card" key={book.id}>
            <div className="card-content">
              <Link to={'/' + book.id}>
                <span className="card-title red-text">{book.title}</span>
              </Link>
              <p>Author: {book.author}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No books to show</div>
    );
        
        return (
            <div className = "shit">
                <div className="container home">
                    <h4 className="center blue-text">Books</h4>
                    {bookList}
                </div>
                <footer className="foot">
                        <div className="footer-copyright blue darken-5">
                            <div>
                                © 2018 Copyright Text authored by Aleksandar Simikic
                            </div>
                        </div>
                    
                </footer>
            </div>
            
        )
    }
}
const mapStateToProps = (state) => ({
        books: state.books
});


export default connect(mapStateToProps)(Home)