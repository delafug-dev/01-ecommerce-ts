import { ProductoProvider } from "./context/ProductoProvider"
import { Home } from "./pages/Home"

function App() {

  return (
    <ProductoProvider>
      <Home />
    </ProductoProvider>
  )
}

export default App
