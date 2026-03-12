import OrderItem from "./OrderItem";

const CartModal = ({orders, foodItems, onChangeQuantity, onClearEmptyOrders}) => {
  return (
    <div className="modal fade" id="cartModal" tabIndex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header justify-content-between">
            <h1 className="modal-title fs-3 flex-grow-1 text-center" id="cartModalLabel">
              Your Order
            </h1>
            <button type="button" className="btn-close ms-0" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body d-flex flex-column">
            <h2 className="fs-5 text-start mb-3">Order details</h2>
            {
              orders.length == 0 ? 
                <div className="text-center my-5 fs-5">Your cart is empty</div>
                : 
                orders.map((order) => {
                  const foodItem = foodItems.find((f) => f.id === order.foodId);
                  return (
                    <div key={order.id} className="d-flex align-items-center justify-content-between my-2">
                      <OrderItem id={order.id} quantity={order.quantity} name={foodItem?.name} price={foodItem?.price} onChangeQuantity={onChangeQuantity} /> 
                    </div>
                  )
                })
            }
            <div className="text-end mt-auto pt-3">
              Total: SEK
              <span className="ms-3 fw-bold">
                {orders.reduce((accumulator, order) => {
                    const price = foodItems.find((f) => f.id === order.foodId)?.price;
                    return accumulator + price * order.quantity;
                  }, 0).toFixed(2)
                }
              </span>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => onClearEmptyOrders()}>
              Cancel
            </button>
            <button type="button" className="btn btn-success">
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
