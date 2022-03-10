import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from'./components/Shop';
import Checkout from'./components/Checkout';
import FinishCheckout from'./components/FinishCheckout';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Cart } from "./components/Cart";

function App() {
  const [cart, updateCart] = Cart();

  return (
    <div className="container">
      <BrowserRouter>
        <NavBar cart={cart} updateCart={updateCart} />
        <Routes>
          <Route path="/shopping-cart" element={<Home />} />
          <Route path="/shop" element={<Shop cart={cart} updateCart={updateCart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} updateCart={updateCart} />} />
          <Route path="/finishCheckout" element={<FinishCheckout />} />
        </Routes>
        <Footer cart={cart} updateCart={updateCart} />
      </BrowserRouter>
    </div>
  );
}

export default App;
