import CartModal from "./CartModal";

const ShoppingCart = () => {
  return (
    <>
      <div role="button" data-bs-toggle="modal" data-bs-target="#cartModal">
        <i className="bi bi-cart fs-3"></i>
        <span className="fs-5 ps-2">2</span>
      </div>
      <CartModal />
    </>
  );
};

export default ShoppingCart;