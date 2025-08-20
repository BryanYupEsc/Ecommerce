import {useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

function ProductDetail(){
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    useEffect(()=>{
        axios.get(`http://localhost:3001/products/${id}`)
        .then(res => setProduct(res.data))
        .catch(err => console.error(err));
    },[id]);
    if(!product) return <p>CArgando...</p>;
    
    return(
        <div style= {{padding: '2rem'}}>
            <h2>{product.name}</h2>
            <img 
            src= {`http://localHost:3001/images/${product.image}`} 
            alt={product.name} 
            style={{width: '300px'}}
            />
            <p>{product.description}</p>
            <p><strong>${product.price}</strong></p>
        </div>
    )
}
export default ProductDetail;