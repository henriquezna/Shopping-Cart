import aloe from '../images/aloe-vera.jpg';
import snake from '../images/snake-plant.jpg';
import philodendron from '../images/philodendron.jpg';
import lily from '../images/lily.jpg';

function ProductCard ({cart, updateCart, id, name, description, price}) {
  //Converts json value to img file location
  let picture;
  if(name === 'Aloe'){
      picture = aloe;
  }else if(name === 'Snake Plant'){
      picture = snake;
  }else if(name === 'Philodendron'){
      picture = philodendron;
  }else if(name === 'Lily'){
      picture = lily;
  }
  
  //Each input has an amountID to get value later
  return (
    <div className="ProductCard">
      <h2>{name}</h2>
      <img src={picture} alt="Indoor Plant" width="75%" height="100%" /> 
      <p>{description}</p>
      <p>{'$'+price}</p>
      <form>
        <label htmlFor="amount">Amount</label>
        <input type="number" id={"amount" + id} name="amount" min="1" />
      </form>
      <button onClick={(e) => updateCart([id, name])} >Add to cart</button>
    </div>
  );
}

export default ProductCard;