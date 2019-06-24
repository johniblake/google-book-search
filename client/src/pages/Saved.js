import React, { Component } from "react";
import API from "../utils/API";
import "../styles/Saved.css";
import { BookList, BookListItem } from "../components/BookList/index.js";

class Saved extends Component {
  state = {
    books: [],
    error: null
  };

  componentDidMount() {
    this.loadBooks();
  }

  deleteBook = id => {
    console.log(id);
    API.deleteBook(id)
      .then(() => {
        this.loadBooks();
      })
      .catch(err => {
        console.log(err);
      });
  };

  loadBooks = () => {
    API.getBooks()
      .then(books => {
        console.table(books.data);
        this.setState({ books: books.data });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          books: {
            error: "Oops! Something went wrong while fetching your books."
          }
        });
      });
  };

  displayBooks = () => {
    if (this.state.books.error) return this.state.books.error;
    if (!this.state.books.length) return "You don't have any books saved.";

    return (
      <BookList deleteBook={this.deleteBook}>
        {this.state.books.map(book => {
          return (
            <BookListItem
              listType="saved"
              key={book._id}
              onClick={this.deleteBook}
              {...book}
            />
          );
        })}
      </BookList>
    );
  };

  render() {
    return (
      <div>
        {this.state.books ? this.displayBooks() : "Loading Saved Books..."}
      </div>
    );
  }
}

export default Saved;
