import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Title from "./components/Body/Title/Title";
import Body from "./components/Body/Body";

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <Body />
    </div>
  );
}

export default App;
