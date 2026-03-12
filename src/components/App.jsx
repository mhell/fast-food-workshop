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

function App() {
  const [orders, setOrders] = useState([])

  function addOrder(foodId) {
    const found = orders.find((order) => order.id === foodId);
    if (found) {
      // increase quantity if exist
      found.quantity++;
      setOrders([...orders]);
    } else {
      // add new otherwise
      setOrders([...orders, new Order(foodId)]);
    }
  }
  
  return (
    <>
      <Header>
        <ThemeSwitch />
        <ShoppingCart orders={orders} />
      </Header>
      <FoodItemList foodItems={FOODITEMS} onNewOrder={addOrder}/>
    </>
  );
}

export default App;
