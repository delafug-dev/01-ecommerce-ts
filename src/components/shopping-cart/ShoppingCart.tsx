import { Producto } from '../../interfaces/producto-tienda';
import '../../styles/shopping-cart/shopping-cart-styles.css'

interface Props {
  cartProducts: Producto[];
}

export const ShoppingCart:React.FC<Props> = ({cartProducts}) => {

  const total = cartProducts.reduce((acc, producto) => acc + producto.price * producto.quantity, 0);
  console.log(total)

  return (
    <div className="shopping-cart">
      {cartProducts.map((producto) => (
        <div key={producto.id}>
          <div className="title">{producto.title}</div>

          <div className="item">
            <div className="image">
              <img src={producto.image} alt="" />
            </div>

            <div className="description">
              <span>{ producto.description }</span>
            </div>

            <div className="quantity">
              <button className="plus-btn" type="button" name="button">
                +
              </button>
              <span>{String(producto.quantity)}</span>
              <button className="minus-btn" type="button" name="button">
                -
              </button>
            </div>

            <div className="total-price">{producto.price} €</div>
          </div>
        </div>
      ))}
      <div className="total" style={{justifyContent: cartProducts.length ? "flex-end" : "space-between"}}>
        { cartProducts.length === 0 ? <span>No hay productos en el carrito aún</span> : null}
        <span>Total: {total.toFixed(2)} €</span>
      </div>
    </div>
  );
}
