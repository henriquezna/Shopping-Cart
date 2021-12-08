import indoorPlant from '../images/indoorPlant.jpg'

function ProductCard ({cart, updateCart, name}) {
  return (
    <div className="ProductCard">
      <h2>{name}</h2>
      <img src={indoorPlant} alt="Indoor Plant" width="75%" height="100%" /> 
      <p>This is a plant!</p>
      <form>
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" name="amount" min="1" />
      </form>
      <button onClick={(e) => updateCart(name)} >Add to cart</button>
    </div>
  );
}

export default ProductCard;