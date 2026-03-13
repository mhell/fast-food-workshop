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
        <span className="mx-3">{quantity}</span>
        <button type="button" className="btn btn-light"  onClick={() => onChangeQuantity(id, +1)}>
          <i className="bi bi-plus"></i>
        </button>
      </div>
      <div style={{flex: "1"}}>SEK {(price * quantity).toFixed(2)}</div>
    </>
  );
};

export default OrderItem;