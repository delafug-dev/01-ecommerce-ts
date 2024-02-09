import { createContext } from "react";
import { Producto } from '../interfaces/producto-tienda';
import data from '../../data.json'
import React, { ReactNode } from 'react';

interface ProductoContextProps {
    producto: Producto[];
}

const ProductoContext = createContext<ProductoContextProps[]>([]);

const updatedData = data.map((producto) => ({
    ...producto,
    quantity: 0, 
}));

const ProductoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <ProductoContext.Provider value={[{ producto: updatedData }]}>
            {children}
        </ProductoContext.Provider>
    );
};

export { ProductoProvider, ProductoContext}