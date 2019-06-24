import axios from "axios";

export default {
  // Gets all books
  search: function(terms) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${terms}`);
  }
};
