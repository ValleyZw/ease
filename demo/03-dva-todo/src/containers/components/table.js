import React from 'react'
import Head from './tableHead'
import Item from './tableItem'

const Table = ({todos, task, handleEvent, eventTypes}) => (
  <table>
    <thead>
    <Head/>
    </thead>

    <tbody>
    {todos.map((todo, key) =>
      <Item key={key} {...{todo, task, handleEvent, eventTypes}}/>
    )}
    </tbody>
  </table>
)

export default Table