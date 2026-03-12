import CartModal from "./CartModal";

const ShoppingCart = () => {
  return (
    <>
      <div className="text-bg-success px-4 rounded-pill d-inline-flex align-items-center" role="button" data-bs-toggle="modal" data-bs-target="#cartModal">
        <i className="bi bi-cart fs-3"></i>
        <div className="fw-bold ps-2">
          your cart <span className="ms-1 px-2 py-1 rounded-circle text-success bg-body">2</span>
        </div>
      </div>
      <CartModal />
    </>
  );
};

export default ShoppingCart;