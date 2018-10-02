import { Router, Route } from 'dva/router'
import React from 'react'
import App from './containers/app'

export default ({history}) => (
  <Router history={history}>
    <Route path="/" component={App}/>
  </Router>
)