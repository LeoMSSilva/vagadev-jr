import React, { createContext, useContext, useState } from 'react';

const BagContext = createContext(null);

export default function BagProvider({ children }) {
	const [bag, setBag] = useState(0);
	return <BagContext.Provider value={{ bag, setBag }}>{children}</BagContext.Provider>;
}

export function useBag() {
	const { bag, setBag } = useContext(BagContext);
	return { bag, setBag };
}
