import {Link} from 'react-router-dom';
import { useCart } from '../contexts/CartContexts';

function ProductCard({ product}){
    const{addItem} = useCart();


    const contexts = useCart();
    console.log("aserejeeeee", contexts);
    
    return(
        <div
        className='product-card'
        style={{
            border: "1px solid #ccc",
            padding: "1rem",
            borderRadius: "8px",
            textAlign: "center",
            cursor: "pointer"
        }}
        >
            <Link 
            to = {`/product/${product.id}`}
            style={{ textDecoration:"none", color: "inherit"}}
            >
            <img 
            src = {`http://localHost:3001/images/${product.image}`}
            alt = {product.name}
            className='card img'
            />
            <h3>{product.name}</h3>
            <p>
                <strong>${product.price}</strong>
            </p>
            </Link>

            <button
                onClick={()=> addItem(product)}
                style={{
                    marginTop: "8px",
                    padding: "8px 12px",
                    background: "#000",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            >
                Agregar al carrito :3
            </button>

        </div>
    )
}
export default ProductCard;