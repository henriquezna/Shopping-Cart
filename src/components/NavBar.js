import { Link, NavLink } from 'react-router-dom'

function NavBar ({cart, updateCart}) {
  return (
    <div className="Navbar">
        <ul>
          <li><NavLink to="/">Plants</NavLink></li>
          <li><NavLink to="shop">Shop</NavLink></li>
          <li className="navRight"><div>{cart.length}</div></li>
          <li className="navRight"><NavLink to="checkout">Checkout</NavLink></li>
        </ul>
    </div>
  );
}

export default NavBar;