# has-empty-property [![NPM version](https://img.shields.io/npm/v/has-empty-property.svg?style=flat)](https://www.npmjs.com/package/has-empty-property)  [![License](https://img.shields.io/github/license/HopperGithub/has-empty-property.svg)](https://travis-ci.org/jonschlinkert/has-empty-property)


> Returns true if the object does not have a property, or exsiting a empty property.

Please consider following this project's author, [Hopper Sun](https://github.com/HopperGithub), and consider starring the project to show your :heart: and support.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save has-empty-property
```

## Usage

```js
const hasEmptyProperty = require('has-empty-property');
```

See the [tests](./test.js) for more examples.

### true

```js
hasEmptyProperty({a: undefined, b:'1'});       // true
hasEmptyProperty({a: null, b:'1'});            // true
hasEmptyProperty({a: '', b:'1'});              // true
hasEmptyProperty({});                          // true
```

### False

Everything else is false, as you would expect:

```js
hasEmptyProperty({a: '0', b:'1'});             // false
hasEmptyProperty({a: ' ', b:'1'});             // false
hasEmptyProperty({a: 'null', b:'1'});          // false
hasEmptyProperty({a: 0, b:'1'});               // false
hasEmptyProperty({a: true, b:'1'});            // false
```

## About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

</details>

<details>
<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

</details>

### License

Copyright © 2018, [Hopper Sun](https://github.com/HopperGithub).
Released under the [MIT License](LICENSE).
