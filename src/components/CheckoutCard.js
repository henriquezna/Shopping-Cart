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
      <div className="Checkout__card">
        <div>{name}</div>
        <img src={picture} alt="PLANT"></img>
        <div>{'$'+price}</div>
      </div>
    );
  }
  
  export default CheckoutCard;