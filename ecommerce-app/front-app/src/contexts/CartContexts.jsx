import React,{ createContext, useContext, useReducer} from "react";

const CartContext = createContext();

function reducer(state, action){
    switch (action.type){
        case "ADD_ITEM":{
            const exists = state.find(item =>item.id === action.payload.id);
            if (exists) {
                return state.map(item =>
                    item.id === action.payload.id
                    ? {...item, quantity: item.quantity + 1}
                    : item
                );
            }
            return[...state, {...action.payload, quantity:1}];
        }
        default:
            return state;
    }
}
export function CartProvider({children}){
    const [cart, dispatch] = useReducer(reducer, []);

    const addItem = (product) =>{
        dispatch({ type: "ADD_ITEM", payload: product});
    };

    const value = {
        cart,
        addItem,
        cartCount: cart.reduce((acc, it)=> acc + it.quantity, 0),
        cartTotal: cart.reduce((acc, it)=> acc + it.price * it.quantity, 0),
    }

    console.log("carrito", cart);
    console.log("contador",value.cartCount);
    
    
    return(
        <CartContext.Provider value ={value}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart(){
    return useContext(CartContext);
}