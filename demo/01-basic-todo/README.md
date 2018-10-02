# React TODO App

>Build todo app with basic [react](https://reactjs.org/). 

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
$ yarn add react react-dom
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

- Check result:
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

- [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- [Container Components](https://medium.com/@learnreact/container-components-c0e67432e005)
- [React Patterns](https://reactpatterns.com/)
- [I created the exact same app in React and Vue. Here are the differences](https://medium.com/javascript-in-plain-english/i-created-the-exact-same-app-in-react-and-vue-here-are-the-differences-e9a1ae8077fd)
- [All the fundamental React.js concepts, jammed into this single Medium article](https://medium.freecodecamp.org/all-the-fundamental-react-js-concepts-jammed-into-this-single-medium-article-c83f9b53eac2)
- [The most important lessons I’ve learned after a year of working with React](https://medium.freecodecamp.org/mindset-lessons-from-a-year-with-react-1de862421981)
- [Fractal — A react app structure for infinite scale](https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af)
- [Stateful vs. Stateless Functional Components in React](https://code.tutsplus.com/tutorials/stateful-vs-stateless-functional-components-in-react--cms-29541)