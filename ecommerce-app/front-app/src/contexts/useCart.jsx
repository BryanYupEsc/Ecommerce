import { useContext } from "react";
import {cartContexts} from "./CartContexts";

export function useCart(){
    return useContext(cartContexts);
}