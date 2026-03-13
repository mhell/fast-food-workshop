const OrderItem = ({id, quantity, name, price, onChangeQuantity}) => {
  return (
    <>
      <div className="fw-bold text-start" style={{flex: "1"}}>
        {name}
      </div>
      <div className="text-center" style={{flex: "1"}}>
        <button type="button" className="btn btn-light" onClick={() => onChangeQuantity(id, -1)}>
          <i className="bi bi-dash"></i>
        </button>
        <div className="d-inline-block" style={{width: "3rem"}}>{quantity}</div>
        <button type="button" className="btn btn-light"  onClick={() => onChangeQuantity(id, +1)}>
          <i className="bi bi-plus"></i>
        </button>
      </div>
      <div className="text-end" style={{flex: "1"}}>{(price * quantity).toFixed(2)} kr</div>
    </>
  );
};

export default OrderItem;