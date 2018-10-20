import React, { Component } from 'react'
import { connect } from 'react-redux'

class Books extends Component {
    render(){
        const book = this.props.book ? (
            <div className="book card">
                <div className="card-content">
                    <span className="card-title red-text">{this.props.book.title}</span>
                    <p>Author: {this.props.book.author}</p>           
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

export default connect(mapStateToProps)(Books)
