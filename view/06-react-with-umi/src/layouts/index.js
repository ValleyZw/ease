import React from 'react'
import Link from 'umi/link'

import Error from '../pages/404'

const routes = [
  {
    path: '/login',
    name: 'Login',
  },
  {
    path: '/home',
    name: 'Home',
  },
  {
    path: '/about',
    name: 'About',
  }
]

const App = ({children, location}) => {
  return (
    <div>
      <ul>
        {routes.map((v, k) =>
          <li key={k}>
            <Link to={v.path}>{v.name}</Link>
          </li>
        )}
      </ul>

      <hr/>

      {/* Worst practice: but got some issue with default 404 routing */}
      {
        routes.find(v=>v.path === location.pathname) || location.pathname === '/'
          ? children
          : <Error/>
      }

      {/*{children}*/}

    </div>
  )
}

export default App
