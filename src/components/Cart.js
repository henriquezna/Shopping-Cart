import { useState } from "react";

export const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    function updateCart(newItem) {
        let newArr = [...cartItems];
        let amount = document.querySelector('#amount').value;
        for(let i = 0; i < amount; i++){
            newArr.push(newItem)
            setCartItems(newArr);
        }
        console.log(cartItems);
    }

    return [cartItems, updateCart];
}