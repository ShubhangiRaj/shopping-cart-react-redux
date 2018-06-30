import RouterWrapper from '../components/RouterWrapper';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {  
    return {
        route : state.route,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

let RouterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RouterWrapper);

export default RouterContainer;