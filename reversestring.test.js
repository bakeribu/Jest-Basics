//This file checks whether the string is reversed or not.

const reverseString = require('./reversestring');
test('reverse String should be ', () => {
    expect(reverseString).toBeDefined();
});

test('String reverses', () => {
    expect(reverseString('hello')).toEqual('olleh');
});
