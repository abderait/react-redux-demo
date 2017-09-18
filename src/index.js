import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch }  from 'react-router-dom';

// Feuille de style
import './styles.css';

//Composants 
import LayoutHome from './components/LayoutHome';
import LayoutAbout from './components/LayoutAbout';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                <Route path="/about" component={LayoutAbout} />
                <Route path="/" component={LayoutHome} />
                </Switch>
            </div>
        </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));