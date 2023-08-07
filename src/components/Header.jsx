import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../context/Sidebarcontext';
import { BsBag } from 'react-icons/bs';
import { CartContext } from '../context/Cartcontext';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg';

function Header() {
	const { isOpen, setIsOpen } = useContext(SidebarContext);
	const { itemAmount } = useContext(CartContext);

	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY > 40 ? setIsActive(true) : setIsActive(false);
		});
	});

	const sureActive = () => {
		return isActive ? 'bg-white py-5 shadow-md' : 'bg-none py-4';
	};
	return (
		<header className={`${sureActive()} z-10 fixed w-full transition-all`}>
			<div className="w-[80vw] mx-auto flex items-center justify-between h-full">
				{/* logo */}
				<Link to={'/'}>
					<div>
						<img className="w-[40px]" src={Logo} alt="logo" />
					</div>
				</Link>
				{/* cart */}
				<div
					className="cursor-pointer flex relative"
					onClick={() => setIsOpen(!isOpen)}
				>
					<BsBag className="text-2xl" />
					<div className="bg-pink-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
						{itemAmount}
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
