import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './store/configureStore'
import routes from './routes'

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Router history={history} routes={routes} />,
  document.getElementById('root')
)
