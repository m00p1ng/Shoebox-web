import React, {Component} from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import routes from './routes'
import rootReducer from './reducers'

const store = createStore(rootReducer)

render((
    <Provider store={store} key='provider'>
        <Router history={browserHistory} routes={routes}/>
    </Provider>
), document.getElementById('app'))
