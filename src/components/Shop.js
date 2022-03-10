import ProductCard from "./ProductCard";
import products from "../products.json";

function Shop ({cart, updateCart}) {
  //Makes an array of cards for each product
  let leng = Object.keys(products).length;
  let cards = []
  for(let i = 0; i < leng; i++){
    cards.push(<ProductCard cart={cart} updateCart={updateCart} id={i} name={products[i.toString()]["name"]} description={products[i.toString()]["description"]} price={products[i.toString()]["price"]} />);
  }

  return (
    <div className="Shop">
      <h1 className="Shop__title">Plants for any Season!</h1>
      <div className="cardContainer">
        {cards}
      </div>
    </div>
  );
}

export default Shop;