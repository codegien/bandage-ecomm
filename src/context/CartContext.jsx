import React, { createContext, useState } from "react";
import { notify } from "../hooks/toastconfig";

const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (selectedItem) => {
		if (selectedItem) {
			if (cart.length > 0) {
				setCart([...cart, selectedItem]);
			} else {
				setCart([selectedItem]);
			}
			notify("New item added to cart");
		}
	};
	return (
		<CartContext.Provider value={{ cart, addToCart }}>
			{children}
		</CartContext.Provider>
	);
};

export { CartContext, CartProvider };
