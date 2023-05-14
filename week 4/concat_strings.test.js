const { default: TestRunner } = require('jest-runner');
const concat_strings = require('./concat_strings');

test('concat_strings', () => {
    expect(concat_strings('Hello', 'World')).toBe('HelloWorld');
});