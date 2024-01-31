import { createContext } from "react";
import { Producto } from '../interfaces/producto-tienda';
import data from '../../data.json'
import React, { ReactNode } from 'react';

interface ProductoContextProps {
    producto: Producto[];
}

const ProductoContext = createContext<ProductoContextProps[]>([]);


const ProductoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    

    return (
        <ProductoContext.Provider value={[
            { producto: data }
        ]}>
            {children}
        </ProductoContext.Provider>
    )
}

export { ProductoProvider, ProductoContext}