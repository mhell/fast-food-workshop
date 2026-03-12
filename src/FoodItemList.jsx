import FoodItem from "./FoodItem";

const FoodItemList = () => {
  return (
    <main className="container my-5">
      <div className="row g-4 row-cols-3">
        <div className="col"><FoodItem /></div>
        <div className="col"><FoodItem /></div>
        <div className="col"><FoodItem /></div>
        <div className="col"><FoodItem /></div>
        <div className="col"><FoodItem /></div>
        <div className="col"><FoodItem /></div>
      </div>
    </main>
  );
};

export default FoodItemList;
