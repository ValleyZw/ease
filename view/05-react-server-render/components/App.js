import React from 'react'
import Link from 'next/link'

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

const App = ({children}) => {
  return (
    <div>
      <ul>
        {routes.map((v, k) =>
          <li key={k}>
            <Link href={v.path}><a>{v.name}</a></Link>
          </li>
        )}
      </ul>

      <hr/>

      {children}
    </div>
  )
}

export default App