import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addBook } from '../actions/bookAction'

class AddBook extends Component {
    state = {
        book: {
            userId: Math.round(Math.random()*100),
            id: Math.round(Math.random()*100),
            
            title: '',
            author: '',
            
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.addBook({
            book: this.state.book,
        });
        this.props.history.push('/');
        // reset state
        this.setState({
            book: {
                userId: Math.round(Math.random()*100),
                id: Math.round(Math.random()*100),
                
                title: '',
                author: '',
            }
        })
    }

    /*handleAuthorChange = (e) => {
        const author = e.target.value;
        this.setState(({ book }) => ({
            book: {
                ...book,
                author,
            },
        }), () => {console.log(this.state); });
    }*/

    handleChange = e => {
        //console.log(e.currentTarget)
        const newBook = {
            [e.target.id]: e.target.value,
        };
        this.setState(({ book }) => ({
            book: {
                ...book,
                ...newBook
            }
        }), /*() => { console.log(this.state.book);*/ );
    }

    render(){
        console.log(this.props);

        return(
            <div className="container center addbook">
                ADD NEW BOOK
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="author">Author:</label>
                    <input type="text" id="author" value={this.state.book.author} onChange={this.handleChange} />
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" value={this.state.book.title} onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
      books: state.books
    }
  }

const mapDispatchToProps = dispatch => {
    return{
        addBook: (book) => { dispatch(addBook(book))}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AddBook)
