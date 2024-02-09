import { useState } from "react";
import { ProductoProvider } from "./context/ProductoProvider"
import { Home } from "./pages/Home"
import { UserProvider } from "./context/UserProvider";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const changeMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <ProductoProvider>
      <UserProvider>
        <Home changeMode={changeMode} darkMode={darkMode}/>
      </UserProvider>
    </ProductoProvider>
  )
}

export default App
