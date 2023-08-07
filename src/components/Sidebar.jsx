import React, { useContext } from 'react';
import { SidebarContext } from '../context/Sidebarcontext';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import { CartContext } from '../context/Cartcontext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

export default function Sidebar() {
	const { isOpen, closeHandle } = useContext(SidebarContext);
	const { cart, clearCart, total } = useContext(CartContext);

	return (
		<div
			className={`${
				isOpen ? 'right-0' : '-right-full'
			} h-full w-full bg-white top-0 fixed sm:w-[80vw] md:w-[47vw] xl:max-w-[30vw] lg:max-w-[40vw] lg:px-[35px] transition-all duration-300 z-20 px-4 shadow-2xl`}
		>
			<div className="flex justify-between items-center py-3 border-b">
				<div className="uppercase text-sm font-semibold">Shopping (0)</div>
				<div
					className="cursor-pointer w-8 h-8 flex justify-center items-center"
					onClick={() => closeHandle()}
				>
					<IoMdArrowForward className="text-2xl" />
				</div>
			</div>
			<div className="flex flex-col gap-y-2 h-[370px] overflow-y-auto overflow-x-hidden border-b">
				{cart.map((item) => {
					return <CartItem item={item} key={item.id} />;
				})}
			</div>
			<div className="flex flex-col gap-y-3 py-2 mt-2 shadow-inner">
				<div className="flex w-full justify-between items-center">
					{/* total */}
					<div className="uppercase font-semibold">
						<span className="mr-2">Total:</span> ${' '}
						{parseFloat(total).toFixed(2)}
					</div>
					{/* clear cart icons */}
					<div
						onClick={clearCart}
						className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
					>
						<FiTrash2 />
					</div>
				</div>
				<Link
					className="bg-purple-200 p-3 flex justify-center items-center text-primary w-full font-medium"
					to={'/'}
				>
					View Cart
				</Link>
				<Link
					className="bg-primary p-3 flex justify-center items-center text-white w-full font-medium"
					to={'/'}
				>
					Checkout
				</Link>
			</div>
		</div>
	);
}
