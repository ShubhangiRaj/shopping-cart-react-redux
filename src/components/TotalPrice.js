import React, {Component} from 'react';

class TotalPrice extends Component{
    render(){
        let quantity = this.props.cartItems.map( item => {
            return(
                item.quantity
            )
        })
        console.log(quantity);

        let totalQuantity;
        if(quantity.length){
            totalQuantity = quantity.reduce((x,y)=>x+y);
        }
        console.log(totalQuantity);


        let price = this.props.cartItems.map( item => {
            if(item.discount == 0){
                return item.price * item.quantity
            } else {
                return (item.price - item.discount) * item.quantity
            }
        })
        console.log(price);

        let totalPrice;
        if(price.length){
            totalPrice = price.reduce((x,y)=>x+y);
        }
        console.log(totalPrice);

        return(
            <div className="totalPrice">
                <h2>Total</h2>
                <p>Items({totalQuantity})</p>
                <p>Price {totalPrice}</p>
            </div>
        )
    }
}

export default TotalPrice;