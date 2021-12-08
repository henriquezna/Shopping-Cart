import ProductCard from "./ProductCard";
import products from "../products.json";

function Shop ({cart, updateCart}) {
  console.log("PRODUCTS", products[2]);

  //Makes an array of cards for each product
  let leng = Object.keys(products).length;
  let cards = []
  for(let i = 0; i < leng; i++){
    console.log(i);
    cards.push(<ProductCard cart={cart} updateCart={updateCart} name={products[i.toString()]["name"]} />);
  }

  return (
    <div className="Shop">
      <h1>Shop!</h1>
      {cards}
    </div>
  );
}

export default Shop;