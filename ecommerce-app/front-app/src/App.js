import {useEffect,useState} from "react";
import axios from 'axios';
import Header from "./components/Header";

import './styles/ProductsList.css';
import ProductCard from "./components/ProductCard";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";

function App(){
  const [Products, setProducts] = useState([]);

  // conectar con mi backend 
  useEffect(()=>{
    axios.get('http://localhost:3001/products')
      .then((response)=>{
        setProducts(response.data);
        console.log(response.data);
        
      })
      .catch((error)=>{
        console.error('Error al obtener produtos:', error);        
      });
  },[]);

  return(
    <div className="container">
      <Header cartCount={0}/>
      <Routes>
        <Route
        path = "/"
        element = {
          <>
          <h1 className="title">Catalogo de produtos</h1>
          <div className="grid">
            {Products.map((prod)=>(
              < ProductCard key={prod.id} product={prod}/>
            ))}
          </div>
          </>
        }
        />
        <Route  path="/product/:id" element={<ProductDetail/>}/>
      </Routes>      
    </div>
  );
}
export default App;
