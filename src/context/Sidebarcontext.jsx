import React, { createContext, useState } from 'react';

export const SidebarContext = createContext();

export default function SidebarProvider({ children }) {
	const [isOpen, setIsOpen] = useState(false);

	const closeHandle = () => {
		setIsOpen(false);
	};

	return (
		<SidebarContext.Provider value={{ isOpen, setIsOpen, closeHandle }}>
			{children}
		</SidebarContext.Provider>
	);
}
