import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

// my comp
import App from './App';
import rootReducer from './reducers'
import AuthComp from './components/pages/Auth'

const createStoreWithMiddleware = applyMiddleware()(createStore);

const Auth = () => {
    const localUid = JSON.parse(sessionStorage.getItem('uid'))
    const localToken = JSON.parse(sessionStorage.getItem('token'))

    if(localUid && localToken){
        return <App/>
    } else{
        return <AuthComp/>
    }
}

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )}> 
        <BrowserRouter> 
            <Auth />
        </BrowserRouter>
    </Provider>
    ,document.getElementById('root'));
