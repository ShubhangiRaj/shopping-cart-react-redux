import React, { Component } from 'react';

class CartItem extends Component{
    constructor(props){
        super(props);
        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
    }
    addToCart = () => {
        this.props.addToCart(this.props.cartItem);
    }
    removeFromCart = () => {
        this.props.removeFromCart(this.props.cartItem.id);
    }
    render(){
        return(
            <div className="cartItem">
                <div>
                    <p className="cartItemName">{this.props.cartItem.name}</p>
                </div>
                <button className="cartUpdateBtns" onClick = {this.addToCart}>+</button>
                <p className="updateQuantityBox">{this.props.cartItem.quantity}</p>
                <button className="cartUpdateBtns" onClick = {this.removeFromCart}>-</button>
                <p className="cartItemPrice">${this.props.cartItem.discount == 0 ? this.props.cartItem.price * this.props.cartItem.quantity : 
                    (this.props.cartItem.price - this.props.cartItem.discount) * this.props.cartItem.quantity}</p>
            </div>
        )
    }
}

export default CartItem;