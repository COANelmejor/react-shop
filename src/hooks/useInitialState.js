import { useState } from "react";

const initialState =  {
    cart : [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);
    
    const addToCart = (productPayload) => {
        setState({
            ...state,
            cart: [...state.cart, productPayload]
        })
    }

    const removeFromCart = (productPayload) => {
        setState({
            ...state,
            cart: state.cart.filter(product => product.id !== productPayload.id)
        })
    }

    return {
        state,
        addToCart,
        removeFromCart
    };
}

export default useInitialState;