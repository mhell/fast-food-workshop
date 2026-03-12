import * as bootstrap from "bootstrap";
import ThemeSwitch from "./ThemeSwitch";
import ShoppingCart from "./ShoppingCart";

const Header = () => {
  return (
    <header className="container my-4">
      <div className="row my-4">
        <div className="col">
          <ThemeSwitch />
        </div>
        <div className="col text-center">
          <h1>Fast Food Menu</h1>
        </div>
        <div className="col text-end">
          <ShoppingCart />
        </div>
      </div>
    </header>
  );
};

export default Header;
