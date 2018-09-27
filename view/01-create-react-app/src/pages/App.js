import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'

import Login from './login'
import Home from './home'
import About from './about'
import Error from './error'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          {routes.map((v, k) =>
            <li key={k}>
              <Link to={v.path}>{v.name}</Link>
            </li>
          )}
        </ul>

        <hr/>

        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login"/>}/>
          {routes.map((v, k) => <Route key={k} exact path={v.path} component={v.component}/>)}
          <Route component={() => <Error/>}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App
