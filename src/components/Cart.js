import { useState } from "react";

export const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    function updateCart(newItem) {
        let newArr = [...cartItems];
        let amount = document.querySelector('#amount'+newItem[0]).value;
        for(let i = 0; i < amount; i++){
            newArr.push(newItem)
            setCartItems(newArr);
        }
    }

    return [cartItems, updateCart];
}