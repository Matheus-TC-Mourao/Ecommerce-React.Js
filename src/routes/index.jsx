import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

export default function Router() {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/product/:id" element={<ProductDetails />} />
				</Routes>
				<Sidebar />
				<Footer />
			</BrowserRouter>
		</div>
	);
}
