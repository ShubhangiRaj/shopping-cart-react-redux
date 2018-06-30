import React, {Component} from 'react';

class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.addToCart = this.addToCart.bind(this);
    }
    addToCart = () => {
        console.log('Adding product: '+ this.props.product.name +' to Cart');
        this.props.addToCart(this.props.product);
        
    }

    render(){
        return(
            <div className="productCardWrapper">
                <img className="productImg" src={this.props.product.img_url} />
                <div className="productInfoWrapper">
                    <p>{this.props.product.name}</p>
                    <div className="productInfo">
                        {this.props.product.discount == 0 ? <p></p>:
                            <p style = {{textDecoration: 'line-through', paddingRight: '10px'}}>${this.props.product.price}</p>
                        }
                        <p style = {{paddingRight: '30px'}}>${this.props.product.price - this.props.product.discount}</p>
                        <button className="addToCart" onClick = {this.addToCart}>Add To Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductCard;