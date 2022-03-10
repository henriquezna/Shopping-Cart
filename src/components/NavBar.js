import { NavLink } from 'react-router-dom'

function NavBar ({cart, updateCart}) {
  return (
    <div className="Navbar">
        <ul className="navbar__items">
          <li><NavLink to="/shopping-cart">PlantsRUs</NavLink></li>
          <li><NavLink to="shop">Shop</NavLink></li>
          <li className="navRight"><NavLink to="checkout">Checkout</NavLink><div className="navRight__items">{cart.length}</div></li>
        </ul>
    </div>
  );
}

export default NavBar;