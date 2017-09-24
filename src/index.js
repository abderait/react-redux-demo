import React, { Component }  from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch }  from 'react-router-dom';

import storeReducers from './reducers'

// Feuille de style
import './styles.css';

//Composants 
import LayoutHome from './components/LayoutHome';
import LayoutAbout from './components/LayoutAbout';

let store = createStore(storeReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render() {
    return (
        <Provider store={store}>        
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/about" component={LayoutAbout} />
                        <Route path="/" component={LayoutHome} />
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));