import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
// import rootReducer from './store/reducers/rootReducer';
import postReducer from './store/reducers/postReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(postReducer, applyMiddleware(thunk)); //postReducer to rootReducer

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);