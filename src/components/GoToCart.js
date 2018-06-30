import React, {Component} from 'react';
import '../Styles.css';
import { Link } from "react-router-dom";


class GoToCart extends Component{
    render(){
        return(
            <div className="btnWrapper">
                {this.props.cartItems.length > 0 ? <Link to="/orderSummary" className="navBtns">Go To Cart</Link> :
                <Link to="/" className="navBtns">Go To Cart</Link>
                }
            </div>
        )
    }
}

export default GoToCart;