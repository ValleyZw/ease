# React With Webpack

>Build react app from "scratch" requires two other tools: [webpack](https://webpack.js.org/) for bundle modules and [babel](https://babeljs.io/) for trans-pile code. 

## Content

- [Init Project](#init-project)
- [Folder Structure](#folder-structure)
- [How to use](#how-to-use)
  - [Development](#development)
  - [Production](#production)
- [References](#references)

### Init Project

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
  ├── README.md
  ├── node_modules/
  ├── package.json
  ├── docker-compose.yml
  ├── Makefile
  ├── assets
  │   └── favicon.ico
  └── src
      ├── index.html
      ├── index.js
      └── pages/
          ├── about/
          ├── error/
          ├── home/
          ├── login/
          └── App.js
```

### How to use

#### Development

[Node.js](https://nodejs.org) and the package manager [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) are required.

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

- [Tutorial: How to set up React, webpack 4, and Babel 7 (2018)](https://www.valentinog.com/blog/react-webpack-babel/)
- [Getting started with REACT.js, using Webpack and Babel](https://medium.com/@siddharthac6/getting-started-with-react-js-using-webpack-and-babel-66549f8fbcb8)
- [How to conquer Webpack 4 and build a sweet React app](https://medium.freecodecamp.org/how-to-conquer-webpack-4-and-build-a-sweet-react-app-236d721e6745)




