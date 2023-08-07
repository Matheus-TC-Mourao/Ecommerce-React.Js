import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();
export default function CartProvider({ children }) {
	const [cart, setCart] = useState([]);

	const [itemAmount, setItemAmount] = useState(0);

	const addToCart = (product, id) => {
		const newItem = { ...product, amount: 1 };

		const cartItem = cart.find((item) => {
			return item.id === id;
		});
		if (cartItem) {
			const newcart = [...cart].map((item) => {
				if (item.id === id) {
					return { ...item, amount: cartItem.amount + 1 };
				} else {
					return item;
				}
			});
			setCart(newcart);
		} else {
			setCart([...cart, newItem]);
		}
	};

	const removeFromCart = (id) => {
		const newCart = cart.filter((item) => {
			return item.id !== id;
		});
		setCart(newCart);
	};

	// clear cart
	const clearCart = () => {
		setCart([]);
	};

	// incrementar amount
	const increaseAmount = (id) => {
		const cartItem = cart.find((item) => item.id === id);
		addToCart(cartItem, id);
	};

	// decrementar amount
	const decreaseAmount = (id) => {
		const cartItem = cart.find((item) => item.id === id);
		if (cartItem) {
			const newCart = cart.map((item) => {
				if (item.id === id) {
					return { ...item, amount: cartItem.amount - 1 };
				} else {
					return item;
				}
			});
			setCart(newCart);
		}
		if (cartItem.amount < 2) {
			removeFromCart(id);
		}
	};

	// update amount item
	useEffect(() => {
		if (cart) {
			const amount = cart.reduce((accumulator, currentItem) => {
				return accumulator + currentItem.amount;
			}, 0);
			setItemAmount(amount);
		}
	}, [cart]);

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				clearCart,
				increaseAmount,
				decreaseAmount,
				itemAmount,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
