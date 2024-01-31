import '../../styles/footer-style.css'

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-content">
            <div className="footer-column">
                <h3>Enlaces</h3>
                <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Contacto</h3>
                <p>Dirección: 123 Calle Principal</p>
                <p>Teléfono: 555-1234</p>
                <p>Email: info@empresa.com</p>
            </div>
            </div>
        </div>
    </footer>

  )
}
