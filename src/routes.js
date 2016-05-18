import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import MainDashboard from './layouts/MainDashboard'

export default (
  <Route path="/" component={MainDashboard}>
    {/*<IndexRoute component={MainDashboard} />*/}
  </Route>
)
