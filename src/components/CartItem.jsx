import React, { useContext } from 'react';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/Cartcontext';

export default function CartItem({ item }) {
	const { removeFromCart, increaseAmount, decreaseAmount } =
		useContext(CartContext);
	const { id, title, price, image, amount } = item;

	return (
		<div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500 px-4">
			<div className="w-full min-h-[150px] flex items-center gap-x-4 ">
				{/* image */}
				<Link to={`/product/${id}`}>
					<img className="max-w-[80px]" src={image} alt={title} />
				</Link>
				<div className="w-full flex flex-col">
					{/* title and remove */}
					<div className="flex justify-between mb-2">
						<Link
							className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
							to={`/product/${id}`}
						>
							{title}
						</Link>
						{/* remove icon */}
						<div
							onClick={() => removeFromCart(id)}
							className="cursor-pointer text-2xl ml-2"
						>
							<IoMdClose className="text-gray-500 hover:text-red-500 hover:scale-125 transition duration-200" />
						</div>
					</div>
					<div className=" flex gap-x-2 h-[36px] text-sm">
						{/* quantidade */}
						<div className="flex flex-1 max-w-[100px]  items-center h-full border text-primary font-medium">
							{/* diminuir */}
							<div
								onClick={() => decreaseAmount(id)}
								className="flex-1 h-full flex justify-center items-center cursor-pointer"
							>
								<IoMdRemove />
							</div>
							{/* amount */}
							<div className="h-full flex justify-center items-center px-2">
								{amount}
							</div>
							{/* aumentar */}
							<div
								onClick={() => increaseAmount(id)}
								className="flex-1 h-full flex justify-center items-center cursor-pointer"
							>
								<IoMdAdd />
							</div>
						</div>
						{/* preço do item */}
						<div className="flex-1 flex items-center justify-around">
							$ {price}
						</div>
						{/* valor final */}
						<div className="flex flex-1 justify-end items-center text-primary font-medium">{`$ ${parseFloat(
							price * amount
						).toFixed(2)}`}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
