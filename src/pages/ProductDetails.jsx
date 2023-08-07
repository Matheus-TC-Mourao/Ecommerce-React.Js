import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/Productcontext';
import { CartContext } from '../context/Cartcontext';
import { Skeleton } from '@mui/material';

export default function ProductDetails() {
	const { id } = useParams();
	const { products } = useContext(ProductContext);
	const { addToCart } = useContext(CartContext);

	const product = products.find((item) => {
		return item.id === parseInt(id);
	});

	if (!product) {
		return (
			<section className=" h-screen flex justify-center items-center ">
				<Skeleton variant="rounded" width={600} height={500} />
			</section>
		);
	}

	const { price, image, description, title } = product;

	return (
		<section className="pt-24 pb-12 lg:py-32 h-screen flex items-center">
			<div className="container mx-auto h-full">
				<div className="flex flex-col lg:flex-row items-center">
					<div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
						<img
							className="max-w-[200px] lg:max-w-xs"
							src={image}
							alt={title}
						/>
					</div>

					<div className="flex-1 text-center lg:text-left ">
						<h1 className="text-[20px] lg:text-[26px] font-medium mb-2 max-w-[350px] lg:max-w-[450px] mx-auto lg:mx-0">
							{title}
						</h1>

						<div className="text-xl text-red-500 font-medium mb-6">
							$ {price}
						</div>
						<div className="overflow-y-auto max-h-[300px]">
							<p className="mb-8">{description}</p>
						</div>
						<button
							onClick={() => addToCart(product, product.id)}
							className="py-4 px-8 bg-primary text-white"
						>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
