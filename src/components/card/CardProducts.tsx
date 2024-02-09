import '../../styles/product-card/card-product-styles.css'
import { Card } from './Card'
import { Producto } from '../../interfaces/producto-tienda'
import React from 'react';

interface GridCardProps {
  productos: Producto[];
  stateSearchProduct: Producto[];
  addProductToCart: (producto: Producto) => void;
  addProductTotalNumber: () => void;
}


export const CardProducts: React.FC<GridCardProps> = ({ productos, stateSearchProduct, addProductToCart, addProductTotalNumber }) => {

  return (
    <div className="card-container">
        { stateSearchProduct.length === 0 ?
          productos.map((producto) => (
            <Card key={producto.id} producto={producto} addProductToCart={addProductToCart} addProductTotalNumber={addProductTotalNumber}/>
          ))
          :
          stateSearchProduct.map((producto) => (
            <Card key={producto.id} producto={producto} addProductToCart={addProductToCart} addProductTotalNumber={addProductTotalNumber}/>
          ))
        }
        
    </div>
  )
}
