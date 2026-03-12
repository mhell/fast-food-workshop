class Order {
  static identity = 0;

  constructor(foodId, quantity) {
    this.id = Order.identity++;
    this.foodId = foodId;
    this.quantity = quantity;
  }
}

export default Order;