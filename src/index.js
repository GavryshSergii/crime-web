import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './index.css';
import App from './components/App/App';
import About from './components/About';
import Menu from './components/Menu';
import registerServiceWorker from './registerServiceWorker';

import {getCivilEventsLayer} from './redux/actions/layerGroups';


import reducer from './redux/reducers';

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

window.registerAndroidAPI('showData',function(){
    store.dispatch(getCivilEventsLayer())
});

window.registerAndroidAPI('hideData',function(){
    store.dispatch({ type: 'CLEAR_LAYER_GROUPS'})
});

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Menu/>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
