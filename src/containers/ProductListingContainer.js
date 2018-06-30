import ProductListing from '../components/ProductListing';
import { connect } from 'react-redux';
import { initiateAddToCart } from '../actions/actions';
import { bindActionCreators } from '../../../../../../Library/Caches/typescript/2.9/node_modules/redux';

const mapStateToProps = (state, ownProps) => {  
    return {
        products : state.products,
        cartItems: state.cartItems,
        notification: state.notification
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addToCart: initiateAddToCart
    }, dispatch);
}


let ProductListingContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductListing);

export default ProductListingContainer;