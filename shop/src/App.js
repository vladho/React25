import React from "react";
import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Section from "./components/Section/Section";
import Cart from "./components/Cart/Cart"

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Cart />
      {/* <Counter title="We test our counter"/> */}
    </>
  );
};

export default App;
