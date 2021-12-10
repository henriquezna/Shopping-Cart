import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from'./components/Shop';
import Checkout from'./components/Checkout';
import FinishCheckout from'./components/FinishCheckout';
import NavBar from './components/NavBar';
import { Cart } from "./components/Cart";

function App() {
  const [cart, updateCart] = Cart();

  return (
    <div>
      <BrowserRouter>
        <NavBar cart={cart} updateCart={updateCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop cart={cart} updateCart={updateCart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} updateCart={updateCart} />} />
          <Route path="/finishCheckout" element={<FinishCheckout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
