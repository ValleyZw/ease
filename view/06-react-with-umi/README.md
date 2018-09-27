# React Server Render

>Build react app with [umi](https://umijs.org/). 

## Content

- [Init Project](#init-project)
- [Folder Structure](#folder-structure)
- [How to use](#how-to-use)
  - [Development](#development)
  - [Production](#production)
- [References](#references)
- [Summary](#summary)

### Init Project

[Node.js](https://nodejs.org) and the package manager [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) are required.

- Init project:

```npm
$ yarn init -y
```

- Add packages: 

    - umi
    
```npm
$ yarn add umi
```

- Add scripts:

>add scripts bellow to package.json
```json
{
  "scripts": {
    "dev": "umi dev",
    "build": "umi build"
  }
}
``` 

- Add configuration file and main scripts

```bash
touch .umirc.js
```

:v:
  
### Folder Structure

```bash
my-app
  ├── .umirc.js
  ├── README.md
  ├── node_modules/
  ├── package.json
  ├── docker-compose.yml
  ├── Makefile
  ├── public
  │   └── favicon.ico
  └── src/
      ├── layouts
      │   └── index.js
      └── pages
          ├── about/
          ├── home/
          ├── login/
          ├── 404.js
          ├── document.ejs
          └── index.js
```

### How to use

#### Development

- Debug:

```npm
$ yarn dev
```

- Check result:
```bash
$ http localhost:8000 (or curl localhost:8000)
```

:v:

#### Production

- Deploy:

`docker-compose up` or `make deploy`

Check result:
```bash
$ http localhost:8080 (or curl localhost:8080)
```

:v:

### References

- [UmiJs](https://umijs.org)
- [antd-admin](https://github.com/zuiidea/antd-admin)
- [ant-design-pro](https://github.com/ant-design/ant-design-pro)

### Summary

>umi itself is a fast and flexible framework. It absorbs good features from next.js and keeps the flexibility to take advantage of the good part of golang and container.  


