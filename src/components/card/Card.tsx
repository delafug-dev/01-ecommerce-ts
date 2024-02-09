import React from 'react';
import { Producto } from '../../interfaces/producto-tienda';
import '../../styles/product-card/card.css'

interface CardProps {
  producto: Producto;
  addProductToCart: (producto: Producto) => void;
  addProductTotalNumber: () => void;
}

export const Card: React.FC<CardProps> = ({producto, addProductToCart, addProductTotalNumber}) => {

  const {title, description, price, image} = producto;


  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="product"/>
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p className="description-product">{description}</p>
      </div>
      <hr />
      <div className="card-price">
        <p>{price}€</p>
      </div>
      <div className="card-button">
        <button onClick={() => {addProductToCart(producto); addProductTotalNumber()}}>Añadir al carrito</button>
      </div>
    </div>
  );
}
