import React from "react";

const FoodItem = () => {
  return (
    <div className="card">
      <img src="https://placehold.co/600x400" className="card-img-top" alt="Burger" />
      <div className="card-body">
        <h5 className="card-title">Burger</h5>
        <p className="card-text">
          A delicious burger with all the fixings.
        </p>
        <p className="fw-bold">SEK 79.99</p>
        <a href="#" className="btn btn-success">
          Add to order
        </a>
      </div>
    </div>
  );
};

export default FoodItem;
