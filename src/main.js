/**
 * Convert the Number to String with 0 at the beginning.
 * @param  {Number} n - The number.
 * @return {String} The number converted to String.
 */
function numberToString(n) {
	const str = n.toString();
	return `${str.length === 1 ? '0' : ''}${str}`;
}

/**
 * Return the offset from UTC in CLF format.
 * @param {Date} date - The date
 * @return {String} The offset.
 */
function getCLFOffset(date) {
	const offset	= date.getTimezoneOffset().toString();
	const op		= offset[0] === '-' ? '-' : '+';
	let number		= offset.replace(op, '');

	while (number.length < 4) {
		number = `0${number}`;
	}

	return `${op}${number}`;
}

module.exports = function(now = new Date()) {
	if (!(now instanceof Date)) {
		throw new Error('clf-date: invalid parameter');
	}

	const MONTHS = [
		'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
		'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
	];

	const day		= numberToString(now.getUTCDate());
	const month		= MONTHS[now.getUTCMonth()];
	const year		= now.getUTCFullYear();

	const hours		= numberToString(now.getUTCHours());
	const minutes	= numberToString(now.getUTCMinutes());
	const seconds	= numberToString(now.getUTCSeconds());

	const offset	= getCLFOffset(now);

	return `${day}/${month}/${year}:${hours}:${minutes}:${seconds} ${offset}`;
};
