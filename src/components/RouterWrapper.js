import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProductListingContainer from '../containers/ProductListingContainer';
import OrderSummaryContainer from '../containers/OrderSummaryContainer';
import '../Styles.css';

class RouterWrapper extends Component{
    componentWillReceiveProps(newProps){
        if(newProps.route === "Home"){
            <div className="btnWrapper">
                <Link to="/" className="navBtns">Home</Link>
            </div> 
        }
    }
   render(){
       return(
        <Router>
            <div>
                <Route exact path="/" component={ProductListingContainer}/>
                <Route exact path="/orderSummary" component={OrderSummaryContainer} />         
            </div>     
        </Router>
       )
   }
}

export default RouterWrapper;