import React, {Component} from 'react';
import CartItem from '../components/CartItem';

class CartItemList extends Component{
    render(){
        let cartItems;
        cartItems = this.props.cartItems.map( (cartItem, i) => {
            return (
              <CartItem cartItem = { cartItem }
                addToCart = { this.props.addToCart } 
                removeFromCart = { this.props.removeFromCart } 
                key = {`${i}`}/>
            )
        })
        
        return(
            <div>
                <div className="cartItemList">{cartItems}</div>
            </div>
        )
    }
}

export default CartItemList;