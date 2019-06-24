import React, { Component } from "react";
//import googleAPI from "../utils/googleAPI";
import SearchBar from "../components/SearchBar";
import "../styles/Search.css";
import googleAPI from "../utils/googleAPI";
import { BookListItem, BookList } from "../components/BookList";
import API from "../utils/API";

class Search extends Component {
  state = {
    books: []
  };

  handleFormSubmit = term => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    console.log(term);

    googleAPI
      .search(term)
      .then(res => {
        console.log(res);
        let books = res.data.items.map(item => {
          let book = item.volumeInfo;
          if (!book.imageLinks) {
            book.imageLinks = {
              thumbnail:
                "https://blog.springshare.com/wp-content/uploads/2010/02/gc-md.gif"
            };
          }

          return {
            title: book.title,
            authors: book.authors,
            image: book.imageLinks.thumbnail,
            description: book.description || "No description.",
            link: book.canonicalVolumeLink
          };
        });
        this.setState({ books: books });
      })
      .catch(err => console.log(err));
  };

  saveBook = data => {
    console.log("book to save:");

    console.log(data);

    let book = {
      title: data.title,
      authors: data.authors,
      description: data.description,
      image: data.image,
      link: data.link
    };

    API.saveBook(book)
      .then()
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <SearchBar search={this.handleFormSubmit} />
        <BookList listType="search">
          {this.state.books.length > 0
            ? this.state.books.map(book => {
                return (
                  <BookListItem
                    key={book._id}
                    onClick={this.saveBook}
                    {...book}
                  />
                );
              })
            : "Search For some books!"}
        </BookList>
      </>
    );
  }
}

export default Search;
