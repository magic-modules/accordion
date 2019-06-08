## @magic-modules/accordion

[@magic](https://magic.github.io/core)-module that vertically shows/hides tabs in an accordion

[html-docs](https://magic-modules.github.io/accordion)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic-modules/accordion.svg
[npm-url]: https://www.npmjs.com/package/@magic-modules/accordion
[travis-image]: https://api.travis-ci.org/magic-modules/accordion.svg?branch=master
[travis-url]: https://travis-ci.org/magic-modules/accordion
[appveyor-image]: https://img.shields.io/appveyor/ci/magicmodules/accordion/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magicmodules/accordion/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-modules/accordion/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-modules/accordion
[greenkeeper-image]: https://badges.greenkeeper.io/magic-modules/accordion.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-modules/accordion.svg
[snyk-image]: https://snyk.io/test/github/magic-modules/accordion/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-modules/accordion

#### install:
```bash
npm install --save-exact @magic-modules/accordion
```

#### usage:
```javascript
// in any component view
export const View = () => Accordion({
  // state key of this accordion, eg state.accordions.stateKey = int id of shown submenu
  key: 'stateKey', // required
  // array of items to show
  // title OR content are optional, but not both.
  items: [ // required
    { title: 'item 1 title', content: 'item 1 content' },
    { title: 'item 2 title', content: ['item 2 content ', img('/img/logo.png'), ' can also include html tags']}
  ],
  // render horizontal tabs
  horizontal: true, // optional,

  // object with additional css
  style: { // optional
    maxWidth: '40%',
  },
})
```