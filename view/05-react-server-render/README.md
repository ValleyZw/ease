# React Server Render

>Build server-rendered React application with [nextjs](https://nextjs.org). 

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

    - React
    
```npm
$ yarn add react react-dom
```

- Add packages: 

    - Nextjs
    
```npm
$ yarn add next
```

- Add scripts:

>add scripts bellow to package.json
```json
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
``` 

- Add main scripts

:v:
  
### Folder Structure

```bash
my-app
  ├── README.md
  ├── node_modules/
  ├── package.json
  ├── docker-compose.yml
  ├── Makefile
  ├── componsnts
  │   └── App.js
  ├── static
  │   └── favicon.ico
  └── pages/
      ├── about/
      ├── home/
      ├── login/
      ├── _app.js
      ├── _document.js
      ├── _error.js
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
$ http localhost:3000 (or curl localhost:3000)
```

:v:

#### Production

- Add Dockerfile:

```bash
$ touch .dockerfile Dockerfile
```

- Build container:

```bash
$ make build
```

- Deploy:

`docker-compose up` or `make deploy`

- Check result:
```bash
$ http localhost:8080 (or curl localhost:8080)
```

:v:

### References

- [GETTING STARTED WITH NEXT.JS](https://flaviocopes.com/nextjs/)
- [Why I chose React + Next.js for my next website instead of Vue or Angular](https://medium.freecodecamp.org/use-react-with-next-js-framework-and-how-it-made-my-life-easier-4280b643451)
- [Next.js Tutorial: SEO-Friendly React E-Commerce SPA](https://snipcart.com/blog/react-seo-nextjs-tutorial)
- [USING REACT AND NEXT.JS TO BUILD A PWA – THE BEGINNER’S GUIDE](https://aerolab.co/blog/react-nextjs-pwa)
- [Next.js — React Server Side Rendering Done Right](https://hackernoon.com/next-js-react-server-side-rendering-done-right-f9700078a3b6)
- [Building Server-rendered React Apps with NextJS](https://medium.com/@tilomitra/building-server-rendered-react-apps-with-nextjs-40313e978cb4)
- [The Complete Guide to Build a Full Blown Multilanguage Website with Next.js](https://www.storyblok.com/tp/next-js-react-guide)
- [We migrated to Next.js to serve our home page 7.5× faster](https://blog.manifold.co/we-migrated-to-next-js-to-serve-our-home-page-7-5-faster-559443219c84)
- [BUILDING A BLOG WITH NEXT.JS](https://timber.io/blog/building-a-blog-with-next-js/)
- [5 (of the many reasons) to love Zeit's Next.js](https://www.codementor.io/tgreco/5-of-the-many-things-to-love-about-zeit-s-next-js-bpszu99g1)
- [Migrating an app to Next.js: Lessons learned](https://medium.com/@jamischarles/lessons-learned-with-next-js-change-title-6423b2f2ab8d)
- [Deploy a commercial Next.js application with pkg and docker](https://medium.com/@evenchange4/deploy-a-commercial-next-js-application-with-pkg-and-docker-5c73d4af2ee)

### Summary

>Next.js is awesome, but it suffers from a deficiency: it's server side often depend on nodejs or express etc, hence the minimal docker image size may be limited to 40~60MB, fatter than those images build by golang.