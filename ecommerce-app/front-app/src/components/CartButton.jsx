import React from "react";
import {FaShoppingCart} from 'react-icons/fa';

function CartButton({cartCount, onClick}){
    return(
        <button
            onClick ={onClick}
            style = {{
                position: 'relative',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '24px',
                marginLeft: '20px',
            }}
            aria-label="Ver carrito"
        >
            <FaShoppingCart size={24}/>
            {cartCount > 0 &&(
                <span
                    style={{
                        position: 'absolute',
                        top: '-6px',
                        right: '-10px',
                        backgroundColor: 'red',
                        color: 'white',
                        borderRadius: '50%',
                        padding: '2px 6px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                    }}
                >
                    {cartCount}
                </span>
            )}
        </button>
    );
}

export default CartButton;