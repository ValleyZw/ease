import React from 'react'
import { Context } from './provider'

const Consumer = ({children}) => (
  <Context.Consumer>
    {props => (
      React.Children.map(children, child =>
        React.cloneElement(child, props)
      )
    )}
  </Context.Consumer>
)

export default Consumer