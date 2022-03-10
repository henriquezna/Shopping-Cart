import { NavLink } from 'react-router-dom'

function Footer ({cart, updateCart}) {
  return (
    <div className="Footer">
        <ul>
          <li><NavLink to="/shopping-cart">PlantsRUs</NavLink></li>
          <li><NavLink to="shop">Shop</NavLink></li>
          <li className="navRight"><NavLink to="checkout">Checkout</NavLink><div className="navRight__items Footer_navRight__items">{cart.length}</div></li>
        </ul>

        <ul className="footer__socials">
          <li><NavLink to="/shopping-cart">Twitter</NavLink></li>
          <li><NavLink to="shop">Facebook</NavLink></li>
          <li><div className="footer__copy">Copywrite henriquezna, Plants R US Co LTD TM, USA</div></li>
        </ul>
    </div>
  );
}

export default Footer;