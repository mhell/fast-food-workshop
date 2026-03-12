import { useState } from "react";
import Header from "./Header";
import FoodItemList from "./FoodItemList";
import ThemeSwitch from "./ThemeSwitch";
import ShoppingCart from "./ShoppingCart";
import Food from "../model/Food";
import Order from "../model/Order";

const FOODITEMS = [
  new Food("Burger", "A delicious burger with all the fixings.", 79.99),
  new Food("Pizza", "A classic pizza with your favorite toppings.", 99.99),
  new Food("Fries", "Crispy golden fries served hot and fresh.", 59.99),
  new Food("Burger", "A delicious burger with all the fixings.", 79.99),
  new Food("Pizza", "A classic pizza with your favorite toppings.", 99.99),
  new Food("Fries", "Crispy golden fries served hot and fresh.", 59.99)
];

let orders = [
  new Order(1, 2),
  new Order(3, 1)
];

function App() {
  return (
    <>
      <Header>
        <ThemeSwitch />
        <ShoppingCart orders={orders} />
      </Header>
      <FoodItemList foodItems={FOODITEMS} />
    </>
  );
}

export default App;
