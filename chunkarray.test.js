//This file will check whether the input array when chunked gives the correct output or not.

const chunkarray = require('./chunkarray');
test('Check the chunks Array is Defined ', () =>{
    expect(chunkarray).toBeDefined();
}); 
test('Chunk an array of 10 values with length of 2', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const len = 2;
    const chunkedArr = chunkarray(numbers, len);
  
    expect(chunkedArr).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
  });
  
  test('Chunk an array of 3 values with length of 1', () => {
    const numbers = [1, 2, 3];
    const len = 1;
    const chunkedArr = chunkarray(numbers, len);
  
    expect(chunkedArr).toEqual([[1], [2], [3]]);
  });
