import { ADD_TO_CART } from './../constants';

const 

const cartItems = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                {cartData: action.data}
            ]
            break;
    
        default:
            return state;
    }
}

export default cartItems;