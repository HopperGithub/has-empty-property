# has-empty-property 

> Returns true if the object has a empty property.

Please consider following this project's author, [Hopper Sun](https://github.com/HopperGithub), and consider starring the project to show your :heart: and support.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save has-empty-property
```

## Why is this needed?

In JavaScript, it's not always as straightforward as it should be to reliably check if a obj has a emtpy property. There are many non-intuitive edge cases that yield unexpected results:

```js
console.log(+[]); //=> 0
console.log(+''); //=> 0
console.log(+'   '); //=> 0
console.log(typeof NaN); //=> 'number'
```

This library offers a performant way to smooth out edge cases like these.

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

<details>
<summary><strong>Building docs</strong></summary>

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

</details>

### License

Copyright © 2018, [Hopper Sun](https://github.com/HopperGithub).
Released under the [MIT License](LICENSE).

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on June 15, 2018._