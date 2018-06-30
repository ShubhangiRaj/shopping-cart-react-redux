import React, {Component} from 'react';
import '../Styles.css';
import { Link } from "react-router-dom";
import CartItemList from '../components/CartItemList';
import TotalPrice from './TotalPrice';

class OrderSummary extends Component{
    render(){
        return(
            <div className="container">
                <div className="goToCartButton">
                    <Link to="/" className="navBtns">Home</Link>
                </div>
                <div className="title">
                    <h2>Order Summary</h2>
                </div>
                <div className="separator"></div>
                <div className="orderSummary">
                    <div className="cartItemListWrapper">
                        <CartItemList cartItems={this.props.cartItems} addToCart = {this.props.addToCart} 
                            removeFromCart = {this.props.removeFromCart}/>
                    </div>
                    <div className="totalPriceWrapper">
                        <TotalPrice cartItems={this.props.cartItems}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderSummary;