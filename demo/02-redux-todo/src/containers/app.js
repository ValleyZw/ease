import React from 'react'
import { connect } from 'react-redux'

import { Form, Table } from './components'
import * as eventTypes from '../actions'

const App = ({dispatch, state}) => {
  // event handlers for stateless functional components
  const handleEvent = ({type, payload}) => {
    dispatch(type(state, payload))
  }

  return (
    <React.Fragment>
      <h2>React TODO list</h2>

      <hr/>

      <Form {...{handleEvent, eventTypes}}/>
      <Table {...{...state, handleEvent, eventTypes}}/>
    </React.Fragment>
  )
}

export default connect(state => ({state}))(App)