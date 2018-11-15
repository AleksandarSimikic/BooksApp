import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteBook } from '../actions/bookAction';

class Books extends Component {

    handleClick = (e) => {
        this.props.deleteBook(this.props.book.id);
        this.props.history.push('/');
    }

    render(){
        const book = this.props.book ? (
            <div className="book card">
                <div className="card-content">
                    <span className="card-title red-text">{this.props.book.title}</span>
                    <p>Author: {this.props.book.author}</p>  
                    <button className="btn red" onClick={this.handleClick}>
                        Delete
                    </button>
                </div>
            </div> 
        ) : (
            <div className="center">No such books with selected id</div>
        );

        return(
            <div className="container">
                {book}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = parseInt(ownProps.match.params.book_id);
    return{
        book: state.books.find(book => book.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        deleteBook: (id) => { dispatch(deleteBook(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books)
