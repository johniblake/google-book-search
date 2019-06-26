import React, { Component } from "react";
import Input from "../Input";
import Button from "../Button";

import "./style.css";

export default class SearchBar extends Component {
  state = {
    query: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    event.preventDefault();
    console.log(event.target.value);

    const { value } = event.target;
    this.setState({
      query: value
    });
  };

  handleSearch = () => {
    this.props.search(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <div className="search-bar-container">
        <Input
          onChange={this.handleInputChange}
          value={this.state.query}
          placeholder="Search For a Book"
        />
        <Button className="search" onClick={this.handleSearch}>
          Search
        </Button>
      </div>
    );
  }
}
