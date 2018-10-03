import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/app'

import Model from './models/app'

const store = new Model()

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
)