import React, {Component} from 'react';
import '../Styles.css';
import ProductCard from './ProductCard.js';

class ProductCardList extends Component{
    render(){
        let productComponents;

        productComponents = this.props.products.map( (product,i) => {
            return (
              <ProductCard product = { product }
                addToCart = { this.props.addToCart }
                key = {`${i}`}/>
            )
        })
        
        return(
            <div>
                <div className="productCardList">{productComponents}</div>
            </div>
        )
    }        
}

export default ProductCardList;