
const Header = ({children}) => {
  return (
    <header className="container my-4">
      <div className="row d-flex align-items-center my-4">
        <div className="col">
          {children[0]}
        </div>
        <div className="col text-center">
          <h1>Fast Food Menu</h1>
        </div>
        <div className="col text-end">
        {children[1]}
        </div>
      </div>
    </header>
  );
};

export default Header;
