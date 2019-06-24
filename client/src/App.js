import React, { useState } from "react";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  const [route, setRoute] = useState("books");

  const setPage = page => {
    console.log("route clicked");
    setRoute(page);
  };

  return (
    <div className="App">
      <Nav goto={setPage} />
      {route === "saved" ? <Saved /> : <Search />}
    </div>
  );
}

export default App;
