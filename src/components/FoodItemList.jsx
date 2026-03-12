import FoodItem from "./FoodItem";

const FoodItemList = ({foodItems}) => {
  return (
    <main className="container my-5">
      <div className="row g-4 row-cols-3">
        {
          foodItems.map((foodItem) => (
            <div key={foodItem.id} className="col">
              <FoodItem id={foodItem.id} name={foodItem.name} description={foodItem.description} price={foodItem.price} />
            </div>
          ))
        }
      </div>
    </main>
  );
};

export default FoodItemList;
