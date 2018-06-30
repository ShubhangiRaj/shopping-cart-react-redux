import React, {Component} from 'react';
import '../Styles.css';
import ProductCardList from './ProductCardList.js';
import GoToCart from './GoToCart';
import Notification from './Notification';

class ProductListing extends Component{
    render(){
        return(
            <div className="container">
                <div className="notification">
                    <Notification notification = {this.props.notification}/>
                </div>
                <div className="goToCartButton">
                    <GoToCart cartItems={this.props.cartItems}/>
                </div>
                <div className="title">
                    <h2>All Items</h2>
                </div>
                <div className="separator"></div>
                <div className="productGrid">
                    <ProductCardList products = {this.props.products} addToCart = {this.props.addToCart}/>
                </div>
            </div>
        )
    }
}
export default ProductListing;