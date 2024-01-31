import { CardProducts } from "../components/card/CardProducts"
import { Header } from "../components/header/Header"
import React, { useState } from "react";
import { UseProducto } from "../hooks/UseProducto";
import { Producto } from "../interfaces/producto-tienda";
import { Footer } from "../components/footer/Footer";


export const Home: React.FC = () => {

  const [stateSearchProduct, setStateSearchProduct] = useState<Producto[]>([]);

  const producto = UseProducto();
  const productos = producto[0].producto;
  

  const searchProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const search = e.target.value;
    const filteredProductos = productos.filter((producto) => {
      return producto.title.toLowerCase().includes(search.toLowerCase());
    });
    setStateSearchProduct(filteredProductos);
  };


  return (
    <main>
        <Header search={searchProduct} />
        <CardProducts productos={productos} stateSearchProduct={stateSearchProduct}/>
        <Footer/>
    </main>
  )
}

