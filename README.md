Because a bug ([lludol/clf-date#7](https://github.com/lludol/clf-date/pull/7)) in 'lludol/clf-date' has been fixed, this package will be removed soon.

# @weseek/clf-date

Return the current date in CLF format: %d/%b/%Y:%H:%M:%S %z.

The purpose of this package is to fix the bug ([lludol/clf-date#7](https://github.com/lludol/clf-date/pull/7)).

## Executable

```bash
npm install -g @weseek/clf-date # or yarn global add clf-date

# Without parameter
clf-date

# With parameter (everything which works with Date.parse)
clf-date 2042
```

## Node.js library

```bash
npm install @weseek/clf-date # or yarn add clf-date
```

```js
const clfDate = require('@weseek/clf-date');

// Without parameter it will use the current time.
console.log(clfDate());     # Ex) Output log "12/May/2018:19:29:27 +0900"

// With a Date in parameter.
const date = new Date();
date.setFullYear(2042);
console.log(clfDate(date)); # Ex) Output log "12/May/2042:19:29:27 +0900"
```

## License

[MIT](LICENSE)
