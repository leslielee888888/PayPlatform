import ReactDOM from 'react-dom';
import React from 'react';

import {Provider} from 'react-redux';
import {ConnectedRouter, routerReducer} from 'react-router-redux';
import DevTools from './redux/DevTools';
import configureStore, {history} from './redux/configureStore';
import Routes from './routes/routes';
const store = configureStore();
import './app.css';

ReactDOM.render(
    (
        <Provider store={store}>
            <div >
                <Routes history={history}/>
                {process.env.NODE_ENV !== 'production' && <DevTools/>}
            </div>
        </Provider>
    ),
    document.getElementById('root')
);
