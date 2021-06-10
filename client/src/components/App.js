import React from "react";
import Cart from "./Cart";
import Products from "./Products";

const App = () => {
  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart />
      </header>

      <main>
        <Products />
      </main>
    </div>
  );
};

export default App;
