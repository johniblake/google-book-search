import React, { Component } from "react";
import API from "../utils/API";
import "../styles/Saved.css";

class Saved extends Component {
  state = {
    books: [],
    error: null
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks() {
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
  }

  displayBooks = () => {
    if (this.state.books.error) return this.state.books.error;
    if (!this.state.books.length) return "You don't have any books saved.";

    return this.state.books.map(book => {
      return (
        <div key={book._id}>
          <a href={book.link}>
            <strong>{book.title}</strong>
          </a>
          by {[book.authors]}
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        Saved Books
        <div>
          {this.state.books ? this.displayBooks() : "Loading Saved Books..."}
        </div>
      </div>
    );
  }
}

export default Saved;
