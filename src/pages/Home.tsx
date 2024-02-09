import { CardProducts } from "../components/card/CardProducts"
import { Header } from "../components/header/Header"
import React, { useState } from "react";
import { UseProducto } from "../hooks/UseProducto";
import { Producto } from "../interfaces/producto-tienda";
import { Footer } from "../components/footer/Footer";
import { ShoppingCart } from "../components/shopping-cart/ShoppingCart";
import { Login } from "../components/login/Login";
import { BannerOferta } from "../components/banner/BannerOferta";

interface HomeProps {
  changeMode: () => void;
  darkMode: boolean;
}


export const Home: React.FC<HomeProps> = ({changeMode, darkMode}) => {

  // ! Importante: Esta lógica debería estar en el hook UseProducto o en el Context 
  // !             y aplicarla al componente CardProducts directamente 
  // !             para evitar el renderizado de más componentes
  
  const [stateSearchProduct, setStateSearchProduct] = useState<Producto[]>([]);
  const [ifVisibleCardProduct, setIfVisibleCardProduct] = useState(true);
  const [ifVisibleShoppingCart, setIfVisibleShoppingCart] = useState(false);
  const [cartProducts, setCartProduct] = useState<Producto[]>([]);
  const [totalProductsNumber, setTotalProductsNumber] = useState<number>(0);

  const addProductTotalNumber = () => {
    setTotalProductsNumber(totalProductsNumber + 1);
  }

  const addProductToCart = (producto: Producto) => { 
    producto.quantity = 1;
    const productExist = cartProducts.find((product) => product.id === producto.id);
    if(productExist) {
      const newCart = cartProducts.map((product) => product.id === producto.id ? {...product, quantity: product.quantity + 1} : product);
      return setCartProduct(newCart);
    }
    setCartProduct([...cartProducts, {...producto, quantity: 1}]);
  }

  const producto = UseProducto();
  const productos = producto[0].producto;
  
  const setTrueCardProduct = () => {
    setIfVisibleCardProduct(true);
    setIfVisibleShoppingCart(false);
  }

  const setTrueShoppingCart = () => {
    setIfVisibleCardProduct(false);
    setIfVisibleShoppingCart(true);
  }

  const searchProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const search = e.target.value;
    const filteredProductos = productos.filter((producto: Producto) => {
      return producto.title.toLowerCase().includes(search.toLowerCase());
    });
    setStateSearchProduct(filteredProductos);
  };


  return (
    <main>
      <Header search={searchProduct}
              showShoppingCart={setTrueShoppingCart} 
              showCardProduct={setTrueCardProduct} 
              totalProductsNumber={totalProductsNumber}
              changeMode={changeMode}
              darkMode={darkMode}/>
      <BannerOferta />
      { ifVisibleCardProduct ?  <CardProducts 
                      productos={productos} 
                      stateSearchProduct={stateSearchProduct} 
                      addProductToCart={addProductToCart} 
                      addProductTotalNumber={addProductTotalNumber}/> 
      : null}

      { ifVisibleShoppingCart ? <ShoppingCart cartProducts={cartProducts}/> : null}

      <Login />
      <Footer darkMode={darkMode}/>
    </main>
  )
}