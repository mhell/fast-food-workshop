import React from "react";

const FoodItem = ({id, name, description, price, image, onNewOrder}) => {
  return (
    <div className="food-item card text-bg-light">
      <div className="p-3">
        <img src={image} className="card-img-top rounded" alt={name} />
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
