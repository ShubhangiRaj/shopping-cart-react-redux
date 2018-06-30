import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { fetchProductsSuccess } from './actions/actions';
import RouterContainer from './containers/RouterContainer';

class App extends Component {

  constructor(props){
    super(props);
    fetch("https://api.myjson.com/bins/qhnfp")
            .then(response => response.json())
            .then(json => {
              store.dispatch(fetchProductsSuccess( json ));
            })
  }

  render() {
    return (
      <Provider store={store}>
          <div className="App">
            <RouterContainer/>
          </div>
      </Provider>
    );
  }
}

export default App;
