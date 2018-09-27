import React from 'react'
import App, { Container } from 'next/app'

import Main from '../components/App'

class MyApp extends App {
  static async getInitialProps ({Component, ctx}) {
    return {
      pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
    }
  }

  render () {
    const {Component} = this.props
    return (
      <Container>
        <Main>
          <Component/>
        </Main>
      </Container>
    )
  }
}

export default MyApp