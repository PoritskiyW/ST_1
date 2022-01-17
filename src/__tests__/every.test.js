const every = require('../every');

const callback = (num) => {
    return num % 2 === 0;
}

describe('every', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test.each([
        [[8, 2, 4], callback, true],
        [[1, 5, 7], callback, false],
        [[], callback, false],
        [1, callback, false],
        [[1, 5, 7], 'callback', false],
    ])('every', function (arr, func, result) {
        expect(every(arr, func)).toBe(result);
    });
})