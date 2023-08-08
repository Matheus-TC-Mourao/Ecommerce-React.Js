import React, { useContext } from 'react';

import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/Cartcontext';

export default function Product({ product }) {
	const { addToCart } = useContext(CartContext);
	const { id, image, category, title, price } = product;

	return (
		<div>
			<div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition ">
				<div className="w-full h-full flex justify-center items-center">
					<div className="w-[200px] mx-auto flex justify-center items-center">
						<img
							className="max-h-[160px] group-hover:scale-110 transition duration-300"
							src={image}
							alt={title}
						/>
					</div>
				</div>
				{/* button */}
				<div className="absolute top-2 -right-11 group-hover:right-2 transition-all duration-300 opacity-0 group-hover:opacity-100  p-2 flex flex-col justify-center items-center gap-y-2">
					<button onClick={() => addToCart(product, id)}>
						<div className="text-white w-10 h-10 flex justify-center items-center bg-red-500 drop-shadow-xl active:scale-75 transition duration-100">
							<BsPlus className="text-3xl" />
						</div>
					</button>
					<Link
						to={`/product/${id}`}
						className="flex justify-center items-center text-primary drop-shadow-xl w-10 h-10 bg-white active:scale-90 transition duration-200"
					>
						<BsEyeFill />
					</Link>
				</div>
			</div>
			<div>
				<div className="text-sm capitalize mb-1 text-gray-500">{category}</div>
				<Link to={`/product/${id}`}>
					<h2 className="font-semibold mb-1 hover:underline">{title}</h2>
				</Link>

				<div className="font-semibold">$ {price}</div>
			</div>
		</div>
	);
}
