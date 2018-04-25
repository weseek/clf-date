# @weseek/clf-date

Return the current date in CLF format: %d/%b/%Y:%H:%M:%S %z.

## Executable

```bash
npm install -g clf-date # or yarn global add clf-date

# Without parameter
clf-date

# With parameter (everything which works with Date.parse)
clf-date 2042
```

## Node.js library

```bash
npm install clf-date # or yarn add clf-date
```

```js
const clfDate = require('clf-date');

// Without parameter it will use the current time.
console.log(clfDate());

// With a Date in parameter.
const date = new Date();
date.setFullYear(2042);
console.log(clfDate(date);
```

## License

[MIT](LICENSE)
