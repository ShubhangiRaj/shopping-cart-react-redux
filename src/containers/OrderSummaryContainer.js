import OrderSummary from '../components/OrderSummary';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/actions';

const mapStateToProps = (state, ownProps) => {  
    return {
        cartItems : state.cartItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: ( product ) => {
            dispatch( addToCart(product) );
        },

        removeFromCart: ( cartItemId ) => {
            dispatch( removeFromCart(cartItemId) );
        }
    }
}

let OrderSummaryContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderSummary);

export default OrderSummaryContainer;