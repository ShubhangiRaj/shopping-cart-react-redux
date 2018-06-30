import { PRODUCTS_FETCHED_SUCCESS, ADD_TO_CART, REMOVE_FROM_CART, ADD_TO_CART_SUCCESS } from "../actions/actions";

const reducers = (state, action) => {
    switch(action.type){
        case PRODUCTS_FETCHED_SUCCESS:
            return {
                ...state,
                products : action.products
            }

        case ADD_TO_CART:
            let itemExisted = false;
            let newCartItems = [...state.cartItems];
            for(let item of newCartItems){
                if ( item.id === action.product.id ) {
                    item.quantity = item.quantity + 1;
                    itemExisted = true;
                    break;
                }
            }
            if (!itemExisted) {      
                newCartItems = [ ...state.cartItems, { ...action.product, quantity : 1 } ]
            }
            return {
                ...state,
                cartItems:  newCartItems
            }
        case REMOVE_FROM_CART:
            let itemsInCart = [...state.cartItems];
            for(let item of itemsInCart){
                if( action.cartItemId === item.id) {
                    if( item.quantity > 1){
                        item.quantity = item.quantity - 1;
                    } else if(item.quantity == 1){
                        let index = itemsInCart.indexOf(item);
                        itemsInCart.splice(index, 1);
                        console.log(itemsInCart);
                    }
                }   
            }

            return {
                ...state,
                cartItems: itemsInCart
            }
        case ADD_TO_CART_SUCCESS:
            let notification = {
                msg : `${action.product.name} added to cart!` 
            }
            return {
                ...state,
                notification: notification
            }
        default: 
            return state;
    }
}

export default reducers;