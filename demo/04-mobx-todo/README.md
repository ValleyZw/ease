# React Mobx TODO App

>Build todo app with [react](https://reactjs.org/) and [mobx](https://mobx.js.org/). 

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

    - mobx
    
```npm
$ yarn add mobx mobx-react
```

- Add packages: 

    - Webpack
    
```npm
$ yarn add --dev webpack webpack-cli webpack-dev-server
```

- Add packages: 

    - Babel
    
```npm
$ yarn add --dev @babel/core @babel/preset-env @babel/preset-react babel-loader @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties
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
      ├── models/
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

- [Mobx Introduction](https://mobx.js.org/index.html)
- [Mobx React — Best Practices](https://medium.com/dailyjs/mobx-react-best-practices-17e01cec4140)
- [Introduction to MobX 4 for React/Redux Developers](https://dev.to/swyx/introduction-to-mobx-4-for-reactredux-developers-3k07)
- [Ditching setState for MobX](https://medium.com/react-native-training/ditching-setstate-for-mobx-766c165e4578)
- [Manage Complex State in React Apps with MobX](https://egghead.io/courses/manage-complex-state-in-react-apps-with-mobx)
- [How to build your first app with Mobx and React](https://hackernoon.com/how-to-build-your-first-app-with-mobx-and-react-aea54fbb3265)
- [MobX vs Redux with React: A noob’s comparison and questions](https://codeburst.io/mobx-vs-redux-with-react-a-noobs-comparison-and-questions-382ba340be09)
- [awesome-mobx](https://github.com/mobxjs/awesome-mobx)
