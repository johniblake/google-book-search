import React from "react";
import Thumbnail from "../Thumbnail";
import "./style.css";
import Button from "../Button";
// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function BookList({ children }) {
  return <div className="list">{children}</div>;
}

// BookListItem renders a bootstrap list item containing data from the Book api call
export function BookListItem({ listType, ...props }) {
  console.log(props);

  return (
    <div className="book-container">
      <div className="thumbnail-container">
        <Thumbnail src={props.image} />
      </div>
      <div className="info-container">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <a rel="noreferrer noopener" target="_blank" href={props.link}>
          Go to book!
        </a>
        {listType === "saved" ? (
          <Button className={"delete"} onClick={() => props.onClick(props._id)}>
            Delete
          </Button>
        ) : (
          <Button className={"save"} onClick={() => props.onClick(props)}>
            Save
          </Button>
        )}
      </div>
    </div>
  );
}
