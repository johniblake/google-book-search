import React from "react";
import "./style.css";

function Nav({ goto }) {
  return (
    <div className="nav">
      <div onClick={() => goto("search")}>Search Books</div>
      <div onClick={() => goto("saved")}>Saved Books</div>
    </div>
  );
}

export default Nav;
