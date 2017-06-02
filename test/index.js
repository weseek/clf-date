const expect	= require('chai').expect;
const clfDate	= require('../out/main.js');

describe('clf-date', () => {
	describe('without parameter', () => {
		it('return the current Date in clf format', (done) => {
			expect(clfDate()).match(/\d{2}\/[A-Z][a-z]{2}\/\d{4}:\d{2}:\d{2}:\d{2} [+-]\d{4}/);
			done();
		});
	});
	describe('with parameter (the current Date)', () => {
		it('return the current Date in clf format', (done) => {
			const customDate = new Date('2042-01-02T23:42:00');
			expect(clfDate(customDate)).match(/02\/Jan\/2042:23:42:00 [+-]\d{4}/);
			done();
		});
	});
	describe('when the parameter is invalid', () => {
		it('throw an error', (done) => {
			expect(() => { clfDate(42); }).to.throw('clf-date: invalid parameter');
			done();
		});
	});
});
