import { UseUser } from '../../hooks/UseUser';
import '../../styles/banner-oferta-styles.css'

export const BannerOferta = () => {

  const {user} = UseUser();

  return (
    <div className='banner-container'>
      { user ? <h2>¡Hola {user}! Has recibido un código promocional de 50% de descuento</h2>
            : <p>Si te logeas recibirás hasta 50% de descuento</p>
      }
        
    </div>
  )
}
