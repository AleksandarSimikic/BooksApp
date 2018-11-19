import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateBook } from '../actions/bookAction'

class UpdateBook extends Component {

    state = {
        book:  this.props.book
    }

    handleChange = e => {
        e.preventDefault();
        const newBook = {
            [e.target.id]: e.target.value,
        };
        this.setState(({ book }) => ({
            book: {
                ...book,
                ...newBook
            }
        }))
        console.log(this.state.book)
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.updateBook({
            book: this.state.book,
        });
        this.props.history.push('/');
        
    }

    render(){
        return(
            <div className="container center updateBook">
                UPDATE NEW BOOK
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="author">Author:</label>
                    <input type="text" id="author" value={this.state.book.author} onChange={this.handleChange} />
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" value={this.state.book.title} onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = parseInt(ownProps.match.params.book_id);
    return{
        book: state.books.find(book => book.id === id),
        books: state.books
    }
}

const mapDispatchToProps = dispatch => {
    return{
        updateBook: (book) => { dispatch(updateBook(book))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateBook)