import React from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
