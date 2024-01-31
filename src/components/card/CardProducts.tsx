import '../../styles/product-card/card-product-styles.css'
import { Card } from './Card'
import { Producto } from '../../interfaces/producto-tienda'

interface GridCardProps {
  productos: Producto[];
  stateSearchProduct: Producto[];
}


export const CardProducts: React.FC<GridCardProps> = ({ productos, stateSearchProduct }) => {

  console.log(stateSearchProduct);

  return (
    <div className="card-container">
        { stateSearchProduct.length === 0 ?
          productos.map((producto) => (
            <Card key={producto.id} producto={producto}/>
          ))
          :
          stateSearchProduct.map((producto) => (
            <Card key={producto.id} producto={producto}/>
          ))
        }
    </div>
  )
}
