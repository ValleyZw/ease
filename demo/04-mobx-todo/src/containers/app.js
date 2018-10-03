import React from 'react'
import { observer } from 'mobx-react'
import { Form, Table } from './components'

import { utils } from '../utils'

const {eventTypes} = utils

const App = observer(({store}) => {
  // event handlers for stateless functional components
  const handleEvent = ({type, payload}) => {
    store[type](payload)
  }

  return (
    <React.Fragment>
      <h2>React TODO list</h2>

      <hr/>

      <Form {...{handleEvent, eventTypes}}/>
      <Table {...{...store, handleEvent, eventTypes}}/>

    </React.Fragment>
  )
})

export default App