import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore , combineReducers, applyMiddleware,compose} from 'redux';
import counterRudecer from './Store/reducer/counter';
import storeRudecer from './Store/reducer/store';
import  {Provider} from 'react-redux'
import thunk from 'redux-thunk'

const rootReducer =combineReducers({
    ctr: counterRudecer,
    str: storeRudecer,
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store =createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
