class Order {
  static identity = 0;

  constructor(foodId, quantity = 1) {
    this.id = Order.identity++;
    this.foodId = foodId;
    this.quantity = quantity;
  }
}

export default Order;