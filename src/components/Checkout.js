function Checkout ({cart, updateCart}) {
  return (
    <div className="Checkout">
      <h1>Checkout!</h1>
      <h2>{cart}</h2>
    </div>
  );
}

export default Checkout;