import * as bootstrap from 'bootstrap'
import ThemeSwitch from './ThemeSwitch';
import ShoppingCart from './ShoppingCart';

const Header = () => {
  return (
    <header className="container d-flex justify-content-between align-items-center my-4">
      <ThemeSwitch />
      <h1>Fast Food Menu</h1>
      <ShoppingCart />
    </header>
  );
};

export default Header;