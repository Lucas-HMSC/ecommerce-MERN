import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import { HashRouter as Router, Route } from 'react-router-dom';

import Pedidos from './containers/Pedidos';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route path={'/'} exact component={Pedidos} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
