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

    return {
        state,
        addToCart
    };
}

export default useInitialState;