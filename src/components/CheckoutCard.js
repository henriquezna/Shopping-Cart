import aloe from '../images/aloe-vera.jpg';
import snake from '../images/snake-plant.jpg';
import philodendron from '../images/philodendron.jpg';
import lily from '../images/lily.jpg';

function CheckoutCard ({cart, updateCart, name, description, image, price}) {
    //Converts json value to img file location
    let picture;
    if(image === 'aloe'){
        picture = aloe;
    }else if(image === 'snake'){
        picture = snake;
    }else if(image === 'philodendron'){
        picture = philodendron;
    }else if(image === 'lily'){
        picture = lily;
    }

    return (
      <div className="Checkout">
        <h2>{name}</h2>
        <p>{description}</p>
        <img src={picture} alt="PLANT"></img>
        <p>{'$'+price}</p>
      </div>
    );
  }
  
  export default CheckoutCard;