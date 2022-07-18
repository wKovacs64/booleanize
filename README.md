# @wkovacs64/booleanize

_A small utility to coerce a value to its boolean equivalent._

[![npm Version][npm-image]][npm-url]
[![Code Coverage][coverage-image]][coverage-url]
[![semantic-release][semantic-release-image]][semantic-release-url]
[![Build Status][ci-image]][ci-url]

## Installation

```
npm install @wkovacs64/booleanize
```

## Usage

The primary purpose of this package is to deal with environment variables
received as strings. For example, `SOME_CONDITIONAL=false` will be truthy if you
just pass it to the `Boolean` constructor as it comes through as a non-empty
string. Instead, pass it to `booleanize` and you will get the value back that I
expect. Please note that it may not be the value YOU expect, but I created this
primarily for myself. 🙂

Basically, the following strings are considered falsy:

- `'null'`
- `'undefined'`
- `'false'`
- `'no'`
- `'0'`

### Example

```
# .env
SOME_CONDITIONAL=false
```

```ts
import { booleanize } from '@wkovacs64/booleanize';

Boolean(process.env.SOME_CONDITIONAL); // true 😕
booleanize(process.env.SOME_CONDITIONAL); // false 😊
```

## License

This module is distributed under the [MIT License][license].

[npm-image]:
  https://img.shields.io/npm/v/@wkovacs64/booleanize.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@wkovacs64/booleanize
[ci-image]:
  https://github.com/wKovacs64/booleanize/actions/workflows/ci.yml/badge.svg?event=push
[ci-url]: https://github.com/wKovacs64/booleanize/actions/workflows/ci.yml
[coverage-image]:
  https://img.shields.io/codecov/c/github/wKovacs64/booleanize/main.svg?style=flat-square
[coverage-url]: https://codecov.io/gh/wKovacs64/booleanize/branch/main
[semantic-release-image]:
  https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[license]: https://github.com/wKovacs64/booleanize/tree/main/LICENSE
