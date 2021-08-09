import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
// import rootReducer from './components/userContent/reducers/rootReducer'
import postReducer from './components/userContent/reducers/postReducer';
import thunk from 'redux-thunk';

const store = createStore(postReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);