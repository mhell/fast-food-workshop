import OrderItem from "./OrderItem";

const CartModal = () => {
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
          <div className="modal-body">
            <h2 className="fs-5">Order details</h2>
            <OrderItem /> 
            <OrderItem /> 
            <OrderItem /> 
            <div className="text-end">
              Total: <span className="ms-3 fw-bold">$14.47</span>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
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
