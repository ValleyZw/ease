import React from 'react';
import Router from "next/router";

const Index = () => <div>Loading...</div>

// easy redirect
Index.getInitialProps = async({ res }) => {
  if (res) {
    res.writeHead(302, {
      Location: '/login'
    });
    res.end()
  } else {
    Router.push('/login')
  }
  return {}
};

export default Index