class Food {
  static identity = 0;

  constructor(name, description, price) {
    this.id = Food.identity++;
    this.name = name;
    this.description = description;
    this.price = price;
  }
}

export default Food;