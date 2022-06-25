//This file will check whether the logic created checks whether one string is an anagram of the other string or not.
const checkanagram = require('./anagram')

test('isAnagram function exists', () => {
  expect(typeof checkanagram).toEqual('function');
});

test('"cinema" is an anagram of "iceman"', () => {
  expect(checkanagram('cinema', 'iceman')).toBeTruthy();
});

test('"Dormitory" is an anagram of "dirty room##"', () => {
  expect(checkanagram('Dormitory', 'dirty room##')).toBeTruthy();
});

test('"Hello" is NOT an anagram of "Aloha"', () => {
  expect(checkanagram('Hello', 'Aloha')).toBeFalsy();
});