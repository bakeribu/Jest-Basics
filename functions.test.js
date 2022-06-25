//Chapter: 1(Unit testing and Matchers)
//This file is created to test the function created by passing the original function through some test cases.
const functions = require('./functions');

//There are various function that are to be called when the data is take from the database or when the database is closed.

beforeAll(() => initDatabase()); //Used when the database is initialized.
afterAll(() => closedDatabase());//Used when the database is closed.
const initDatabase = () => console.log('Database Initialized...');
const closedDatabase = () => console.log('Database closed....');

//Check whether the input matches with the expected output or not.
test('Adds 2 + 2 equals 4', () => {
    expect(functions.add(2,2)).toBe(4);
});

//Check whether the input do not matches with the expected output or not.
test('Adds 2 + 2 to NOT equals 4', () => {
    expect(functions.add(2,2)).not.toBe(5);
});

//Checks whether the input function is undefined or not.
test('Should be NULL', () => {
    expect(functions.isundefined()).toBeUndefined();
});

//Check whether the input value is truthy or falsy.
test('Should be falsy',() => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});


//Working with async Data.
//Using Promise
test('User fechted name should be' , () => {
    expect.assertions(1);
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham');
        });
});

//Using Async await
test('User fechted name should be' , async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});

