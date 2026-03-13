import { useState } from "react";
import Header from "./Header";
import FoodItemList from "./FoodItemList";
import ThemeSwitch from "./ThemeSwitch";
import ShoppingCart from "./ShoppingCart";
import Checkout from "./Checkout";
import Food from "../model/Food";
import Order from "../model/Order";

const FOODITEMS = [
  new Food("Burger", "A delicious burger with all the fixings.", 79.99, "/src/assets/burger.jpg"),
  new Food("Pizza", "A classic pizza with your favorite toppings.", 99.99, "/src/assets/pizza.jpg"),
  new Food("Fries", "Crispy golden fries served hot and fresh.", 59.99, "/src/assets/fries.jpg"),
  new Food("Hot Dog", "A grilled hot dog in a soft bun.", 49.99, "/src/assets/hotdog.jpg"),
  new Food("Chicken Nuggets", "Juicy chicken nuggets with a crispy coating.", 69.99, "/src/assets/nuggets.jpg"),
  new Food("Milkshake", "A thick and creamy milkshake.", 54.99, "/src/assets/milkshake.jpg"),
];

function App() {
  const [orders, setOrders] = useState([])

  function addOrder(foodId) {
    const found = orders.find((order) => order.foodId === foodId);
    if (found) {
      // increase quantity if exist
      found.quantity++;
      setOrders([...orders]);
    } else {
      // add new otherwise
      setOrders([...orders, new Order(foodId)]);
    }
  }

  function changeQuantity(orderId, change) {
    orders.forEach((origOrder) => {
      if (origOrder.id === orderId && origOrder.quantity + change >= 0) {
        origOrder.quantity += change;
      }
    });
    setOrders([...orders]);
  }

  function clearEmptyOrders() {
    const clearedOrders = orders.filter((order) => order.quantity > 0);
    setOrders([...clearedOrders]);
  }
   
  return (
    <>
      <Header>
        <ThemeSwitch />
        <ShoppingCart orders={orders} foodItems={FOODITEMS} onChangeQuantity={changeQuantity} onClearEmptyOrders={clearEmptyOrders} />
      </Header>
      <FoodItemList foodItems={FOODITEMS} onNewOrder={addOrder}/>
      <Checkout orders={orders} foodItems={FOODITEMS} onChangeQuantity={changeQuantity} onClearEmptyOrders={clearEmptyOrders} />
    </>
  );
}

export default App;
