const OrderItem = () => {
  return (
    <div className="d-flex align-items-center justify-content-between my-3">
      <div>Cheeseburger</div>
      <div>
        <button type="button" class="btn btn-light">
          <i class="bi bi-dash"></i>
        </button>
        <span className="mx-3">2</span>
        <button type="button" class="btn btn-light">
          <i class="bi bi-plus"></i>
        </button>
      </div>
      <div>$6.99</div>
    </div>
  );
};

export default OrderItem;