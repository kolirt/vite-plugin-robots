<div align="center">
  <a href="https://vitejs.dev/"><img width="200" height="200" hspace="10" src="https://vitejs.dev/logo.svg" alt="vite logo" /></a>
  <h1>Vite Robots.txt</h1>

  <p>
    Plugin for <a href="https://vitejs.dev/">Vite</a> to generating robots.txt for production and development builds.
  </p>
  
  <img src="https://img.shields.io/node/v/vite-plugin-robots" alt="node-current" />
  
  <img src="https://img.shields.io/npm/dependency-version/vite-plugin-robots/peer/vite" alt="npm peer dependency version" />
  
  <img src="https://img.shields.io/bundlephobia/minzip/vite-plugin-robots?label=minfied" alt="npm bundle size"/>
  
  <a href="https://www.npmjs.com/package/vite-plugin-robots" target="_blank">
    <img src="https://img.shields.io/npm/v/vite-plugin-robots" alt="npm-version" /></a>

  <img src="https://img.shields.io/npm/l/vite-plugin-robots" alt="licence" />
</div>

<br/>

<a href="https://www.buymeacoffee.com/kolirt" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/arial-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" >
</a>

## Introduction

The package allows you to customize different `robots.txt` for `production` mode and `development` mode.

```bash
vite build
```
<img src="./posters/prod.png">

```bash
vite build --mode=development
```
<img src="./posters/dev.png">

## Installation

Use yarn or npm to install the package `vite-plugin-robots`.

```bash
npm install -D vite-plugin-robots

yarn add --dev vite-plugin-robots
```

## Setup

```ts
import { robots } from 'vite-plugin-robots'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    robots({
      /* pass your config */
    })
  ]
})
```

## Configuration robot.txt

The package copies the corresponding robots.txt according to the build mode.

```
.robots.[mode].txt         # only loaded in specified mode
.robots.[mode].txt.local   # only loaded in specified mode, ignored by git
```

Create `.robots.production.txt` and `.robots.development.txt` in the project root and the package will start using them.

## License
[MIT](./LICENSE)
