import CheckoutCard from "./CheckoutCard";
import products from "../products.json";

function Checkout ({cart, updateCart}) {
  //Makes an array of cards for each product
  let cards = []
  for(let i = 0; i < cart.length; i++){
    cards.push(<CheckoutCard cart={cart} updateCart={updateCart} name={products[cart[i][0]]["name"]} description={products[cart[i][0]]["description"]} image={products[cart[i][0]]["image"]} price={products[cart[i][0]]["price"]} />);
  }

  //Calculates the total
  let total = 0;
  for(let i = 0; i < cart.length; i++){
    total += products[cart[i][0]]["price"];
  }
  
  return (
    <div className="Checkout">
      <h1>Checkout!</h1>
      <h2>{cards}</h2>
      <p>{'Total: '+total}</p>
      <button onClick={() => window.location.href="/finishCheckout"}>Checkout</button>
    </div>
  );
}

export default Checkout;