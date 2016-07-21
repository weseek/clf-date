# clf-date
[![dev-dependencies status](https://david-dm.org/lludol/clf-date/dev-status.svg)](https://david-dm.org/lludol/clf-date#info=devDependencies)
[![Build Status](https://travis-ci.org/lludol/clf-date.svg?branch=master)](https://travis-ci.org/lludol/clf-date)
[![Coverage Status](https://coveralls.io/repos/github/lludol/clf-date/badge.svg?branch=master)](https://coveralls.io/github/lludol/clf-date?branch=master)
[![npm version](https://badge.fury.io/js/clf-date.svg)](https://badge.fury.io/js/clf-date)

Return the current date in CLF format: %d/%b/%Y:%H:%M:%S %z.

## Executable

```bash
npm install -g clf-date

# Without parameter
clf-date

# With parameter (everything which works with Date.parse)
clf-date 2042
```

## Node.js library

```js
const clfDate = require('clf-date');

// Without parameter it will use the current time.
console.log(clfDate());

// With a Date in parameter.
const date = new Date();
date.setFullYear(2042);
console.log(clfDate(date);
```

## Contributing

Don't hesitate to [create a pull request](https://github.com/lludol/clf-date/pulls) to improve the project.

## Bugs

If you find a bug or want a new feature, dont'hesitate to [create an issue](https://github.com/js-slave/js-slave-manager/issues).

## License

[MIT](LICENSE)
