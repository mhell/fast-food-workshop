import CartModal from "./CartModal";

const ShoppingCart = ({orders, foodItems, onChangeQuantity, onClearEmptyOrders}) => {
  return (
    <>
      <div className="text-bg-success px-4 rounded-pill d-inline-flex align-items-center" role="button" data-bs-toggle="modal" data-bs-target="#cartModal">
        <i className="bi bi-cart fs-3"></i>
        <div className="fw-bold ps-2">
          your cart
          <span className="ms-2 px-2 py-1 rounded-circle text-success bg-body">
            {orders.reduce((accumulator, order) => accumulator + order.quantity, 0)}
          </span>
        </div>
      </div>
      <CartModal orders={orders} foodItems={foodItems} onChangeQuantity={onChangeQuantity} onClearEmptyOrders={onClearEmptyOrders} />
    </>
  );
};

export default ShoppingCart;
