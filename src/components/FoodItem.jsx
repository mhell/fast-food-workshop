import React from "react";

const FoodItem = ({id, name, description, price, onNewOrder}) => {
  return (
    <div className="card text-bg-light">
      <div className="p-3">
        <img src="https://placehold.co/600x400" className="card-img-top rounded" alt="Burger" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          {description}
        </p>
        <p className="fw-bold">SEK {price}</p>
        <button href="#" className="btn btn-success" onClick={() => onNewOrder(id)}>
          Add to order
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
