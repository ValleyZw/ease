import React from 'react'
import { connect } from 'dva'
import { Form, Table } from './components'

import { utils } from '../utils'

const {modelName, eventTypes} = utils

const App = ({dispatch, app}) => {

  const handleEvent = ({type, payload}) => {
    dispatch({type: `${modelName}/${type}`, payload})
  }

  return (
    <React.Fragment>
      <h2>React TODO list</h2>

      <hr/>

      <Form {...{handleEvent, eventTypes}}/>
      <Table {...{...app, handleEvent, eventTypes}}/>
    </React.Fragment>
  )
}

export default connect(({app}) => ({
  app,
}))(App)