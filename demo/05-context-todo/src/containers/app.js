import React from 'react'
import { Form, Table } from './components'
import { Consumer } from '../context'

const App = () => (
  <React.Fragment>
    <h2>React TODO list</h2>

    <hr/>

    <Consumer>
      <Form/>
    </Consumer>

    <Consumer>
      <Table/>
    </Consumer>
  </React.Fragment>
)

export default App