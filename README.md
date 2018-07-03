# has-empty-property 

> Returns true if the object has a empty property.

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
hasEmptyProperty({a: undefined});       // true
```

### False

Everything else is false, as you would expect:

```js
hasEmptyProperty({a: 'aa'});           // false
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
