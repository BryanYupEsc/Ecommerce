import React from "react";
import CartButton from "./CartButton";
import "../styles/Header.css";
import { useCart } from "../contexts/CartContexts";

function Header(){
    const { addItem }= useCart();

    return(
        <header className="header">
            <div className="nav-left">
                <h1 className="logo">LOJA NOVA</h1>
            </div>
            <nav className="nav-center">
                <ul>
                    <li>Hombre</li>
                    <li>Mujer</li>
                    <li>Criança</li>
                    <li>Rebajas</li>
                </ul>
            </nav>
            <div>
                <CartButton cartCount={cartCount}/>
            </div>
        </header>
    )
}

export default Header;