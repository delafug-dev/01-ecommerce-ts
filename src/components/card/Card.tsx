import { Producto } from '../../interfaces/producto-tienda';
import '../../styles/product-card/card.css'

interface CardProps {
  producto: Producto;
}

export const Card: React.FC<CardProps> = ({producto}) => {

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
      <div className="card-price">
        <hr />
        <p>{price}€</p>
      </div>
    </div>
  );
}
