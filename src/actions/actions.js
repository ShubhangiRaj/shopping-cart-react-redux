export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const PRODUCTS_FETCHED_SUCCESS = "PRODUCTS_FETCHED_SUCCESS";
export const ADD_TO_CART_SUCCESS = "SHOW_NOTIFICATION";

// Returns ADD_TO_CART action object 
export const addToCart = ( product ) => {
    return { type: ADD_TO_CART, product: product }
}

// Return REMOVE_FROM_CART action object
export const removeFromCart = ( cartItemId ) => {
    return { type: REMOVE_FROM_CART, cartItemId: cartItemId }
}

export const fetchProductsSuccess = ( jsonResponse ) => {
    return { type: PRODUCTS_FETCHED_SUCCESS, products : jsonResponse }
}

export const addToCartSuccess = ( product ) => {
    return { type: ADD_TO_CART_SUCCESS, product: product }
}

export const initiateAddToCart = ( product ) => { 
    console.log(product);

    return (dispatch) => {
        Promise.resolve()
        .then( () => {
            console.log('dispatching add to cart')
            dispatch( addToCart(product) );
        })
        .then( () => {
            dispatch( addToCartSuccess(product));
        });
    }
}