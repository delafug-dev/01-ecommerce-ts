import '../../styles/footer-styles.css'

interface PropsFooter {
  darkMode: boolean;
}

export const Footer: React.FC<PropsFooter> = ({darkMode}) => {
  return (
    <footer className="footer" style={{backgroundColor: darkMode ? '#E0E0E0' : '#222'}}>
        <div className="container" style={{color: darkMode ? '#222' : 'white'}}>
            <div className="footer-content">
            <div className="footer-column">
                <h3>Enlaces</h3>
                <ul>
                <li><a style={{color: darkMode ? '#222' : 'white'}} href="#">Inicio</a></li>
                <li><a style={{color: darkMode ? '#222' : 'white'}} href="#">Productos</a></li>
                <li><a style={{color: darkMode ? '#222' : 'white'}} href="#">Contacto</a></li>
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
