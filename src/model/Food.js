class Food {
  static identity = 0;

  constructor(name, description, price, image) {
    this.id = Food.identity++;
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
  }
}

export default Food;