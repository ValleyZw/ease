# Redux TODO App

>Build todo app with [react](https://reactjs.org/) and [redux](https://redux.js.org/). 

## Content

- [Init Project](#init-project)
- [Folder Structure](#folder-structure)
- [How to use](#how-to-use)
  - [Development](#development)
  - [Production](#production)
- [References](#references)


### Init Project

[Node.js](https://nodejs.org) and the package manager [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) are required.

- Init project:

```npm
$ yarn init -y
```

- Add packages: 

    - React
    
```npm
$ yarn add react react-dom react-router-dom
```


- Add packages: 

    - Redux
    
```npm
$ yarn add redux react-redux redux-thunk
```

- Add packages: 

    - Webpack
    
```npm
$ yarn add --dev webpack webpack-cli webpack-dev-server
```

- Add packages: 

    - Babel
    
```npm
$ yarn add --dev @babel/core @babel/preset-env @babel/preset-react babel-loader
```

- Add packages: 

    - Plugins
    
```npm
$ yarn add --dev copy-webpack-plugin html-webpack-plugin
```

- Add scripts:

>add scripts bellow to package.json
```json
{
  "scripts": {
    "start": "webpack-dev-server --open --hot  --mode development",
    "build": "webpack --mode production"
  }
}
``` 

- Add configurations:

```bash
$ touch .babelrc webpack.config.js
```

- Set up configurations and add main scripts

:v:
  
### Folder Structure

```bash
my-app
  ├── .babelrc
  ├── README.md
  ├── node_modules/
  ├── package.json
  ├── docker-compose.yml
  ├── Makefile
  ├── webpack.config.js
  ├── assets
  │   └── favicon.ico
  └── src
      ├── index.html
      ├── index.js
      ├── actions/
      ├── reducers/
      ├── utils/
      └── containers/
          ├── components/
          └── app.js
```

### How to use

#### Development

- Debug:

```npm
$ yarn start
```

Check result:
```bash
$ http localhost:3000 (or curl localhost:3000)
```

:v:

#### Production

- Build:

```npm
$ yarn build
```

- Deploy:

`docker-compose up` or `make deploy`

- Check result:
```bash
$ http localhost:8080 (or curl localhost:8080)
```

:v:

### References

- [JavaScript ES6 — write less, do more](https://medium.freecodecamp.org/write-less-do-more-with-javascript-es6-5fd4a8e50ee2)
- [redux-architecture](https://github.com/markerikson/react-redux-links/blob/master/redux-architecture.md)
- [Tips to learn React + Redux in 2018](https://www.robinwieruch.de/tips-to-learn-react-redux/)
- [React + Redux — Best Practices](https://medium.com/js-imaginea/best-practices-with-react-and-redux-application-1e94a6f214a0)
- [Usage with React](https://redux.js.org/basics/usagewithreact)
- [React Redux Tutorial for Beginners: The Definitive Guide (2018)](https://www.valentinog.com/blog/react-redux-tutorial-beginners/)
- [React + Redux Architecture: Separation of Concerns](https://medium.freecodecamp.org/react-redux-architecture-part-1-separation-of-concerns-812da3b08b46)
- [Getting Started with React-Redux](https://hackernoon.com/getting-started-with-react-redux-1baae4dcb99b)
- [Connecting Redux to React Using React Redux](https://alligator.io/react/react-redux/)
- [Setting Up a Redux Project With Create-React-App](https://medium.com/backticks-tildes/setting-up-a-redux-project-with-create-react-app-e363ab2329b8)
- [React-Redux connect(): when and how to use it](https://blog.logrocket.com/react-redux-connect-when-and-how-to-use-it-f2a1edab2013)

