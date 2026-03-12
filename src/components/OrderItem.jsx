const OrderItem = () => {
  return (
    <div className="d-flex align-items-center justify-content-between my-3">
      <div className="fw-bold text-start" style={{flex: "1"}}>Cheeseburger</div>
      <div className="text-center" style={{flex: "1"}}>
        <button type="button" className="btn btn-light">
          <i className="bi bi-dash"></i>
        </button>
        <span className="mx-3">2</span>
        <button type="button" className="btn btn-light">
          <i className="bi bi-plus"></i>
        </button>
      </div>
      <div style={{flex: "1"}}>$6.99</div>
    </div>
  );
};

export default OrderItem;